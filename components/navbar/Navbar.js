import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "./Navbar.module.scss";
import logo from "../../public/icons/logo.webp";
import Dropdown from "./Dropdown";
import { subpages } from "./subpages";


export default function NavBar() {
  const [open, setOpen] = useState(false)

  const menuToggle = ()=> {setOpen(!open)}
  const closeMenu = ()=> {setOpen(false)}

  return (
    <nav className={style.nav}>
      <div>
        <Link href="/" onClick={closeMenu}>
          <Image src={logo} alt="home" width={75} />
        </Link>
        <button
          className={`${style["nav-toggle"]} ${open ? style["open"] : ""}`}
          onClick={menuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`${!open && style["closed"]}`}>
        <li onClick={closeMenu}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Dropdown
            title={"Services"}
            items={subpages.Services}
            closeMenu={closeMenu}
          />
        </li>
        <li>
          <Dropdown
            title={"Forms"}
            items={subpages.Forms}
            closeMenu={closeMenu}
          />
        </li>
        <li>
          <Dropdown
            title="Resources"
            items={subpages.Resources}
            closeMenu={closeMenu}
          />
        </li>
        <li onClick={closeMenu}>
          <Link href="/about-me">About Me</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/fees">Fees</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/frequent-questions">FAQ</Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li onClick={closeMenu}>
          <Link className={`${style["cta"]}`} href="appointment">
            Schedule Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );


}