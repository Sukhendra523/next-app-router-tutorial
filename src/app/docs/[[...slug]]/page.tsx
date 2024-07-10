import React from "react";

const Docs = ({ params: { slug } }: { params: { slug: string[] } }) => {
  if (slug?.length === 2) {
    return (
      <h1>
        {" "}
        Viewing {slug[0]} of {slug[1]}{" "}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1> Viewing {slug[0]} </h1>;
  }

  return <h1>Welcome to docs page</h1>;
};

export default Docs;
