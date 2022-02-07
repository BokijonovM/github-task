import React, { Component } from "react";
import SingleUserData from "./SingleUserData";

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      display_data: false,
    };
  }
  getUserData = (event, data) => {
    this.setState({
      display_data: false,
    });
    setTimeout(() => {
      this.setState({
        data: data,
        display_data: true,
      });
    }, 500);
  };

  render() {
    let user_data = "";
    if (this.state.data && this.state.display_data) {
      user_data = <SingleUserData data={this.state.data} />;
    }
    return (
      <div className="user-profile">
        <div className="user-profile-grid">
          <div className="user-img">
            <img
              className="user-img-search"
              src={"" + this.props.user.avatar_url}
              alt=""
            />
          </div>
          <div className="profile-user-settings flex-column">
            <h1 className="user-name text-light">{this.props.user.name}</h1>
            <p
              className="user-bio-search text-light"
              style={{ textAlign: "start" }}
            >
              {this.props.user.bio}
            </p>
          </div>
          <div className="user-stats">
            <ul>
              <li
                className="user-following"
                onClick={event =>
                  this.getUserData(event, `${this.props.user.url}/following`)
                }
              >
                <b>{this.props.user.following}</b>
                <p>Following</p>
              </li>
              <li
                className="user-followers"
                onClick={event =>
                  this.getUserData(event, `${this.props.user.url}/followers`)
                }
              >
                <b>{this.props.user.followers}</b>
                <p>Followers</p>
              </li>
              <li
                className="user-repos"
                onClick={event =>
                  this.getUserData(event, `${this.props.user.url}/repos`)
                }
              >
                <b>{this.props.user.public_repos}</b>
                <p>Repos</p>
              </li>
            </ul>
          </div>

          {user_data}
        </div>
      </div>
    );
  }
}
