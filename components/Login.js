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
      .post("https://creepy-plum-elk.cyclic.app/auth/login", {
        email: email,
        password: password,
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
      <p>Please Log In</p>
      <form
        method="POST"
        onSubmit={async (e) => {
          // console.log({ email: name, password: password });
          // console.log(name);
          AuthRequest(name, password);

          e.preventDefault();
        }}
      >
        <label htmlFor="name">Email</label>
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
        />
        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"********"}
          onChange={(e) => {
            handlePassword(e);
            // console.log(password);
          }}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          If you don't have an account yet, you can create one
          <Link href={"/auth/signup"}>here</Link>.
        </p>
      </div>
    </>
  );
};

export default Login;
