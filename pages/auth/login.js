import { useContext, useState } from "react";
import { AuthContext } from "../../components/authContext";
import axios from "axios";
import { useRouter } from "next/router";
// import Login from "../../components/Login";

const Login = () => {
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
    axios
      .post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.msg === "Success") {
          setAuth(res.data.token);
          router.push("/contact");
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
    </>
  );
};

export default Login;
