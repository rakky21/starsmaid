import React from "react";

const Inquires = ({ loading, error, data, noMatch, children }) => {
  if (error) {
    return <p> Error: {error.message} </p>;
  }
  if (loading) {
    return <p> Loading... </p>;
  }
  if (!data) {
    return <p> No Data Entered</p>;
  }
  if (noMatch) {
    <p> Oops, no match! </p>;
  }
  if (data) {
    return children;
  }
};

export default Inquires;
