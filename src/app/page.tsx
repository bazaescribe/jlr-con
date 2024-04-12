"use client"

import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/components/molecule/navbar";
import Footer from "@/components/organism/footer";

import RotatingElement from "@/components/atom/rotatingElement";
import Services from "@/components/organism/Services";


import { useEffect, useState } from 'react';


export default function Home() {
  

  return (
    <main>
      <Navbar></Navbar>

      <header className="hero">
        <div className="container">
          <h1>
            Unleash your business’ potential
          </h1>
          <p>
            Technology and infrastructure for companies any size.
          </p>
        </div>
      </header>

      <section className="carbon py-1000">
        <article className="container row">
          <div>
            <div className="mb-200 mesh">
              <div>
                <RotatingElement src="/assets/star-1.png"></RotatingElement>
              </div>
              <div className="d-flex justify-content-end">
                <RotatingElement src="/assets/star-2.png" direction="reverse"></RotatingElement>
              </div>
            </div>
          </div>
         
          <div className="d-flex flex-direction-column gap-500">
            <div>
              <h6>
                End to end technology
              </h6>
              <h2>
                From start to deployment we have it all covered
              </h2>
              <p>
                At JLR, we pride ourselves on a thorough and cohesive product development process that spans from the earliest design sketches to the final stages of deployment. Our expertise lies in our ability to cover every aspect of product creation, ensuring a smooth transition through each phase. Our team collaborates with you to refine and perfect your vision, employing a blend of innovative design practices, rigorous testing protocols, and efficient production methods. 
              </p>
              <p>
                By managing the entire development lifecycle under one roof, we provide a streamlined experience that not only saves you time and resources but also results in a superior product tailored to your unique market needs.
              </p>
            </div>
            
            <div>
              <h6>
                Trusted by companies from all sizes
              </h6>
              <h2>
                We've delivered tech for millions of users
              </h2>
              <p>
                At JLR, we pride ourselves on a thorough and cohesive product development process that spans from the earliest design sketches to the final stages of deployment. Our expertise lies in our ability to cover every aspect of product creation, ensuring a smooth transition through each phase. Our team collaborates with you to refine and perfect your vision, employing a blend of innovative design practices, rigorous testing protocols, and efficient production methods. 
              </p>
              <p>
                By managing the entire development lifecycle under one roof, we provide a streamlined experience that not only saves you time and resources but also results in a superior product tailored to your unique market needs.
              </p>
            </div>

            <div className="grid-container">
                <div className="grid-item">
                  <Image src='/assets/logos/liverpool.png' width={120} height={24} alt="Liverpool" />
                </div>
                <div className="grid-item">
                  <Image src='/assets/logos/telcel.png' width={120} height={24} alt="Liverpool" />
                </div>
                <div className="grid-item">
                  <Image src='/assets/logos/fandeli.png' width={120} height={24} alt="Liverpool" />
                </div>
                <div className="grid-item">
                  <Image src='/assets/logos/homely.png' width={120} height={24} alt="Liverpool" />
                </div>
                <div className="grid-item">
                  <Image src='/assets/logos/devf.png' width={120} height={24} alt="Liverpool" />
                </div>
                <div className="grid-item">
                  <Image src='/assets/logos/aliada.png' width={120} height={24} alt="Liverpool" />
                </div>
              </div>
          </div>
        </article>
      </section>

      <Services></Services>

      
      
      <Footer></Footer>
    </main>
  );
}
