import { useState } from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import style from './Navbar.module.scss'

function Dropdown({ title, items, closeMenu }) {
  // sub-menu state
  const [dropped, setDropped] = useState(false);

  // handle sub-menu state and mouse interactifity
  const handleClick = () => {
    setDropped(!dropped);
  };
  const mouseEnter = () => {
    setDropped(true);
  };
  const mouseLeave = () => {
    setDropped(false);
  };

  // creates array of page link items
  const DropdownItems = items.map((item, index ) => {
    return (
      <li key={index} onClick={handleClick}>
        <Link href={item.path} onClick={closeMenu}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClick}
    >
      {title} <FaCaretDown />
      <ul className={dropped ? style.dropped : ""}>
        {DropdownItems}
      </ul>
    </button>
  );
}
export default Dropdown;
