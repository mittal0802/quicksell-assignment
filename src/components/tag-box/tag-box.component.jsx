import "./tag-box.styles.scss";
import { GoDotFill } from "react-icons/go";
const TagBox = ({ tagTitle }) => {
  return (
    <div className="tag-box">
      <GoDotFill />
      <span className="tag-box-title">{tagTitle}</span>
    </div>
  );
};

export default TagBox;
