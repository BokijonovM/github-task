import React, { Component } from "react";
import Loader from "./Loader";
import SingleUser from "./SingleUser";
import { Form } from "react-bootstrap";
import "./style.css";

export default class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loading: false,
    };
  }
  getUser = () => {
    this.setState({
      loading: true,
    });
    const name = this.refs.name.value;

    setTimeout(() => {
      fetch(`http://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            user: data,
            loading: false,
          });
        });
    }, 1000);
  };
  render() {
    const name = this.state.user.name;
    let userProfile;
    if (this.state.loading === true) {
      userProfile = (
        <div className="loading-user-card">
          <Loader />
        </div>
      );
    } else if (name) {
      userProfile = <SingleUser user={this.state.user} />;
    }
    return (
      <div>
        <div className="wrapper">
          <div>
            <Form.Group className="ml-5 search-users-ont">
              <Form.Control
                size="sm"
                type="text"
                className="search-or-jump-1 shadow-none"
                placeholder="Search user..."
                onChange={this.getUser}
                ref="name"
              />
            </Form.Group>
          </div>
        </div>
        {userProfile}
      </div>
    );
  }
}

// import React, { useEffect, useState } from "react";
// import Loader from "./Loader";
// import { Form } from "react-bootstrap";

// function SearchUsers() {
//   const [user, setUser] = useState("");
//   const [name, setName] = useState("");
//   const [iseLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchSearch = async () => {
//       const userName = name;
//       try {
//         let res = await fetch(`http://api.github.com/users/${userName}`);
//         if (res.ok) {
//           let data = await res.json();
//           SearchUsers(data);
//           setIsLoading(false);
//         } else {
//           console.log("Search fetch error!");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchSearch();
//   }, []);
//   return (
//     <div>
//       <Form.Group className="ml-3">
//         <Form.Control
//           size="sm"
//           type="text"
//           className="search-or-jump shadow-none"
//           placeholder="Search or jump to..."
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//       </Form.Group>

//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default SearchUsers;
