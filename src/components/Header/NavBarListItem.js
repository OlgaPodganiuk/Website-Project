import react from "react";

const NavBarListItem = (props) => {
  return (
    <li>
      <button>{props.onContent}</button>
    </li>
  );
};

export default NavBarListItem;