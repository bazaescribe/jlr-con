import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RotatingElement = ({ src, width = 240, height = 240, direction = "normal" }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la rotación. Si la dirección es 'inverse', multiplica por -1 para invertir.
      const rotation = (window.scrollY / 12) * (direction === "reverse" ? -1 : 1);
      setRotation(rotation);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction]); // Añade 'direction' a las dependencias para que el efecto se ajuste si cambia.

  return (
    <div style={{ 
      transform: `rotate(${rotation}deg)`, 
      display: 'flex', 
      justifyContent: 'center',
      height: `${height}px`,
      width: `${width}px`
    }}>
      <Image src={src} width={width} height={height} alt='Element' />
    </div>
  );
};

export default RotatingElement;
