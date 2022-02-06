import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

function RepoDetails() {
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

  return <div>{repoDetails.name}</div>;
}

export default RepoDetails;
