import { useMemo, useState, useRef } from "react";
import { RootState } from "../../redux/store";
import IntroToManagement from "../common/IntroToManagement";
import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";
import CompletedDivision from "../common/CompletedDivision";
import OngoingDivision from "../common/OngoingDivision";
import { useDispatch, useSelector } from "react-redux";
import {
  removeWeeklyGoals,
  updateWeeklyGoalStatus,
  updateWeeklyGoalName,
  reInitializeWeeklyGoals,
} from "../../redux/slices/weeklyGoalsSlice";
import ShowEditModal from "../common/ShowEditModal";
import { weeklyContent as content } from "../../constants/GenericConstants";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const WeeklyBody = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userValue, setUserValue] = useState<string>("");
  const editData = useRef<{ id: string; oldName: string }>({
    id: "",
    oldName: "",
  });

  const GG = useSelector(
    (state: RootState) => state.weeklyGoals.weeklyGoalsList
  );

  //these will reduce the possibility or re-render when there is not change in global status but in local states
  const ongoingWGoals = useMemo(() => {
    return [...GG].filter((goal) => goal.wGoalsStatus === "ONGOING");
  }, [GG]);

  const completedWGoals = useMemo(() => {
    return [...GG].filter((goal) => goal.wGoalsStatus === "DONE");
  }, [GG]);

  const dispatch = useDispatch();

  const handleStatusUpdate = (value: string) => {
    dispatch(updateWeeklyGoalStatus(value));
  };

  const handleDeleteGoal = (value: string) => {
    dispatch(removeWeeklyGoals(value));
  };

  const handleEditWGoal = ({ id, name }: { id: string; name: string }) => {
    editData.current.id = id;
    editData.current.oldName = name;
    toggleModal();
  };

  const toggleModal = () => {
    setOpen((open) => !open);
  };

  const handleSubmit = () => {
    dispatch(
      updateWeeklyGoalName({ id: editData.current.id, name: userValue })
    );
    toggleModal();
  };

  const renderCompletedWTasks = completedWGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal.id}
        id={goal.id}
        index={index}
        arrLength={completedWGoals.length}
        name={goal.wGoalsName}
        handleDelete={handleDeleteGoal}
        handleStatusUpdate={handleStatusUpdate}
      />
    );
  });
  const renderOngoingWGoals = ongoingWGoals.map((goal, index) => {
    return (
      <OngoingDivision
        key={goal.id}
        id={goal.id}
        name={goal.wGoalsName}
        index={index}
        arrLength={ongoingWGoals.length}
        handleStatus={handleStatusUpdate}
        handleEditGoal={handleEditWGoal}
      />
    );
  });

  const isDisabled = userValue.length > 1 ? false : true;
  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <IntroToManagement heading="Introduction" content={content} />
      <CompletedContainer heading="Completed Goals">
        {renderCompletedWTasks}
      </CompletedContainer>
      <DndContext
        modifiers={[restrictToParentElement]}
        sensors={sensor}
        collisionDetection={closestCorners}
        onDragEnd={(e) => {
          const { active, over } = e;
          if (!over) return;
          if (active.id === over.id) return;
          const originalIndex = ongoingWGoals.findIndex(
            (goal) => goal.id === active.id
          );
          const newIndex = ongoingWGoals.findIndex(
            (goal) => goal.id === over.id
          );
          const updateWeeklyGoalsWithNewIndex = arrayMove(
            ongoingWGoals,
            originalIndex,
            newIndex
          );

          dispatch(
            reInitializeWeeklyGoals([
              ...updateWeeklyGoalsWithNewIndex,
              ...completedWGoals,
            ])
          );
        }}
      >
        <SortableContext
          items={ongoingWGoals.map((goal) => goal.id)}
          strategy={verticalListSortingStrategy}
        >
          <OngoingContainer heading="Ongoing Goals">
            {renderOngoingWGoals}
          </OngoingContainer>
        </SortableContext>
      </DndContext>
      {open && (
        <ShowEditModal
          isDisabled={isDisabled}
          submitEditedTask={handleSubmit}
          userValue={userValue}
          setUserValue={setUserValue}
          open={open}
          onClose={toggleModal}
          placeholder={editData.current.oldName}
        />
      )}
    </>
  );
};

export default WeeklyBody;

/*

 *Learning of the Component
 when react re-render it does not change the value for state and ref (in Correct words: useRef and useState values
 persist when a re-render is triggered, state value is noted at the first render)
 when u want UI to render after a variable change use state and if only maintain a value with persistence
 across the re-render cycle use Ref

*/
