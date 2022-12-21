import { useContext } from "react";
import { AuthContext } from "../components/authContext";
import Link from "next/link";

const Contact = () => {
  const { auth } = useContext(AuthContext);
  if (auth) {
    return (
      <h1>
        This is the Contact page. How to reach the administrators of this
        website for support and inquiries.
      </h1>
    );
  } else {
    return (
      <>
        <p>You have to be Logged in to view this page.</p>
        <Link href={"/auth/login"}>
          <p>Proceed to Login</p>
        </Link>
      </>
    );
  }
};

export default Contact;
