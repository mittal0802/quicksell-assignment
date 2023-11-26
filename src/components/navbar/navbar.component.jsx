import "./navbar.styles.scss";
import {
  HiAdjustmentsHorizontal,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="display-button" onClick={onClickHandler}>
        <HiAdjustmentsHorizontal />
        <div>Display</div>
        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      {isOpen ? (
        <div className="display-dropdown">
          <div className="dropdown-options">
            <label htmlFor="grouping">Grouping</label>
            <select name="grouping" id="grouping">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-options">
            <label htmlFor="Ordering">Ordering</label>
            <select name="Ordering" id="Ordering">
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
