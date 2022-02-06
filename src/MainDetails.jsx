import React from "react";
import RepoDetails from "./components/RepoDetails";

function MainDetails({ userInfo }) {
  return (
    <div>
      <RepoDetails userInfo={userInfo} />
    </div>
  );
}

export default MainDetails;
