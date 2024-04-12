"use client"

import React, { useState, useEffect } from 'react';
import "./style.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
          <div className="container py-500 d-flex gap-500">
           
            
            <div className="d-flex gap-400 flex-wrap">
              <Image src="/brand/logo.svg" width="60" height="24" alt='JLR Innovation'></Image>

              <div className='d-flex flex-direction-column gap-100'>
                <p>Site</p>
                <a href="">
                  home
                </a>
                <a href="">
                  design studio
                </a>
                <a href="">
                  cloud services
                </a>
                <a href="">
                  development
                </a>
                <a href="">
                  ai
                </a>
              </div>
              <div className='d-flex flex-direction-column gap-100'>
                <p>Contact</p>
                <a href="">
                  hello@jlrcon.com
                </a>
                <a href="">
                  linkedin
                </a>
                <a href="">
                  x - twitter
                </a>
              </div>
            </div>
          </div>
          <div className="pattern">
          </div>
        </footer>
    );
};

export default Footer;
