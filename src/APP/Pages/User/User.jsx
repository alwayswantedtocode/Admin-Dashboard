import React from "react";
import SinglePage from "../../../Components/SinglePage/SinglePage";
import { singleUser } from "../../../Components/data";

const User = () => {
  return (
    <div>
      {" "}
      <SinglePage {...singleUser} />
    </div>
  );
};

export default User;
