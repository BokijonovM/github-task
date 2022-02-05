import React, { useEffect, useState } from "react";
import SingleRepo from "./SingleRepo";
import Loader from "./Loader";

function MyRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let res = await fetch("https://api.github.com/users/BokijonovM/repos");
        if (res.ok) {
          let data = res.json();
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
      <SingleRepo />
    </div>
  );
}

export default MyRepos;
