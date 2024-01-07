import React from 'react';
import './Work.css'; // Import your custom styles for the Work component
import ciscoLogo from '../static/cisco.png'; // Import the Cisco company logo image
import otherLogo from '../static/security.png'; // Import another logo image
import ckiLogo from '../static/cki.png'

const Work = () => {
  const workData = [
        {
      id: 1,
      title: 'Security Engineer',
      company: 'Cisco',
      description: [
      '◦ Managing and troubleshooting on VPN technologies, specializing in IPsec tunnels and TLS(DTLS)/SSL Remote Access VPN like Cisco AnyConnect on Cisco Firewall(Firepower, ASA)/ Routers(IOS-XE)',
      '◦ Working on high-priority cases to provide customers resolution to the cases within strict SLAs with TTR of less than 4 hours',
      ],
    
      logo: ciscoLogo,
    },
    {
      id: 2,
      title: 'Automation Software Engineer (Consulting Engineer)',
      company: 'Cisco',
      description: [
        '◦ Undergoing mentorship to become a subject matter expert & Regional Technical Lead within the team.',
        '◦ Handling Software development and DevOps requirements for customer delivery tools with Critical SLAs for Downtime.',
        '◦ Providing technical consultation to the customers to enhance their insights for their telemetry.',
        '◦ Managing Customer Production Servers for Maintenance, Support and Vulnerability Management.',
        '◦ Managing critical accounts with highly customized automation requirements, ensuring stable operations and positive customer sentiment.',
      ],
      logo: ciscoLogo,
    },
    {
      id: 2,
      title: 'CyberSecurity Intern',
      company: 'Gurugram Police',
      description: ['Learning from Real Cyber-Crime Case studies and assessed with blue team projects.',],
      logo: otherLogo,
    },
     {
      id: 3,
      title: 'enetration Tester Intern',
      company: 'CyberKings India',
      description: ['Assessed over 10 web application vulnerability projects for multiple clients, effectively identifying and mitigating security risks',],
      logo: ckiLogo,
    },
    // Add more projects with their respective logos
  ];

  return (
      <div className="work-container">
      <h2 className="section-title">Work</h2>
      <div className="work-list">
        {workData.map((project) => (
          <div key={project.id} className="work-item">
            <div className="logo-container">
              <img src={project.logo} alt={project.company} className="company-logo" />
            </div>
            <h3 className="work-title">{project.title}</h3>
            <p className="work-company">{project.company}</p>
            <ul className="work-description">
              {project.description.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
