import React from 'react'
import Hello3D from './Hello3D';
import './Dashboard.css';
import Projects from './Projects';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <section id="home">
      <Hello3D />
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <p>LinkedIn : https://LinkedIn/rajat-amate.com</p>
    </section>
    <section id= "projects">
      <Projects/>
    </section>
  </div>
  )
}

export default Dashboard;
