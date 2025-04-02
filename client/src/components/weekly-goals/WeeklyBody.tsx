import { useMemo, useState } from "react";
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
import { Modal, Button } from "@mui/material";

const content =
  "The `weeklySlice` manages weekly goals, allowing users to add, remove, and update tasks efficiently. It leverages Immer for immutability, enabling direct state modifications. Goals can be added with a unique ID, removed by filtering, or updated by modifying their name—all while keeping Redux state management seamless and optimized.";

const WeeklyBody = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userValue, setUserValue] = useState<string>("");
  const [editData, setEditData] = useState<{ id: string; oldName: string }>({
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

  const handleOnChangeInput = (value: string) => {
    setUserValue(value);
  };

  const handleDeleteGoal = (value: string) => {
    dispatch(removeWeeklyGoals(value));
  };

  const handleEditWGoal = ({ id, name }: { id: string; name: string }) => {
    setEditData({ id, oldName: name });
  };

  const toggleModal = () => {
    setOpen((open) => !open);
  };

  const handleSubmit = () => {
    dispatch(updateWeeklyGoalName({ id: editData.id, name: userValue }));
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
        <Modal open={open} onClose={toggleModal}>
          <div className="bg-gray-800">
            <div>
              <p>Goal Name</p>
              <input
                type="text"
                value={userValue}
                placeholder={editData.oldName}
                onChange={(event) => {
                  handleOnChangeInput(event.target.value);
                }}
              />
            </div>
            <div>
              <Button color="error" onClick={toggleModal}>
                Close
              </Button>
              <Button color="success" onClick={handleSubmit}></Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default WeeklyBody;
