import React, { useContext, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import AppContext from "../context/Context";

const Authentication = () => {
  const context = useContext(AppContext);
  const { user, setUserName } = context;
  const [authPage, setAuthPage] = useState<string>("Login");
  const authenticationType = () => {
    if (authPage === "Login") {
      setAuthPage("Signup");
    } else {
      setAuthPage("Login");
    }
  };
  return (
    <>
      {authPage === "Login" ? (
        <Login authenticationType={authenticationType} />
      ) : (
        <Signup authenticationType={authenticationType} />
      )}
    </>
  );
};

export default Authentication;
