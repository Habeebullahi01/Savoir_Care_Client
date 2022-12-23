import Head from "next/head";
import Login from "../../components/Login";

// export default Login;

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Savoir Care Login</title>
        <meta name="description" content="Savoir Care Login Page" />
      </Head>
      <Login redPath={"/"} />
    </>
  );
};

export default LoginPage;
