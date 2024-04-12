"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

import "./style.css"

const Services = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const services = wrapper.getElementsByClassName('service')
      const graphics = wrapper.getElementsByClassName('graphic')
      let currentInView = null;

      for(const service of services){
        const {top, bottom} = service.getBoundingClientRect();
        const margin = 500;

        if(top < window.innerHeight && bottom >= margin){
          currentInView = service;
          break;
        }
      }

      // Remover la clase 'show' de todos los gráficos primero
      for (const graphic of graphics) {
        graphic.classList.remove('show');
      }

      if (currentInView) {
        const graphicId = currentInView.id + '-img';
        const graphicToShow = wrapper.querySelector(`#${graphicId}`);
        if (graphicToShow) {
          graphicToShow.classList.add('show');
        }

        switch (currentInView.id) {
          case 'design':
            wrapper.style.backgroundColor = '#E5E3D0'; // Rojo para diseño
            break;
          case 'dev':
            wrapper.style.backgroundColor = '#A7CBCE'; // Verde para desarrollo
            break;
          case 'cloud':
            wrapper.style.backgroundColor = '#161616'; // Azul para cloud
            break;
          case 'ai':
            wrapper.style.backgroundColor = '#FF4900'; // Amarillo para AI
            break;
          default:
            wrapper.style.backgroundColor = 'transparent'; // Fallback
        }
      }

      const scroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
  });

  return (
    <section ref={wrapperRef} className="wrapper">
      <article className="container">
        <div className="row">
          <div>
            <div className='service' id="design">
              <div>
                <h6>
                  Design Studio
                </h6>
                <h2>
                  We craft experiences
                </h2>
                <p>
                  Our expert team pushes the boundaries of creativity and technology, ensuring your product not only stands out but sets new standards. From sleek mobile apps to groundbreaking IoT devices, JLR is your partner in pioneering design solutions that captivate. Transform your idea into a reality that’s as innovative as it is irresistible. Let's innovate, together.
                </p>
              </div>
            </div>
            <div className='service' id="dev">
              <div>
                <h6>
                  Software Development
                </h6>
                <h2>
                  Building cutting-edge technology
                </h2>
                <p>
                  Our development team breathes life into your products, transforming innovative designs into robust, scalable solutions. Specializing in everything from mobile and web applications to advanced software systems, we ensure your project thrives in the digital era. With JLR, expect precision engineering, agile development practices, and a seamless transition from concept to launch. Partner with us to build not just products, but legacies. Let’s create the extraordinary, together.
                </p>
              </div>
            </div>
            <div className='service' id="cloud">
              <div>
                <h6>
                  Cloud & IaaS
                </h6>
                <h2>
                  Sky is the Limit
                </h2>
                <p>
                  We customize cloud environments that fit your specific needs, whether you’re a startup or an established enterprise looking to innovate. Our IaaS services provide the foundation for agility, enabling rapid deployment, management, and scaling of applications with ease. Experience the freedom to innovate without limits, backed by our expert support every step of the way.
                </p>
              </div>
            </div>
            <div className='service' id="ai">
              <div>
                <h6>
                  AI & Data
                </h6>
                <h2>
                  Intelligence for today
                </h2>
                <p>
                  From predictive analytics to natural language processing, JLR provides the tools you need to turn information into action. Empower your business with data-driven decisions and lead your industry with intelligence. Let's craft the future with data.
                </p>
              </div>
            </div>
          </div>

          <div className='right-panel'>
            <div className="sticky">
              <div className='graphic' id="design-img">
                <Image src="/assets/screens/wireframe.png" height={720} width={351} alt='Wireframe'></Image>
              </div>
              <div className='graphic' id="dev-img">
                <Image src="/assets/screens/mockup.png" height={720} width={351} alt='Wireframe'></Image>
              </div>
              <div className='graphic' id="cloud-img">
                <Image src="/assets/screens/cloud.png" height={720} width={351} alt='Wireframe'></Image>
              </div>
              <div className='graphic' id="ai-img">
                <Image src="/assets/screens/ai.png" height={720} width={351} alt='Wireframe'></Image>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Services;
