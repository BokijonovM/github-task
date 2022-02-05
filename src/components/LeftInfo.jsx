import React from "react";
import logoUser from "./assets/user.jpg";
import { Button } from "react-bootstrap";

function LeftInfo() {
  return (
    <div className="leftInfo-main-div">
      <div>
        <img
          className="left-sidebar-user-image"
          src={logoUser}
          alt="user-img"
        />
        <div className="user-info-container mt-3">
          <h3 className="text-light mb-n1">Name Surname</h3>
          <h4 className="text-light mb-0">Username</h4>
          <h6 className="text-light mb-0 my-3">User position</h6>
          <Button className="" variant="dark">
            Edit profile
          </Button>
          <p className="py-2 text-light">
            <i class="bi bi-people-fill"></i> 8 Followers
            <i class="bi bi-dot"></i>8 Following
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftInfo;
