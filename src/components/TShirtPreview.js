import React from 'react';
import image from '../images/t_shirt.png'

const TShirtPreview = ({ design, width, height }) => {

    return (
        <div className="tshirt-preview" style={{ position: 'relative', display: 'inline-block' }}>
            <img src={image} alt="T-Shirt" className="tshirt-image" style={{ width: '100%', height: 'auto', display: 'block' }}/>
            {design && (
        <img
          src={design}
          alt="Design"
          className="design-image"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // maxWidth: '100%', 
            // maxHeight: '100%', 
            // objectFit: 'contain', 
          }}
        />
      )}

        </div>
    );
};
export default TShirtPreview;