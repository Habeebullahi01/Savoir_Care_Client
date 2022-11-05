import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu/menu";
import style from "./nav.module.scss";

const Nav = ({ view }) => {
  // function showLinks() {
  //   return <Menu />;
  // }

  // if (open) {
  //   return (
  //     <div className={style.navBar}>
  //       <h2 className={style.red}>Haleema</h2>
  //       <div>
  //         <Menu />
  //       </div>
  //     </div>
  //   );
  // }

  // const [view, setView] = useState({
  //   mobileView: true,
  // });

  // const { mobileView } = view;

  // useEffect(() => {
  //   const changeView = () => {
  //     return window.innerWidth > 900
  //       ? setView((pre) => ({ ...pre, mobileView: false }))
  //       : setView((pre) => ({ ...pre, mobileView: true }));
  //   };
  //   changeView();

  //   window.addEventListener("resize", () => {
  //     changeView();
  //   });
  // }, []);

  function links() {
    return (
      <>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href={"/"}> Shop</Link>
        </li>
        <li>
          <Link href={"/"}> Contact</Link>
        </li>
        <li>
          <Link href={"/"}> About</Link>
        </li>
      </>
    );
  }
  const mobileDisplay = () => {
    /* How to change css properties from within here. */
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = (val) => {
      setMenuOpen(val);
    };
    useEffect(() => {});
    return (
      <div className={`${style.navLinkContainer}`}>
        <button
          onClick={() => {
            toggleMenu(true);
          }}
        >
          MENU
        </button>

        {menuOpen ? (
          <>
            <ul className={[style.mobileMenu].join(" ")}>
              <button
                onClick={() => {
                  toggleMenu(false);
                }}
                className="text-2xl"
              >
                CLOSE
              </button>
              {links}
            </ul>
          </>
        ) : null}
      </div>
    );
  };

  const desktopDisplay = () => {
    return <ul className={`${style.desktopMenu} text-xl`}>{links}</ul>;
  };
  // mobileView ? mobileDisplay : desktopDisplay;

  return (
    <div
      className={`${style.navBar} p-3 md:p-5 w-full lg:w-[90%] m-auto backdrop-blur bg-white/30 rounded-lg`}
    >
      {/* <div
        className={`background-blur ${style.backgroundBlur} blur bg-white`}
      ></div> */}
      <h2 className="text-xl">Haleema</h2>
      {view == "mobile" ? mobileDisplay() : desktopDisplay()}
    </div>
  );
};

export default Nav;
