import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Error";

function Login() {
  const x = JSON.parse(localStorage.getItem("demo"));
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [name]: value }));
  };
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  const handleForm = (e) => {
    let err = {};
    let flag = true;
    e.preventDefault();
    if (inputs.email === "") {
      err.email = "Vui lòng nhập lại email";
      flag = false;
    } else if (!isEmail(inputs.email)) {
      err.email = "Định dạng email bị sai";
      flag = false;
    } else if (inputs.email !== x[inputs.email]?.email) {
      err.email = "email này chưa được đăng ký";
      flag = false;
    }

    if (inputs.pass === "") {
      err.pass = "Vui lòng nhập lại pass";
      flag = false;
    } else if (inputs.pass !== x[inputs.email]?.pass && flag) {
      err.pass = "password không khớp";
      flag = false;
    }
    setErrors(err);
    if (flag) {
      toast.success("đăng nhập thành công");
    }
  };
  return (
    <>
      <div className="vh-100 d-flex flex-column  justify-content-center ">
        <div className="row d-flex justify-content-center mt-5 ">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h2 className="text-secondary text-center">Đăng Nhập</h2>
              </div>
              <div className="card-body">
                <form action="" onSubmit={handleForm}>
                  <Error errors={errors} />
                  <div className="row mb-3">
                    <div className="col-lg-2">
                      <label htmlFor="" className=" ">
                        Nhập email
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        onChange={handleInput}
                        name="email"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-lg-2">
                      <label htmlFor="" className="text-nowrap ">
                        Nhập Password
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        onChange={handleInput}
                        name="pass"
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary w-100  " type="submit">
                    Đăng Nhập
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
