import { ErrorMessage, Field, Form } from "formik";
const LoginForm = ({ values, handleChange, handleBlur, isSubmitting }) => {
  return (
    <Form>
      <div className="flex -mx-3 relative">
        <div className="w-full px-3 mb-5">
          <label htmlFor="email" className="text-xs font-semibold px-1">
            Email
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-email-outline text-gray-400 text-lg" />
            </div>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="johnsmith@example.com"
              value={values.email.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-5">
          <ErrorMessage name="email">
            {(msg) => (
              <div className="text-sm text-center text-red-700">{msg}</div>
            )}
          </ErrorMessage>
        </div>
      </div>
      <div className="flex -mx-3 relative">
        <div className="w-full px-3 mb-12">
          <label htmlFor="password" className="text-xs font-semibold px-1">
            Password
          </label>
          <div className="flex">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
            </div>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              placeholder="************"
              value={values.password.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="absolute bottom-7 left-5">
          <ErrorMessage name="password1">
            {(msg) => (
              <div className="text-sm text-center text-red-700">{msg}</div>
            )}
          </ErrorMessage>
        </div>
      </div>
      <div className="flex -mx-3 w-full px-3 mb-5">
        <button
          type="submit"
          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          Sign In
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
