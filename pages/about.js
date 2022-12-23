import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../components/authContext";

const About = () => {
  const { auth } = useContext(AuthContext);
  if (auth) {
    console.log(auth);
    return (
      <h1>
        {`This is the About page. The story of this website. You can see this
        because you\'re authenticated.`}
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

export default About;
