import React from "react";
import "./style.css";
import {  FaMapMarkerAlt, FaBolt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";



function EmployeeCard(props) {
  return (
    <div className="card">

        <div className="img-container">

            <img alt={props.name} src={props.image} />

        </div>
        <div className="title-container">
          <h3 className="text-center mt-2">
              {props.name}
          </h3>
      </div>

      <div className="content">
        <ul>
          <li>
          <span><FaBolt />&emsp;{props.title}</span>
          </li>
          <li>
            <span><FaMapMarkerAlt />&emsp;{props.location}</span>
          </li>
          <li>
            <span><FaEnvelope />&emsp;{props.email}</span>
          </li>
          <li>
            <span><FaPhoneAlt />&emsp;{props.phone}</span>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default EmployeeCard;
