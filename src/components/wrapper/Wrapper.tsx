import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "500px",
        margin: "0 auto",
        height: "100vh",
        marginTop: "25px",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
