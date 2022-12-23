import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");

  const handleChange = (e, setterFuntion) => {
    setterFuntion(e.target.value);
  };

  const router = useRouter();
  const AuthRequest = ({ f_name, l_name, email, password }) => {
    // .post("http://localhost:4000/auth/signup", {
    axios
      .post("https://e-store-server.cyclic.app/auth/signup", {
        f_name: f_name,
        l_name: l_name,
        email: email,
        password: password,
        headers: {
          Origin: "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          router.push("/auth/login");
        }
      })
      .catch((e) => {
        if (e.response) {
          console.log(e.response);
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
      <form
        method="POST"
        onSubmit={async (e) => {
          // console.log({ email: name, password: password });
          // console.log(name);
          AuthRequest(formBody);

          e.preventDefault();
        }}
      >
        <label htmlFor="f_name">
          First Name
          <input
            type={"text"}
            name={"f_name"}
            id={"f_name"}
            placeholder={"Firstname"}
            onChange={(e) => handleChange(e, setFname)}
          />
        </label>
        <label htmlFor="l_name">
          Last Name
          <input
            type={"text"}
            name={"l_name"}
            id={"l_name"}
            placeholder={"Lastname"}
            onChange={(e) => handleChange(e, setLname)}
          />
        </label>
        <label htmlFor="email">Email</label>
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
        />
        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"********"}
          onChange={(e) => {
            handleChange(e, setPass);
            // console.log(password);
          }}
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default SignUp;
