import React, { useState } from 'react';
import whatsappIcon from '/assets/nav/whatsapp-icon.png';

const WhatsAppIcon = () => {
  const [hover, setHover] = useState(false);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+917042028577'; 
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}  // Show tooltip on hover
      onMouseLeave={() => setHover(false)} 
      onClick={handleWhatsAppRedirect}
    >
      {hover && (
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '0',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '14px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            whiteSpace: 'nowrap',
          }}
        >
          WhatsApp Us
        </div>
      )}
      <img 
        src={whatsappIcon} 
        alt="WhatsApp Icon" 
        style={{ width: '50px', height: '50px' }} 
      />
    </div>
  );
};

export default WhatsAppIcon;
