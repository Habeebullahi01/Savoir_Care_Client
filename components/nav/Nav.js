import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu/menu";
import style from "./nav.module.scss";
// import { useAuth0 } from "@auth0/auth0-react";

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
  // const { isLoading, isAuthenticated, loginWithRedirect, logout, user } =
  //   useAuth0();

  const MobileDisplay = () => {
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
              <li
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                <Link href="/"> Home</Link>
              </li>
              <li
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                <Link href={"/shop"}> Shop</Link>
              </li>
              <li
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                <Link href={"/contact"}> Contact</Link>
              </li>
              <li
                onClick={() => {
                  toggleMenu(false);
                }}
              >
                {isAuthenticated ? "Logged In" : "Logged Out"}
              </li>
            </ul>
          </>
        ) : null}
      </div>
    );
  };

  const DesktopDisplay = () => {
    return (
      <ul className={`${style.desktopMenu} text-xl`}>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href={"/shop"}> Shop</Link>
        </li>
        <li>
          <Link href={"/contact"}> Contact</Link>
        </li>
        <li className={`${style.dropdown} relative`}>
          Account
          <div
            className={`${style.dropdown_menu} hidden absolute w-[100%] bg-white`}
          >
            <p
              onClick={() => {
                // loginWithRedirect();
              }}
            >
              Log in
            </p>
            <p
              onClick={() => {
                // logout();
              }}
            >
              Log out
            </p>
          </div>
        </li>
      </ul>
    );
  };
  // mobileView ? mobileDisplay : desktopDisplay;

  return (
    <div
      className={`${style.navBar} p-3 md:p-5 md:px-[5rem] w-full  m-auto mt-2 backdrop-blur bg-white/30 rounded-lg z-10`}
    >
      {/* <div
        className={`background-blur ${style.backgroundBlur} blur bg-white`}
      ></div> */}
      <h2 className="text-xl">Savoir Care</h2>
      {view === "mobile" ? MobileDisplay() : DesktopDisplay()}
    </div>
  );
};

export default Nav;
