import React from "react";
import { Badge } from "react-bootstrap";

function MyHeader({ userInfo }) {
  return (
    <div>
      <div className="main-header-main-div">
        <a href="/" className="or-texts-1st-p">
          <i class="bi bi-book"></i>
          <span>Overview</span>
        </a>
        <a href="/repositories" className="or-texts-1st-p ml-5">
          <i class="bi bi-journal-bookmark-fill"></i>
          <span>Repositories</span>
          <Badge className="px-2 repos-badge ml-1">
            {userInfo.public_repos}
          </Badge>
        </a>
      </div>
    </div>
  );
}

export default MyHeader;
