import React from "react";
import { Badge } from "react-bootstrap";
import { parseISO, format } from "date-fns";

function SingleRepo({ repos }) {
  return (
    <div className="d-flex justify-content-between single-repo-main-repo-div py-5">
      <div>
        <div className="d-flex align-items-center">
          <a className="repo-name-a" href={repos.name}>
            {repos.name}
          </a>
          <Badge className="px-2 repos-public-badge ml-2">Public</Badge>
        </div>
        <div className="d-flex align-items-center mt-2">
          <p className="circle-yellow-language mb-0 mr-2"></p>
          <p style={{ color: "grey", fontSize: "12px" }} className="mb-0 pr-4">
            {repos.language}
          </p>
          <p style={{ color: "grey", fontSize: "12px" }} className="mb-0">
            Updated {format(parseISO(repos.updated_at), "MMMM do yyyy | HH:mm")}
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div
          className="star-starred px-3 py-1"
          onClick={() => {
            let text = document.getElementById("star-to-starred");
            text.innerText = "Starred";
            let star = document.getElementById("star-yellow-needed");
            star.style.color = "yellow";
          }}
        >
          <i
            id="star-yellow-needed"
            className="bi bi-star-fill bi-star-fill-style"
          ></i>{" "}
          <span id="star-to-starred">Star</span>
        </div>
        <div className="arrow-down-fill-div px-2 py-1">
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default SingleRepo;
