import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import "./sRepo.css";
import { Row, Col, Container, Badge } from "react-bootstrap";

function RepoDetails({ userInfo }) {
  const params = useParams();

  const [repoDetails, setRepoDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let res = await fetch(
          "https://api.github.com/repos/BokijonovM/" + params.name
        );
        if (res.ok) {
          let data = await res.json();
          setRepoDetails(data);
          setIsLoading(false);
        } else {
          console.log("Fetch details error!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div>
      <Container>
        <Row className="py-4 justify-content-between">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-journal-bookmark-fill pr-2"
              style={{ color: "grey", fontSize: "18px" }}
            ></i>
            <h4 className="mb-0">
              <a href="/">{userInfo.login}</a>
            </h4>
            <i
              className="bi bi-slash-lg"
              style={{ color: "grey", fontSize: "18px" }}
            ></i>
            <h4 className="mb-0">
              <a href={repoDetails.name}>{repoDetails.name}</a>
            </h4>
            <Badge className="px-2 repos-public-badge ml-2">Public</Badge>
          </div>
          <div className="d-flex align-items-center">
            <p className="repo-details-ufs-header-right mb-0 px-2 py-1">
              <i class=" pr-1 bi bi-eye"></i>
              Unwatch
              <Badge className="repos-public-badge ml-2">
                {repoDetails.watchers}
              </Badge>
              <i class=" pl-1 bi bi-caret-down-fill"></i>
            </p>

            <p className="repo-details-ufs-header-right-fork mb-0 px-2 py-1 ml-2">
              <i class=" pr-1 bi bi-git"></i>
              Fork
              <Badge className="repos-public-badge ml-2">
                {" "}
                {repoDetails.forks}
              </Badge>
            </p>

            <p className="repo-details-ufs-header-right mb-0 px-2 py-1 ml-2">
              <i class=" pr-1 bi bi-star-fill" style={{ color: "#e3b341" }}></i>
              Starred
              <Badge className="repos-public-badge ml-2">
                {repoDetails.stargazers_count}
              </Badge>
              <i class=" pl-1 bi bi-caret-down-fill"></i>
            </p>
          </div>
        </Row>
        <Row className="py-3 repo-details-row-2cont">
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-code"></i> Code
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-plus-circle-dotted"></i> Issues
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-git"></i> Pull requests
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-play-circle"></i> Actions
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-kanban"></i> Projects
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-book"></i> Wiki
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-shield-exclamation"></i> Security
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-graph-up"></i> Insights
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-gear"></i> Settings
          </p>
        </Row>
        <Row>
          <Col md={8}>
            <Row className="pb-3 pt-4 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <p className="mb-0 text-light main-branches-p-tag py-1 px-2 mr-2">
                  <i class="bi bi-git"></i> main
                  <i class=" pl-1 bi bi-caret-down-fill"></i>
                </p>
                <p className="mb-0 text-light main-branches-p-tag-1 py-1 px-2 mr-2">
                  <i class="bi bi-git"></i> 2 branches
                </p>
                <p className="mb-0 text-light main-branches-p-tag-1 py-1 px-2 mr-2">
                  <i class="bi bi-tag"></i> 0 tags
                </p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 text-light main-branches-p-tag py-1 px-3 mr-2">
                  Go to file
                </p>
                <p className="mb-0 text-light main-branches-p-tag py-1 px-3 mr-2">
                  Add file
                  <i class=" pl-1 bi bi-caret-down-fill"></i>
                </p>
                <p className="mb-0 text-light main-branches-p-tag-2 py-1 px-2 mr-2">
                  Code
                  <i class=" pl-1 bi bi-caret-down-fill"></i>
                </p>
              </div>
            </Row>
            <Row className="repo-files-row-main-cont">
              <Col className="repo-files-row-main-cont-1st-row">
                <img
                  className="repo-details-user-img"
                  src={userInfo.avatar_url}
                  alt="image"
                />
                <p className="mb-0 ml-3 text-light">{userInfo.login}</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row className="justify-content-between pt-4 ml-3">
              <h6 className="mb-0 text-light">About</h6>
              <i className="bi bi-gear text-light"></i>
            </Row>
            <Row className="justify-content-between ml-3 py-3">
              <p className="mb-0 text-light">{repoDetails.description}</p>
            </Row>
            <Row className="flex-column ml-3 rswf-row-cont pb-3">
              <p className="mb-1" style={{ textAlign: "start", color: "grey" }}>
                <i className="bi bi-book mr-3"></i> Readme
              </p>
              <p className="mb-1" style={{ textAlign: "start", color: "grey" }}>
                <i className="bi bi-star mr-3"></i>{" "}
                {repoDetails.stargazers_count} star
              </p>
              <p className="mb-1" style={{ textAlign: "start", color: "grey" }}>
                <i className="bi bi-eye mr-3"></i> {repoDetails.watchers_count}{" "}
                watching
              </p>
              <p className="mb-1" style={{ textAlign: "start", color: "grey" }}>
                <i className="bi bi-git mr-3"></i> {repoDetails.forks} forks
              </p>
            </Row>
            <Row className="flex-column pt-4 ml-3 rswf-row-cont pb-3">
              <h6
                style={{ textAlign: "start" }}
                className="mb-0 pb-4 text-light"
              >
                Releases
              </h6>
              <p className="mb-0" style={{ textAlign: "start", color: "grey" }}>
                No releases published
              </p>
              <a style={{ textAlign: "start" }} href="/">
                Create a new release
              </a>
            </Row>
            <Row className="flex-column pt-4 ml-3 rswf-row-cont pb-3">
              <h6
                style={{ textAlign: "start" }}
                className="mb-0 pb-4 text-light"
              >
                Packages
              </h6>
              <p className="mb-0" style={{ textAlign: "start", color: "grey" }}>
                No packages published
              </p>
              <a style={{ textAlign: "start" }} href="/">
                Create a new packages
              </a>
            </Row>
            <Row className="ml-3 pt-4 flex-column pb-5">
              <h6
                style={{ textAlign: "start" }}
                className="mb-0 pb-4 text-light"
              >
                Languages
              </h6>
              <div className="repo-details-languages-color"></div>
              <div className="mt-3 d-flex">
                <p className="mb-0 text-light mr-3">
                  <i
                    className="bi bi-circle-fill mr-2"
                    style={{
                      color: "yellow",
                    }}
                  ></i>
                  JavaScript 75.7%
                </p>
                <p className="mb-0 text-light">
                  <i
                    className="bi bi-circle-fill mr-2"
                    style={{
                      color: "purple",
                    }}
                  ></i>
                  CSS 22.2%
                </p>
              </div>
              <p
                className="mb-0 text-light mt-2"
                style={{ textAlign: "start" }}
              >
                <i
                  className="bi bi-circle-fill mr-2"
                  style={{
                    color: "orange",
                  }}
                ></i>
                HTML 2.1%
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RepoDetails;
