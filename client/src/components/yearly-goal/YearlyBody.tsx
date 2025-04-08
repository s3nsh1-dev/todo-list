import { useMemo, useState, useRef } from "react";
import { RootState } from "../../redux/store";
import IntroToManagement from "../common/IntroToManagement";
import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";
import CompletedDivision from "../common/CompletedDivision";
import OngoingDivision from "../common/OngoingDivision";
import { useDispatch, useSelector } from "react-redux";
import {
  removeYearlyGoal,
  updateYearlyGoalStatus,
  updateYearlyGoalName,
} from "../../redux/slices/yearlyGoalsSlice";
import ShowEditModal from "../common/ShowEditModal";
import { yearlyContent as content } from "../../constants/GenericConstants";
import DndKitDefault from "../others/DndKitDefault";

const YearlyBody = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userValue, setUserValue] = useState<string>("");
  const editData = useRef<{ id: string; oldName: string }>({
    id: "",
    oldName: "",
  });

  const GG = useSelector(
    (state: RootState) => state.yearlyResolution.yearlyGoalList
  );

  //these will reduce the possibility or re-render when there is not change in global status but in local states
  const ongoingYGoals = useMemo(() => {
    return [...GG].filter((goal) => goal.status === "ONGOING");
  }, [GG]);

  const completedYGoals = useMemo(() => {
    return [...GG].filter((goal) => goal.status === "DONE");
  }, [GG]);

  const dispatch = useDispatch();

  const handleStatusUpdate = (value: string) => {
    dispatch(updateYearlyGoalStatus(value));
  };

  const handleDeleteGoal = (value: string) => {
    dispatch(removeYearlyGoal(value));
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
      updateYearlyGoalName({ id: editData.current.id, name: userValue })
    );
    toggleModal();
  };

  const renderCompletedWTasks = completedYGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal.id}
        id={goal.id}
        index={index}
        arrLength={completedYGoals.length}
        name={goal.yearlyGoalName}
        handleDelete={handleDeleteGoal}
        handleStatusUpdate={handleStatusUpdate}
      />
    );
  });
  const renderOngoingWGoals = ongoingYGoals.map((goal, index) => {
    return (
      <OngoingDivision
        key={goal.id}
        id={goal.id}
        name={goal.yearlyGoalName}
        index={index}
        arrLength={ongoingYGoals.length}
        handleStatus={handleStatusUpdate}
        handleEditGoal={handleEditWGoal}
      />
    );
  });

  const isDisabled = userValue.length > 1 ? false : true;

  return (
    <>
      <IntroToManagement heading="Introduction" content={content} />
      <CompletedContainer heading="Completed">
        {renderCompletedWTasks}
      </CompletedContainer>
      <DndKitDefault
        memoizedGoals={ongoingYGoals}
        completedGoals={completedYGoals}
      >
        <OngoingContainer heading="Ongoing">
          {renderOngoingWGoals}
        </OngoingContainer>
      </DndKitDefault>
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

export default YearlyBody;

/*

 *Learning of the Component
 when react re-render it does not change the value for state and ref (in Correct words: useRef and useState values
 persist when a re-render is triggered, state value is noted at the first render)
 when u want UI to render after a variable change use state and if only maintain a value with persistence
 across the re-render cycle use Ref

*/
