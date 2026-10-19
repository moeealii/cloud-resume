import React, { useEffect, useState } from "react";

const VisitorsCounter = () => {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    let active = true;

    fetch("https://fc7dnke14g.execute-api.us-east-1.amazonaws.com/Prod/", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Visitor counter unavailable");
        return response.json();
      })
      .then((data) => {
        if (active && Number.isFinite(data.visitors)) {
          setVisitors(data.visitors);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  return visitors === null ? null : (
    <span className="visitor-count">You are visitor number {visitors}</span>
  );
};

export default VisitorsCounter;
