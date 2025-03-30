import {
  getDayOfTheWeek,
  getMonthAsString,
} from "../constants/commonFunctions";
import WMheader from "../components/week-month/common-wm/WMheader";

const MonthlyGoals = () => {
  const dateInfo = `${getDayOfTheWeek()}, ${getMonthAsString()} ${new Date().getFullYear()}`;
  const toggleModal = () => {};
  return (
    <>
      <WMheader dateInfo={dateInfo} toggleModal={toggleModal} />
    </>
  );
};

export default MonthlyGoals;
