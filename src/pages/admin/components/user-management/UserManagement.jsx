import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserManagement() {
  const [search, setSearch] = useState({
    keyword: "",
  });
  const userState = useSelector((state) => state.userReducer);

  const dispath = useDispatch();

  //   useEffect(() => {}, []);

  const renderUserList = () => {
    const filteredData = userState.userList.filter(ele => {
      return ele.fullName.toLowerCase().indexOf(search.keyword.toLowerCase()) !== -1;
    })
    return filteredData.map((ele, idx) => {
      return (
        <tr key={ele.id} className={idx % 2 === 0 ? "bg-light" : undefined}>
          <td>{idx + 1}</td>
          <td>{ele.username}</td>
          <td>{ele.fullName}</td>
          <td>{ele.email}</td>
          <td>{ele.phoneNumber}</td>
          <td>{ele.type}</td>
          <td>
            <button
              onClick={() => setSelectedUser(ele)}
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button onClick={() => deleteUser(ele)} className="btn btn-danger">
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  const setSelectedUser = (user) => {
    dispath({
      type: "SET_SELECTED_USER",
      payload: user,
    });
  };

  const deleteUser = (user) => {
    dispath({
      type: "DELETE_USER",
      payload: user,
    });
  };

  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              type="text"
              placeholder="Search by full name..."
              className="form-control"
              onChange={(event) =>
                setSearch({ ...search, keyword: event.target.value })
              }
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option>All</option>
              <option>Client</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderUserList()}</tbody>
        </table>
      </div>
    </div>
  );
}
