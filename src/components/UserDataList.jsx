// this Component display the user repos or the user follow
import React from "react";
function UserReposList(props) {
  return (
    <ul className="pl-0">
      {props.data.map(({ id, full_name, stargazers_count, html_url }) => (
        <li key={id} className="repos-list">
          <h3>
            <a className="user-repos-name" href={html_url}>
              {full_name.slice(0, 35)}
            </a>
          </h3>
          <div className="user-repos-stars px-2 py-1">
            <i class="bi bi-star-fill mr-1"></i>
            {stargazers_count}
          </div>
        </li>
      ))}
    </ul>
  );
}
function UserFollowList(props) {
  return (
    <ul className="pl-0">
      {props.data.map(({ id, login, avatar_url, html_url }) => (
        <li className="d-flex align-items-center" key={id}>
          <img className="user-data-img" src={avatar_url} alt="" />
          <h3 className="mb-0 text-light">
            <a className="user-data-login text-light" href={html_url}>
              {login}
            </a>
          </h3>
        </li>
      ))}
    </ul>
  );
}
class UserDataList extends React.Component {
  render() {
    let user_repos_list = <UserReposList data={this.props.data} />;
    let user_follow_list = <UserFollowList data={this.props.data} />;

    if (this.props.repos) {
      return user_repos_list;
    } else {
      return user_follow_list;
    }
  }
}
export default UserDataList;
