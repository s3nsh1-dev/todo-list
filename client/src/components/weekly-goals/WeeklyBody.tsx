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
} from "../../redux/slices/weeklyGoalsSlice";
import ShowEditModal from "../common/ShowEditModal";

const content =
  "The `weeklySlice` manages weekly goals, allowing users to add, remove, and update tasks efficiently. It leverages Immer for immutability, enabling direct state modifications. Goals can be added with a unique ID, removed by filtering, or updated by modifying their name—all while keeping Redux state management seamless and optimized.";

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

  // const handleOnChangeInput = (value: string) => {
  //   setUserValue(value);
  // };
  console.log("Weekly body rendering:", editData);

  const handleDeleteGoal = (value: string) => {
    dispatch(removeWeeklyGoals(value));
  };

  const handleEditWGoal = ({ id, name }: { id: string; name: string }) => {
    editData.current.id = id;
    editData.current.oldName = name;
    console.log("editData: ", editData);
    toggleModal();
  };

  const toggleModal = () => {
    setOpen((open) => !open);
  };

  const handleSubmit = () => {
    console.log("id:", editData.current.id, ",userInput:", userValue);
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

  return (
    <>
      <IntroToManagement heading="Introduction" content={content} />
      <CompletedContainer heading="Completed Goals">
        {renderCompletedWTasks}
      </CompletedContainer>
      <OngoingContainer heading="Ongoing Goals">
        {renderOngoingWGoals}
      </OngoingContainer>
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
