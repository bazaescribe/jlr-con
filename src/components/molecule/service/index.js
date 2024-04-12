"use client"

import React from 'react';
import "./style.css";
import Image from "next/image";

// Destructure the props right in the function parameters
const Service = ({ name, description, shortName }) => {
    var imageSrc = "/paintings/" + shortName + ".jpg";

    return (
      <div className="service">
        <div className="photo">
          {/* Use Image component from Next.js for optimal image handling */}
          {imageSrc && <Image src={imageSrc} alt={name} width={735} height={420} layout='cover' />}
        </div>
        <div className="info">
          <h5>
            {name} {/* Dynamically set the service name */}
          </h5>
          <p>
            {description} {/* Dynamically set the service description */}
          </p>
        </div>
      </div>
    );
};

export default Service;
