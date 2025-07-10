import React from 'react';
import './OurTeam.css';

const team = [
  { name: 'Aakash Raj', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Sharma', role: 'Lead Designer', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Ravi Singh', role: 'Head of Development', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Sneha Joshi', role: 'Marketing Manager', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
];

const OurTeam = () => (
  <section className="our-team" id="team">
    <h2>Our Team</h2>
    <div className="team-list">
      {team.map((member) => (
        <div className="team-member" key={member.name}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurTeam; 