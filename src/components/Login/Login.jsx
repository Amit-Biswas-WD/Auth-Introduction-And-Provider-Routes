import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, googleAccount } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate("/orders");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGoogleLogin = () => {
    googleAccount()
      .then((result) => {
        console.log(result.user);
        navigate("/")
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="hero bg-gray-500 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body bg-gray-500">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered bg-gray-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered bg-gray-500"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className="text-end my-2 text-white">
            Create an
            <Link className="text-green-500 mx-2 font-semibold" to={`/sign-up`}>
              Sign Up
            </Link>
            Account
          </p>
        </form>
        <p className="text-center">
          <button onClick={handleGoogleLogin} className="btn bg-accent">
            Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
