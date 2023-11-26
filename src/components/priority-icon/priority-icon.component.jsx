import { CgBorderStyleDotted } from "react-icons/cg";
import { MdSignalCellular1Bar } from "react-icons/md";
import { MdSignalCellular3Bar } from "react-icons/md";
import { MdSignalCellular4Bar } from "react-icons/md";
import { TbUrgent } from "react-icons/tb";
import "./priority-icon.styles.scss";

const PriorityIcon = ({ priority }) => {
  return (
    <div className="priority-icon">
      {priority === 0 && <CgBorderStyleDotted />}
      {priority === 1 && <MdSignalCellular1Bar />}
      {priority === 2 && <MdSignalCellular3Bar />}
      {priority === 3 && <MdSignalCellular4Bar />}
      {priority === 4 && <TbUrgent style={{ color: "red" }} />}
    </div>
  );
};
export default PriorityIcon;
