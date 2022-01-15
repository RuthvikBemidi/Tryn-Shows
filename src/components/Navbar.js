import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar-glass"}`}>
      <p className="service-name">{"TRYNSHOWS"}</p>
      <p className="user-photo">R</p>
    </div>
  );
}
