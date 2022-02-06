import React from "react";
import "./style.css";
import logo from "./assets/github.svg";
import logo1 from "./assets/copyright.svg";

function MyFooter() {
  return (
    <div>
      <div className="main-footer-div px-4 mt-3">
        <div className="d-flex align-items-center">
          <img className="footer=logo-github" src={logo} alt="logo" />
          <span className="pl-2 github-2022-footer-span pr-5">
            <img className="mx-2" src={logo1}></img> 2022 GitHub, Inc.
          </span>
        </div>
        <div className="footer-links-main-div pl-5">
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Security</a>
          <a href="/">Status</a>
          <a href="/">Docs</a>
          <a href="/">Contact GitHub</a>
          <a href="/">Pricing</a>
          <a href="/">API</a>
          <a href="/">Training</a>
          <a href="/">Blog</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
