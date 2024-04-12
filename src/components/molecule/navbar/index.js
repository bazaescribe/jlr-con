"use client"

import React, { useState, useEffect } from 'react';
import "./style.css";
import Image from "next/image";
import Logo from "@/components/atom/logo";

const Navbar = () => {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${shrink ? 'shrink' : ''}`}>
            {/* <Image src="/brand/logo.svg" width="60" height="24" alt='JLR Innovation'></Image> */}
            <Logo></Logo>
            <div className="menu">
              <a href="#">cloud</a>
              <a href="#">design</a>
              <a href="#">development</a>
              <a href="#">ai</a>
            </div>
            <a href="#" className='cta'>Lets connect</a>
        </nav>
    );
};

export default Navbar;
