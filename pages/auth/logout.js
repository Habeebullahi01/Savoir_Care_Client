import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/authContext";

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setAuth(null);
    setLoading(false);
  });
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
};

export default Logout;
