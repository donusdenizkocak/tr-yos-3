import axios from "axios";
import { ErrorMessage, Form, Formik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";
import { PasswordSchema } from "../authComponents/ValidationSchema";
const API_KEY =
  "M5IJfY8iFQ/OpURXwOpQVTzUq8affdseVfOthIPmI4s6fxBUPqNYQ4g7UvukkqAf9WcQtdaBdYqtgpXNe5ce37d90ccf67cb521e26eb392c23f5";

const PasswordForm = ({ openPassword, setopenPassword }) => {
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (info) => { 
    try {
      await axios.post(
        `/api/v1/users/changepassword2.php?user_id=${currentUser}&token=${API_KEY}`,
        info
      );
      setopenPassword(false);
      toastSuccessNotify(`Şifre Değiştirme Başarılı`);
    } catch (error) {
      toastErrorNotify(`Şifre yanlış veya Şifreler uyuşmuyor !!!`);
    }
  };
  return (
    <div
      className={`fixed w-[100wh] h-[100vh] flex justify-center items-center  inset-0 top-0 bottom-0 left-0 right-0 z-[150] transition-colors overflow-y-hidden ${
        openPassword ? "visible bg-black/50 " : "invisible"
      } `}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`bg-white w-[300px]  sm:w-[400px] md:w-[500px] flex flex-col items-center gap-6  shadow rounded-lg  p-6 transition-all   ${
          openPassword ? " opacity-100" : " opacity-0"
        } `}
      >
        <h2 className="text-xl text-darkBlue font-bold ">Change Password</h2>

        <Formik
          initialValues={{
            password_current: "",
            password_new1: "",
            password_new2: "",
          }}
          validationSchema={PasswordSchema}
          onSubmit={(values, actions) => {
            handleSubmit({ ...values });
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className=" w-full flex flex-col items-center gap-4 ">
              <div className="w-full  rounded-lg">
                <label htmlFor="password_current">Current password</label>
                <input
                  id="password_current"
                  name="password_current"
                  className="w-full p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] outline-none rounded-lg border border-gray-100"
                  type="password"
                  value={values?.password_current || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-full rounded-lg">
                <label htmlFor="password_new1">New password</label>
                <input
                  id="password_new1"
                  name="password_new1"
                  className="w-full p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg outline-none border border-gray-100"
                  type="password"
                  value={values?.password_new1 || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password_new1">
                  {(msg) => (
                    <div className="text-sm text-center text-red-700">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="w-full rounded-lg">
                <label htmlFor="password_new2">New password 2</label>
                <input
                  id="password_new2"
                  name="password_new2"
                  className="w-full p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg outline-none border border-gray-100"
                  type="password"
                  value={values?.password_new2 || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password_new2">
                  {(msg) => (
                    <div className="text-sm text-center text-red-700">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="flex justify-evenly items-center w-full ">
                <button
                  type="submit"
                  className="bg-[#3b71ca] w-full rounded-md text-white p-2  text-xs font-medium"
                >
                  SAVE PASSWORD
                </button>
                <button
                  className="bg-[#ca3b3b] w-full rounded-md text-white p-2  text-xs font-medium"
                  type="button"
                  onClick={() => setopenPassword(false)}
                >
                  CLOSE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordForm;
