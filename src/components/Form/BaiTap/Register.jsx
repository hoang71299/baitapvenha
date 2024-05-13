import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Error";
function Register() {
  const arr = [
    {
      id: "",
      name: "vui lòng chon",
    },
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
  ];

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
    gender: "",
    file: {},
  });
  const [errors, setErrors] = useState({});

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [name]: value }));
  }
  function hanldeFile(e) {
    const name = e.target.name;
    const file = e.target.files[0].name;
    const type = e.target.files[0].type;
    const size = e.target.files[0].size;
    // console.log(name,file,type,size);
    // console.log(e.target.name);
    // console.log(e.target.files);
    setInputs((state) => ({
      ...state,
      [name]: { ["name"]: file, ["type"]: type, ["size"]: size },
    }));
    //  => xem no la cai gi, sau do lay all dua vao useState Để goi xuống xử lý lỗi form cùng với các input khác
  }

  function handleForm(e) {
    e.preventDefault();
    let flag = true;
    let errorsSubmit = {};
    let arr = ["png", "jpg", "jpeg", "PNG", "JPG"];
    var tenFile = inputs.file.name || "";
    var duoiFile = tenFile.split(".").pop();

    // var duoiFile = tenFile.split(".").pop();

    // console.log(duoiFile); // Output: jpg
    if (inputs.email == "") {
      errorsSubmit.email = "Vui lòng nhập lại email";
      flag = false;
    } else if (!isEmail(inputs.email)) {
      errorsSubmit.email = "Định dạng email k hợp lệ";
      flag = false;
    }

    if (inputs.pass == "") {
      errorsSubmit.pass = "Vui lòng nhập lại pass";
      flag = false;
    }

    if (inputs.gender == "") {
      errorsSubmit.gender = "Vùi lòng chọn giới tính";
      flag = false;
    }
    if (Object.keys(inputs.file).length == 0) {
      errorsSubmit.length = "Vui lòng chọn một tập tin";
      flag = false;
    }

    if (Object.keys(inputs.file).length > 0 && inputs.file.size > 1024 * 1024) {
      errorsSubmit.size = "Dung Lượng ảnh quá lớn";
      flag = false;
    }
    if (Object.keys(inputs.file).length > 0 && !arr.includes(duoiFile)) {
      errorsSubmit.name = "đuôi ảnh không đúng ";
      flag = false;
    }

    setErrors(errorsSubmit);

    if (flag) {
      let local = { email: inputs.email, pass: inputs.pass };
      toast.success(" thành công");
      let x = JSON.parse(localStorage.getItem("demo") || "{}");
      x[local.email] = local;
      localStorage.setItem("demo", JSON.stringify(x));
    }
  }
  console.log(inputs);
  return (
    <>
      <div className="vh-100 d-flex flex-column  justify-content-center">
        <div className="row d-flex justify-content-center mt-5 ">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h2 className="text-secondary text-center">Đăng ký</h2>
              </div>
              <div className="card-body">
                <Error errors={errors} />
                <form
                  onSubmit={handleForm}
                  action=""
                  encType="multipart/form-data"
                >
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

                  <div className="row mb-3">
                    <div className="col-lg-2">
                      <label htmlFor="">Chọn ảnh</label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        onChange={hanldeFile}
                        name="file"
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-lg-2">
                      <label htmlFor="" className="fs-6">
                        Vui lòng chọn giới tính
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <select
                        onChange={handleInput}
                        name="gender"
                        className="form-select "
                      >
                        {arr.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100  " type="submit">
                    Đăng ký
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

export default Register;
