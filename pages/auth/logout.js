import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/authContext";
import { useCookies } from "react-cookie";

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["auth"]);
  useEffect(() => {
    setLoading(true);
    // setAuth(null);
    setCookie("auth", null);
    setLoading(false);
  }, [setAuth]);
  const delCookie = () => {};
  if (isLoading) {
    return (
      <>
        <p>Logging you out...</p>
      </>
    );
  } else {
    return (
      <>
        <p>Logout Successful</p>
        <Link href={"/"}>
          <p>Go to home page</p>
        </Link>
        <Link href={"/about"}>
          <p>Go to about page</p>
        </Link>
      </>
    );
  }
  // return (
  //   <p>Dear User, clock here to Logout.</p>
  // )
};

// Logout.getInitialProps = async ({req,res}) => {

// }

export default Logout;
