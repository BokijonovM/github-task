import React from "react";
import { Button } from "react-bootstrap";

function LeftInfo({ userInfo }) {
  return (
    <div className="leftInfo-main-div">
      <div>
        <img
          className="left-sidebar-user-image"
          src={userInfo.avatar_url}
          alt="user-img"
        />
        <div className="user-info-container mt-3">
          <h3 className="text-light mb-n1">{userInfo.name}</h3>
          <h4 className="text-light mb-0">{userInfo.login}</h4>
          <h6 className="text-light mb-0 my-3">{userInfo.bio}</h6>
          <Button className="edit-profile-btn" size="sm" variant="dark">
            Edit profile
          </Button>
          <p className="py-2 text-light">
            <i class="bi bi-people-fill"></i> {userInfo.followers} Followers
            <i class="bi bi-dot"></i>
            {userInfo.following} Following
          </p>
          <p className="mb-0 text-light">
            <i class="bi bi-geo-alt"></i> {userInfo.location}
          </p>
          <p className="mb-0 text-light">
            <i class="bi bi-link-45deg"></i>{" "}
            <a className="text-light" href={userInfo.blog}>
              {userInfo.blog}
            </a>
          </p>
          <p className="mb-0 text-light">
            <i class="bi bi-twitter"></i>{" "}
            <a
              className="text-light"
              href={"https://www.twitter.com/" + userInfo.twitter_username}
            >
              {"@" + userInfo.twitter_username}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftInfo;
