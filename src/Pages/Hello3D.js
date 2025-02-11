import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera } from '@react-three/drei';
import profileImage from '../images/profileimage.png';
import './Hello3D.css';

const RotatingText = () => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.elapsedTime) * 0.1;
      textRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <Text
        ref={textRef}
        color="#f4b400"
        fontSize={1.5}
        maxWidth={300}
        lineHeight={1}
        letterSpacing={0.1}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        Rajat Amate
        
      </Text>
    </Float>
  );
};

const Hello3D = () => {
  return (
    <div className="main-container">
      <header className="hero-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I am Rajat Amate, a software developer passionate about solving real-world problems with innovative solutions.
        </p>
        <button className="cta-button">Learn More</button>
      </header>
      <div className="content-section">
        <div className="text-3d-section">
          {/* <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
            <color attach="background" args={['#1a1a1a']} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={2} />
            <Suspense fallback={null}>
              <RotatingText />
              
            </Suspense>
          </Canvas> */}
          
           <p className="about-text">
           <h1>About</h1>
            I am a software developer with expertise in web development and artificial intelligence. My mission is to create impactful solutions that make a difference.
            A Graduate Student of Bachelors of Engineering form Vidyalankar Institute of Technology

CGPI 9.76

Advent Love for Technology and stuff also a keen interest in getting a job per say
          
          </p>
        </div>
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
         
        </div>
      </div>
    </div>
  );
};

export default Hello3D;
