import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
const Login = ({ redPath }) => {
  const { auth, setAuth } = useContext(AuthContext);
  // useEffect(() => {

  // },[])
  const router = useRouter();
  const [name, setName] = useState(" ");
  const [password, setPass] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    // console.log(name);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const AuthRequest = (email, password) => {
    const data = { email: email, password: password };
    // console.log(data);
    // Send details to /login endpoint of the server
    // .post("http://localhost:4000/auth/login", {
    axios
      .post("http://localhost:4000/auth/login", {
        // .post("https://e-store-server.cyclic.app/auth/login", {
        email: email,
        password: password,
        headers: {
          Origin: "https://e-store-client.vercel.app/",
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.msg === "Success") {
          setAuth(res.data.token);
          router.push(redPath);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error fetching auth: " + err.response.data);
        }
        console.log(err.message);
      });
    // redirect somewhere?
  };

  return (
    <>
      <div className={`w-full flex flex-row h-[90vh]`}>
        <div className={`form-holder w-full sm:w-1/4 h-full flex flex-col`}>
          <form
            method="POST"
            onSubmit={async (e) => {
              // console.log({ email: name, password: password });
              // console.log(name);
              AuthRequest(name, password);

              e.preventDefault();
            }}
            className={`flex flex-col items-center`}
          >
            <label htmlFor="name" className="w-5/6">
              Email
              <input
                type={"text"}
                name={"email"}
                id={"name"}
                placeholder={"Example@email.com"}
                // onChange={(e) => {
                //   handleName(e.target.value);
                //   // console.log(name);
                // }}
                value={name}
                onChange={handleName}
                required={true}
                className={`w-full p-1 my-2  rounded-[5px]  block`}
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
                  handlePassword(e);
                  // console.log(password);
                }}
                required
                className={`w-full p-1 my-2 rounded-[5px] block`}
              />
            </label>
            <button
              type="submit"
              className={`bg-purple-200 p-2 hover:bg-purple-400 w-1/3 self-center rounded`}
            >
              Login
            </button>
          </form>
          <p>
            {`If you don\'t have an account yet, you can create one`}
            <Link href={"/auth/signup"}> here</Link>.
          </p>
        </div>

        <div
          className={`image_holder sm:w-3/4 sm:h-full sm:block bg-slate-600 hidden`}
        ></div>
      </div>
    </>
  );
};

export default Login;
