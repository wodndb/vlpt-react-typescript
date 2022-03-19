import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.VFC = () => {
  return (
    <div>
      <Link to={`/Chapters`}>Chapter List</Link>
    </div>
  );
};

export default MainPage;
