import React from 'react';
import './Certifications.css'; // Import your custom styles for the Certifications component
import rhcsa from '../static/certs/rhcsa.png'
import cc from '../static/certs/cc.png'
import ccna from '../static/certs/ccna.png'
import cyberops from '../static/certs/cyberops.png'
import vmware from '../static/certs/vcp.png'
import ceh from '../static/certs/CEH.jpg'
const Certifications = () => {
  const certificationData = [
    {
      id: 1,
      title: 'RedHat Certified System Administrator',
      organization: 'Organization A',
      description: '',
      imageUrl: rhcsa
    },
    {
      id: 2,
      title: 'Certified Ethical Hacker',
      organization: 'EC-Council',
      description: '',
      imageUrl: ceh
    },
    {
      id: 3,
      title: '(ISC)2 Certified in CyberSecurity',
      organization: '(ISC)2',
      description: '',
      imageUrl: cc
    },
     {
      id: 4,
      title: 'Cisco Certified CyberOps Associate',
      organization: 'Cisco',
      description: '',
      imageUrl: cyberops
    },
        {
      id: 5,
      title: 'Cisco Certified Nework Associate',
      organization: 'Cisco',
      description: '',
      imageUrl: ccna
    },
       
        {
      id: 6,
      title: 'VMWare Certified Professional - Data Center Virtualization',
      organization: 'VMWare',
      description: '',
      imageUrl: vmware
    },
          
  
  ];

  return (
    <div className="certifications-container">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-list">
        {certificationData.map((certification) => (
          <div key={certification.id} className="certification-item">
            <img className="certification-image" src={certification.imageUrl} alt={certification.title} />
            <h3 className="certification-title">{certification.title}</h3>
            <p className="certification-organization">{certification.organization}</p>
            <p className="certification-description">{certification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
