import React from "react";

function MyHeader() {
  return (
    <div>
      <div className="main-header-main-div">
        <a href="/" className="or-texts-1st-p">
          <i class="bi bi-book"></i>
          <span>Overview</span>
        </a>
        <a href="/" className="or-texts-1st-p ml-5">
          <i class="bi bi-journal-bookmark-fill"></i>
          <span>Repositories</span>
        </a>
      </div>
    </div>
  );
}

export default MyHeader;
