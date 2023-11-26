import { FcOk } from "react-icons/fc";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { LuCircleDashed } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";

const StatusIcon = ({ status }) => {
  return (
    <div
      className="task-status"
      style={{ marginRight: "5px", marginTop: "2px" }}
    >
      {status === "Done" && <FcOk />}
      {status === "In progress" && (
        <FaCircleHalfStroke style={{ color: "orange" }} />
      )}
      {status === "Cancelled" && <FaTimesCircle style={{ color: "red" }} />}
      {status === "Backlog" && <LuCircleDashed />}
      {status === "Todo" && <LuCircle style={{ color: "grey" }} />}
    </div>
  );
};
export default StatusIcon;
