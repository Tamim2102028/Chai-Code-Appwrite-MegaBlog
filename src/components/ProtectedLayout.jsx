import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    // ToDo: make it more easy
    // if ((authState = true)) {
    //   navigate("/");
    // } else if ((authState = false)) {
    //   navigate("/login");
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);
  }, [authStatus, navigate, authentication]);

  if (loader) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}

export default ProtectedLayout;
