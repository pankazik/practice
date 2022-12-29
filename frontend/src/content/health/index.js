import { PageWrapper } from "../../common/page-wrapper";
import { useState, useEffect } from "react";

export const Health = () => {
  const [health, setHealth] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then((data) => setHealth(data));
  }, []);

  return (
    <PageWrapper>
      {Object.keys(health).map((value, index) => {
        return (
          <p key={index}>
            <b>{value}</b> : {health[value]}
          </p>
        );
      })}
    </PageWrapper>
  );
};
