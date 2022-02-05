import React, { useEffect, useState } from "react";
import SingleRepo from "./SingleRepo";
import Loader from "./Loader";
import { Form } from "react-bootstrap";

function MyRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let res = await fetch("https://api.github.com/users/BokijonovM/repos");
        if (res.ok) {
          let data = await res.json();
          setRepos(data);
          setIsLoading(false);
        } else {
          console.log("Fetch repos Failed!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="repos-main-div">
      <div className="repos-search-div d-flex align-items-center py-3">
        <div>
          <Form.Group className="">
            <Form.Control
              type="text"
              className="search-or-jump-repo shadow-none"
              placeholder="Find a repository..."
            />
          </Form.Group>
        </div>
        <div className="d-flex align-items-center ml-auto">
          <div className="d-flex align-items-center tlsn-4-div px-3 py-1 ml-2">
            <span className="text-light">Type</span>
            <i className="bi bi-caret-down-fill pl-1"></i>
          </div>
          <div className="d-flex align-items-center tlsn-4-div px-3 py-1 ml-2">
            <span className="text-light">Language</span>
            <i className="bi bi-caret-down-fill pl-1"></i>
          </div>
          <div className="d-flex align-items-center tlsn-4-div px-3 py-1 ml-2">
            <span className="text-light">Sort</span>
            <i className="bi bi-caret-down-fill pl-1"></i>
          </div>
          <div className="d-flex align-items-center tlsn-4-div-last px-3 py-1 ml-4">
            <i class="bi text-light mr-2 bi-journal-bookmark-fill"></i>
            <span className="text-light">New</span>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        repos.map(repo => {
          return <SingleRepo repos={repo} />;
        })
      )}
    </div>
  );
}

export default MyRepos;
