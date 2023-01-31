import React from "react";
import RegisterForm from "./components/register-form/RegisterForm";
import UserManagement from "./components/user-management/UserManagement";

export default function AdminPage() {
  return (
    <div className="w-75 mx-auto mt-5">
      <RegisterForm />
      <UserManagement />
    </div>
  );
}
