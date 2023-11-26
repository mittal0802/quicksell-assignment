import "./navbar.styles.scss";
import {
  HiAdjustmentsHorizontal,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";
import { useState, useContext, useEffect } from "react";
import { AppDataContext } from "../../context/app-data.context";

const Navbar = () => {
  const { setGrouping, setOrdering } = useContext(AppDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const getGroup = () => {
    if (localStorage.getItem("group")) {
      return localStorage.getItem("group");
    } else {
      return "status";
    }
  };

  const getOrder = () => {
    if (localStorage.getItem("order")) {
      return localStorage.getItem("order");
    } else {
      return "priority";
    }
  };

  const [group, setGroup] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "grouping") {
      setGroup(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      localStorage.setItem("order", e.target.value);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setGrouping(group);
    setOrdering(order);
  }, [group, order]);

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
            <select
              name="grouping"
              id="grouping"
              value={group}
              onChange={onChangeHandler}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-options">
            <label htmlFor="Ordering">Ordering</label>
            <select
              name="Ordering"
              id="Ordering"
              value={order}
              onChange={onChangeHandler}
            >
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
