import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCookies } from "react-cookie";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [authError, setAuthError] = useState(null);
  const [cookie, setCookie] = useCookies(["auth"]);

  const handleChange = (e, setterFuntion) => {
    setterFuntion(e.target.value);
  };

  const router = useRouter();
  const AuthRequest = ({ f_name, l_name, email, password }) => {
    // .post("http://localhost:4000/auth/signup", {
    axios
      .post("https://e-store-server.cyclic.app/auth/signup", {
        // .post("http://localhost:4000/auth/signup", {
        f_name: f_name,
        l_name: l_name,
        email: email,
        password: password,
        headers: {
          Origin: "https://e-store-client.vercel.app",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.auth) {
          setCookie("auth", res.data.token);
          router.push("/");
        }
      })
      .catch((e) => {
        if (e.response) {
          if (!e.response.data.auth) {
            setAuthError(
              <p className={`p-2`}>
                The Email you entered is already in use. You can{" "}
                <Link href={"/auth/login"}> proceed to Login</Link> instead.
              </p>
            );
          } else {
            console.log(e.response);
          }
        } else {
          console.log(e.message);
        }
      });
  };

  const formBody = {
    f_name: fName,
    l_name: lName,
    email: email,
    password: password,
  };

  return (
    <>
      <Head>
        <title>Savoir Care Signup</title>
        <meta name="description" content="Savoir Care Login Page" />
      </Head>

      <div className={`w-full flex flex-row sm:h-[90vh]`}>
        <div
          className={`form-holder w-full sm:w-1/4 h-full flex flex-col mb-20 sm:m-0`}
        >
          <form
            method="POST"
            onSubmit={async (e) => {
              // console.log({ email: name, password: password });
              // console.log(name);
              AuthRequest(formBody);

              e.preventDefault();
            }}
            className={`flex flex-col items-center sm:mt-20`}
          >
            <p
              className={`text-[2rem] italic font-semibold mb-4 text-purple-300`}
            >
              Signup to continue
            </p>
            <label htmlFor="f_name" className="w-5/6">
              First Name
              <input
                type={"text"}
                name={"f_name"}
                id={"f_name"}
                placeholder={"Firstname"}
                required
                onChange={(e) => handleChange(e, setFname)}
                className={`w-full p-1 my-2 rounded-[5px] block`}
              />
            </label>

            <label htmlFor="l_name" className="w-5/6">
              Last Name
              <input
                type={"text"}
                name={"l_name"}
                id={"l_name"}
                placeholder={"Lastname"}
                onChange={(e) => handleChange(e, setLname)}
                required
                className={`w-full block p-1 my-2 rounded-[5px]`}
              />
            </label>

            <label htmlFor="email" className="w-5/6">
              Email
              <input
                type={"text"}
                name={"email"}
                id={"email"}
                placeholder={"Example@email.com"}
                // onChange={(e) => {
                //   handleName(e.target.value);
                //   // console.log(name);
                // }}
                value={email}
                onChange={(e) => handleChange(e, setEmail)}
                required
                className={`w-full block p-1 my-2 rounded-[5px]`}
              />
            </label>
            <label htmlFor="password" className="w-5/6">
              Password
              <input
                type={"password"}
                name={"password"}
                id={"password"}
                placeholder={"********"}
                onChange={(e) => {
                  handleChange(e, setPass);
                  // console.log(password);
                }}
                required
                className={`w-full block p-1 my-2 rounded-[5px]`}
              />
            </label>
            <div className={`error-container w-full bg-slate-400 italic my-2`}>
              {authError}
            </div>
            <button
              type="submit"
              className={`bg-purple-200 p-2 hover:bg-purple-400 w-1/3 self-center rounded`}
            >
              Signup
            </button>
          </form>
          <p>
            {`If you already have an account, you can login`}
            <Link href={"/auth/login"}> here</Link>.
          </p>
        </div>
        <div
          className={`image_holder sm:w-3/4 sm:h-full sm:block bg-slate-600 hidden`}
        ></div>
      </div>
    </>
  );
};

export default SignUp;
