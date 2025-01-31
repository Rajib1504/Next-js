import React from "react";

const servicesDetails = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <h2>services details page</h2>
      <p>ID:{id}</p>
    </div>
  );
};

export default servicesDetails;
