import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthPtovider";


// const auth = getAuth(app)
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // for firebase
    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      e.target.reset()
      navigate('/')
    })
    .catch(error => {
        console.log(error.message);
  })
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-20  md:px-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label"></label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to="/register" className="label-text-alt link link-hover">
              New to Auth Master? Please Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
