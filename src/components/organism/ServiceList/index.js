"use client"

import React, { useState, useEffect, useRef } from 'react';
import "./style.css";
import Image from "next/image";

import Service from "@/components/molecule/service";

const ServiceList = () => {
  const listRef = useRef(null);
  const parentRef = useRef(null);

  const [translateXPercentage, setTranslateXPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current && parentRef.current) {
        const listRect = listRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();
        
        // Sticky starts at 80px from the top, but we need to calculate when it starts based on the parent
        const stickyStart = 0; // The sticky top value from your CSS
        const parentTopRelativeToViewport = parentRect.top;
        const stickyEffectStart = parentTopRelativeToViewport + window.scrollY + stickyStart;
        
        // Calculate when the sticky effect should end
        const stickyEffectEnd = stickyStart + parentRef.current.offsetHeight - listRef.current.offsetHeight;
        
        // Current scroll position within the sticky effect range
        const scrollWithinStickyRange = window.scrollY - stickyEffectStart;
        
        // Total distance the sticky element can travel within the parent
        const totalStickyTravelDistance = stickyEffectEnd - stickyStart;
        
        // Calculate the percentage
        let travelPercentage = (scrollWithinStickyRange / totalStickyTravelDistance) * 100;

        setTranslateXPercentage(travelPercentage);
        
        // Clamp the value between 0 and 100
        travelPercentage = Math.max(0, Math.min(travelPercentage, 100));
        
        console.log(`The list has travelled ${travelPercentage}% of its parent.`);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
    return (
      <div ref={parentRef} className='scrolleable bg-gray'>
        <div
          className='fixed'
          ref={listRef} 
        >
          <div 
            id="list"
            style={{ transform: `translateX(-${translateXPercentage}%)` }}
          >
            <Service
              name="Product Design"
              description="Bringing your vision to reality"
              shortName="design"
            />
            <Service
              name="Software development"
              description="Mobile and web apps for all your needs"
              shortName="dev"
            />
            <Service
              name="Cloud Services"
              description="IaaS and xxxx..."
              shortName="cloud"
            />
            <Service
              name="AI"
              description="Integrate Artificial Intelligence into your business"
              shortName="ai"
            />
          </div>
        </div>
      </div>
    );
};

export default ServiceList;
