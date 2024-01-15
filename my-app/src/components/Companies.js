import React, { Component } from 'react';
import './Companies.css';
import BasicExample from './BasicExample';


class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electrons: 8,
    };

    this.electronImages = [
              "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png",
              "https://p7.hiclipart.com/preview/765/354/325/apple-company-corporation-nasdaq-aapl-apple.jpg",
              "https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg",
              "https://w7.pngwing.com/pngs/746/404/png-transparent-netflix-thumbnail.png",
              "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
              "https://pngimg.com/d/linkedIn_PNG15.png",
              "https://pngimg.com/uploads/microsoft/microsoft_PNG9.png",
              "https://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png",
             
    ];
  }

  renderElectrons() {
    const electronElements = [];
    const radius = 150;
    const centerX = 150; 
    const centerY = 150;

    const companyWebsites = [
      "https://www.google.com",
      "https://www.apple.com",
      "https://www.amazon.com",
      "https://www.netflix.com",
      "https://www.meta.com", 
      "https://www.linkedin.com",
      "https://www.microsoft.com",
      "https://www.facebook.com",
    ];

    for (let i = 0; i < this.state.electrons; i++) {
      const angle = (i * (360 / this.state.electrons) * (Math.PI / 180));
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const imgSrc = this.electronImages[i % this.electronImages.length];
      const companyWebsite = companyWebsites[i % companyWebsites.length];

      electronElements.push(
        <a key={i} href={companyWebsite} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={`electron-${i}`}
          className="electron"
          style={{ left: x, top: y }}
        />
      </a>
      );
    }

    return electronElements;
  }

  render() {
    return (
      <>
      <BasicExample />
      <div className="containerr">
        <div className="left">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <h1 className="h3">Meet Our Top Trainers</h1>
          <br />
          <h2 className="startText">
          <p>Our trainers bring</p> <p>valuable experience from</p> <p>top-notch companies</p>
          </h2>
          <br></br>
          <br></br>
          <h3 className="h32">"They provide the best learning experience"</h3>
        </div>
        <div className="right">
          <div className="electron-circle">{this.renderElectrons()}</div>
          {/* <img
            src={centerImage}
            alt="center-image"
            className="center-image"
          /> */}
        </div>
      </div>
      </>
    );
  }
}

export default Companies;