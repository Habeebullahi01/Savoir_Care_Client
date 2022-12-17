const Login = () => {
  return (
    <>
      <p>Please Log In</p>
      <label htmlFor="name">Email</label>
      <input
        type={"text"}
        name={"email"}
        id={"name"}
        placeholder={"Example@email.com"}
      />
      <label htmlFor="password">Password</label>
      <input
        type={"password"}
        name={"password"}
        id={"password"}
        placeholder={"********"}
      />
      <button type="submit" onClick={() => {
        
      }}>Login</button>
    </>
  );
};

export default Login;
