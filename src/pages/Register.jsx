import { Icon } from "../helper/Icons";
import { Formik } from "formik";
import RegisterForm from "../components/authComponents/RegisterForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link} from "react-router-dom";
import { RegisterSchema } from "../components/authComponents/ValidationSchema";



const Register = () => {
  const { createUser } = useContext(AuthContext);
 
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
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 ">
            <Icon name="register" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password1: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, actions) => {
                createUser({ ...values, password2: values.password1 });
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
            <div className="text-center">
              <p>
                Do you have an account?
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
