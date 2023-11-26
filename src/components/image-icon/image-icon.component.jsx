import { useContext } from "react";
import { AppDataContext } from "../../context/app-data.context";
import "./image-icon.styles.scss";
const ImageIcon = ({ userId }) => {
  const { users } = useContext(AppDataContext);
  let active = null;
  users.forEach((user) => {
    if (user.id === userId) {
      active = user.available ? "active" : "inactive";
    }
  });
  return (
    <div className={`user-icon ${active}`}>
      <img
        src="https://i.ibb.co/vdw4JSK/user.png" // Replace with your user image URL
        alt="User"
        className="user-image"
      />
      {active && <div className="status-dot"></div>}
    </div>
  );
};

export default ImageIcon;
