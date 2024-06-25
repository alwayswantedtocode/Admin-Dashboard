import React, { useState } from "react";
import UserTable from "../../../Components/Users/DataTable";
import IMAGE from "../../../Assets/profile-gender-neutral.jpg";
import { userRows } from "../../../Components/data";
import AddUsers from "../../../Components/Aside/AddUsers";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <img
              src={params.row.img || IMAGE}
              alt=""
              className="w-[2.5rem] h-[2.5rem] rounded-[50%] object-cover"
            />
          </div>
        );
      },
    },

    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 70,
      editable: true,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-[10px] py-[20px] relative">
      <div className="flex  gap-[20px] px-[35px]">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          className="w-max h-[3rem] p-[0.5rem] rounded-[0.5rem] bg-white text-black font-semibold"
          onClick={() => setOpen(true)}
        >
          Add New User
        </button>
      </div>
      <div className="w-[100%] flex justify-center">
        <UserTable slug="Users" columns={columns} rows={userRows} />
      </div>
      {open && <AddUsers slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
