import { Link } from "react-router-dom";
import { Icon } from "../helper/Icons";
import { Formik } from "formik";
import LoginForm from "../components/authComponents/LoginForm";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginSchema } from "../components/authComponents/ValidationSchema";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div
      className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
      style={{
        background:
          "url(https://colorlib.com/etc/regform/colorlib-regform-12/images/body-bg.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <Icon name="register" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Sign In</h1>
              <p>Enter your information to sign in</p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values, actions) => {
                loginUser(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            ></Formik>
            <div className="text-center">
              <p>
                Not a member?
                <Link
                  to={"/register"}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
