import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterForm() {
  const selectedUser = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  });

  const [errors, setErrors] = useState({
    username: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(event);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    const isValid = event.target.checkValidity();
    // console.log(isValid);
    if (!isValid) {
      return;
    }

    if (selectedUser) {
      dispatch({
        type: "UPDATE_USER",
        payload: values,
      });
    } else {
      dispatch({
        type: "ADD_USER",
        payload: values,
      });
    }
  };

  // useEffect(() => {}, []);

  const handleBlur = (event) => {
    console.log(event);
    let message = "";
    const { name, title, validationMessage, validity, minLength, maxLength } =
      event.target;
    const { tooLong, tooShort, valueMissing, patternMismatch } = validity;
    if (valueMissing) {
      message = `${title} is required.`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength} to ${maxLength} characters.`;
    }

    if (patternMismatch) {
      message = `${title} is invalid pattern.`;
    }
    setErrors({
      ...errors,
      [name]: message,
    });
  };

  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  value={selectedUser.username}
                  required
                  title="Username"
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.username}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  required
                  title="Full Name"
                  name="fullName"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.fullName}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  required
                  title="Password"
                  name="password"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.password}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  required
                  title="Phone Number"
                  name="phoneNumber"
                  minLength={10}
                  maxLength={12}
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.phoneNumber}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  title="Email"
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  className="form-control"
                  required
                  title="Type"
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Client</option>
                  <option>Admin</option>
                </select>
                <span className="text-danger">{errors.type}</span>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-warning mr-2">SAVE</button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
