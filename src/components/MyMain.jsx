import React, { useEffect, useState } from "react";
import "./style.css";
import { Row, Badge } from "react-bootstrap";
import Loader from "./Loader";

function MyMain() {
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
    <div className="w-100">
      <div className="my-main-main-div-cont">
        {isLoading ? (
          <Loader />
        ) : (
          repos.slice(0, 2).map(repo => {
            return (
              <Row className="my-main-main-div-cont-row mt-0 mx-2 w-100">
                <div className="my-main-main-div-cont-col d-flex px-3 py-2">
                  <p className="mb-0 text-light">
                    <i className="bi bi-journal-bookmark-fill mr-2"></i>
                    <a href={repo.name}>{repo.name}</a>
                    <Badge className="px-2 repos-public-badge ml-2">
                      Public
                    </Badge>
                  </p>
                  <i className="bi bi-three-dots-vertical text-light"></i>
                </div>
                <p className="px-3 repo-description-main-page">
                  {repo.description}
                </p>
                <p
                  className="px-3 mt-auto text-light"
                  style={{ textAlign: "start", fontSize: "12px" }}
                >
                  <i
                    className="bi bi-circle-fill"
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  {repo.language}
                  <i className="bi bi-star ml-4"></i> {repo.stargazers_count}
                </p>
              </Row>
            );
          })
        )}
      </div>
      <div className="my-main-main-div-cont">
        {isLoading ? (
          <Loader />
        ) : (
          repos.slice(2, 4).map(repo => {
            return (
              <Row className="my-main-main-div-cont-row mt-0 mx-2 w-100">
                <div className="my-main-main-div-cont-col d-flex px-3 py-2">
                  <p className="mb-0 text-light">
                    <i className="bi bi-journal-bookmark-fill mr-2"></i>
                    <a href={repo.name}>{repo.name}</a>
                    <Badge className="px-2 repos-public-badge ml-2">
                      Public
                    </Badge>
                  </p>
                  <i className="bi bi-three-dots-vertical text-light"></i>
                </div>
                <p className="px-3 repo-description-main-page">
                  {repo.description}
                </p>
                <p
                  className="px-3 mt-auto text-light"
                  style={{ textAlign: "start", fontSize: "12px" }}
                >
                  <i
                    className="bi bi-circle-fill"
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  {repo.language}
                  <i className="bi bi-star ml-4"></i> {repo.stargazers_count}
                </p>
              </Row>
            );
          })
        )}
      </div>
      <div className="my-main-main-div-cont">
        {isLoading ? (
          <Loader />
        ) : (
          repos.slice(9, 11).map(repo => {
            return (
              <Row className="my-main-main-div-cont-row mt-0 mx-2 w-100">
                <div className="my-main-main-div-cont-col d-flex px-3 py-2">
                  <p className="mb-0 text-light">
                    <i className="bi bi-journal-bookmark-fill mr-2"></i>
                    <a href={repo.name}>{repo.name}</a>
                    <Badge className="px-2 repos-public-badge ml-2">
                      Public
                    </Badge>
                  </p>
                  <i className="bi bi-three-dots-vertical text-light"></i>
                </div>
                <p className="px-3 repo-description-main-page">
                  {repo.description}
                </p>
                <p
                  className="px-3 mt-auto text-light"
                  style={{ textAlign: "start", fontSize: "12px" }}
                >
                  <i
                    className="bi bi-circle-fill"
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  {repo.language}
                  <i className="bi bi-star ml-4"></i> {repo.stargazers_count}
                </p>
              </Row>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MyMain;
