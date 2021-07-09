import React from "react";
import { useParams } from "react-router-dom";

function SubCategory() {
  const { subCategory } = useParams();

  return(
    <p>{subCategory}</p>
  );
}

export default SubCategory;
