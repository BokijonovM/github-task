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
            <i class="bi bi-activity"></i> Insights
          </p>
          <p className="mb-0 text-light mr-4">
            <i class="bi bi-gear"></i> Settings
          </p>
        </Row>
        <Row>
          <Col md={8}>
            <Row></Row>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default RepoDetails;
