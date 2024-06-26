//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dropdown widget



// import React from 'react';
// import DropdownWidget from './DropdownWidget'; // Import DropdownWidget component

// const TestDropdownWidget = () => {
//   return (
//     <div>
//       <h2>Testing DropdownWidget Component</h2>
//       <DropdownWidget />
//     </div>
//   );
// };

// export default TestDropdownWidget;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Background from './Background';
// import DropdownWidget from './DropdownWidget'; // Import DropdownWidget component

// function App() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   const [leftWidthPercent, setLeftWidthPercent] = useState(20);
//   const [rightWidthPercent, setRightWidthPercent] = useState(15);
//   // const [contactMeHeightPercent, setContactMeHeightPercent] = useState(20);
//   const [bottomSectionHeightPercent, setBottomSectionHeightPercent] = useState(15);
//   const [contactMeRowHeightPercent, setContactMeRowHeightPercent] = useState(30);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const topAspectRatio = 4 / 3;
//   const topInitialHeight = 100;
//   const bufferHeight = 20;
//   const topHeight = Math.min(topInitialHeight, windowSize.height - bufferHeight);
//   const topWidth = Math.min(topHeight * topAspectRatio, windowSize.width);

//   const bottomHeightPercent = (bottomSectionHeightPercent / 100) * windowSize.height;

//   const middleHeight = windowSize.height - topHeight - bottomHeightPercent - bufferHeight;

//   const middleWidthPercent = 100 - leftWidthPercent - rightWidthPercent;

//   const contactMeHeight = (contactMeRowHeightPercent / 100) * bottomHeightPercent;

//   const searchBarHeight = `${(topHeight * 0.6)-30}px`; // Calculate the height
//   const searchBarCornerRadius = searchBarHeight;
//   const searchBarFontSize = searchBarHeight * 0.7;
//   const contactMeFontSize = contactMeHeight * 0.5;
//   const linkSpacing = windowSize.height * 0.03; // 2% of window height for spacing between links
//   const linkFontSize = (bottomHeightPercent - contactMeHeight) * 0.2;
  
//   const widgetAspectRatio = 1; // Adjust this according to your widget's aspect ratio
//   const widgetWidth = Math.min(windowSize.width * 0.8, windowSize.height * widgetAspectRatio);
//   const widgetHeight = widgetWidth / widgetAspectRatio;

//   // Set the value of --search-bar-height in widget.css
//   document.documentElement.style.setProperty('--search-bar-height', searchBarHeight);

//   // Calculate the width of the middle half
//   const middleWidth = (middleWidthPercent/100) * windowSize.width * 0.6 - 50;

//   // Set the value of --search-bar-width in widget.css
//   document.documentElement.style.setProperty('--search-bar-width', `${middleWidth}px`);

//   return (
//     <div className="app">
//       <Background />
//       <div className="content">
//         <div className="top" style={{ height: `${topHeight}px`, width: `${windowSize.width}px`, margin: `${bufferHeight}px auto 0 auto`, position: 'relative' }}>
//           <div className="left-quarter" style={{ height: '100%', width: `${leftWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <img src="/Logo.jpg" alt="Logo" className="logo" style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }} />
//           </div>
//           <div className="middle-half" style={{ height: `${topHeight}px`, width: `${middleWidthPercent}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//             <div className="dropdown-widget-container" style={{ width: `${middleWidthPercent}%` }}>
//               <DropdownWidget />
//             </div>
//           </div>
//           <div className="right-quarter" style={{ height: '100%', width: `${rightWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <img src="/Dropdown_List_Placeholder.png" alt="Dropdown" className="dropdown-image" style={{ height: 'auto', width: '100%', maxHeight: '100%', objectFit: 'contain' }} />
//           </div>
//         </div>
//         <div className="middle" style={{ height: `${middleHeight}px`, width: windowSize.width }}>
//           <div className="buffer"></div>
//           <div className="rectangle-buffer">
//             <div className="rectangle"></div>
//           </div>
//         </div>
//         <div className="bottom" style={{ height: `${bottomHeightPercent}px`, width: windowSize.width }}>
//           <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
//             <div className="contact-me-row" style={{ marginBottom: `${contactMeHeight * 0.1}px`, fontWeight: 'bold', fontSize: `${contactMeFontSize}px` }}>
//               Contact Me:
//             </div>
//             <div className="link-container" style={{ display: 'flex', gap: `${linkSpacing}px`, fontSize: `${linkFontSize}px`, textAlign: 'center' }}>
//               <div>
//                 <a href="https://www.linkedin.com/in/zack-el-baz" target="_blank" rel="noopener noreferrer">
//                   <img src={`${process.env.PUBLIC_URL}/LinkedinSVG.svg`} alt="LinkedIn" className="icon" />
//                 </a>
//               </div>
//               <div>
//                 <a href="mailto:zackelbaz@gmail.com" target="_blank" rel="noopener noreferrer">
//                   <img src={`${process.env.PUBLIC_URL}/EmailSVG.svg`} alt="Email" className="icon" />
//                 </a>
//               </div>
//               <div>
//                 <a href="https://www.google.com/maps?q=Bristol,%20UK" target="_blank" rel="noopener noreferrer">
//                   <img src={`${process.env.PUBLIC_URL}/LocationSVG.svg`} alt="Location" className="icon" />
//                 </a>
//               </div>
//               <div>
//                 <a href="https://www.google.com/maps?q=Bristol,%20UK" target="_blank" rel="noopener noreferrer">
//                   <img src={`${process.env.PUBLIC_URL}/PDFSVG.svg`} alt="CV" className="icon" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Background from './Background';
import DropdownWidget from './DropdownWidget'; // Import DropdownWidget component
import VisitorCounter from './VisitorCounter';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [leftWidthPercent, setLeftWidthPercent] = useState(20);
  const [rightWidthPercent, setRightWidthPercent] = useState(15);
  // const [contactMeHeightPercent, setContactMeHeightPercent] = useState(20);
  const [bottomSectionHeightPercent, setBottomSectionHeightPercent] = useState(15);
  const [contactMeRowHeightPercent, setContactMeRowHeightPercent] = useState(30);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const topAspectRatio = 4 / 3;
  const topInitialHeight = 100;
  const bufferHeight = 20;
  const topHeight = Math.min(topInitialHeight, windowSize.height - bufferHeight);
  const topWidth = Math.min(topHeight * topAspectRatio, windowSize.width);

  const bottomHeightPercent = (bottomSectionHeightPercent / 100) * windowSize.height;

  const middleHeight = windowSize.height - topHeight - bottomHeightPercent - bufferHeight;

  const middleWidthPercent = 100 - leftWidthPercent - rightWidthPercent;

  const contactMeHeight = (contactMeRowHeightPercent / 100) * bottomHeightPercent;

  const searchBarHeight = `${(topHeight * 0.6)-30}px`; // Calculate the height
  const searchBarCornerRadius = searchBarHeight;
  const searchBarFontSize = searchBarHeight * 0.7;
  const contactMeFontSize = contactMeHeight * 0.5;
  const linkSpacing = windowSize.height * 0.03; // 2% of window height for spacing between links
  const linkFontSize = (bottomHeightPercent - contactMeHeight) * 0.2;
  
  const widgetAspectRatio = 1; // Adjust this according to your widget's aspect ratio
  const widgetWidth = Math.min(windowSize.width * 0.8, windowSize.height * widgetAspectRatio);
  const widgetHeight = widgetWidth / widgetAspectRatio;

  // Set the value of --search-bar-height in widget.css
  document.documentElement.style.setProperty('--search-bar-height', searchBarHeight);

  // Calculate the width of the middle half
  const middleWidth = (middleWidthPercent/100) * windowSize.width * 0.6 - 50;

  // Set the value of --search-bar-width in widget.css
  document.documentElement.style.setProperty('--search-bar-width', `${middleWidth}px`);

  return (
    <div className="app">
      <Background />
      <div className="content">
        <div className="top" style={{ height: `${topHeight}px`, width: `${windowSize.width}px`, margin: `${bufferHeight}px auto 0 auto`, position: 'relative' }}>
          <div className="left-quarter" style={{ height: '100%', width: `${leftWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={`${process.env.PUBLIC_URL}/LogoSVG.svg`}
            alt="Logo"
            className="logo"
            style={{ height: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
          </div>
          <div className="middle-half" style={{ height: `${topHeight}px`, width: `${middleWidthPercent}%`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="dropdown-widget-container" style={{ width: `${middleWidthPercent}%` }}>
              <DropdownWidget />
            </div>
          </div>
          <div className="right-quarter" style={{ height: '100%', width: `${rightWidthPercent}%`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <VisitorCounter /> {/* Render VisitorCounter component */}
          </div>
        </div>
        <div className="middle" style={{ height: `${middleHeight}px`, width: windowSize.width }}>
          <div className="buffer"></div>
          <div className="rectangle-buffer">
            <div className="rectangle"></div>
          </div>
        </div>
        <div className="bottom" style={{ height: `${bottomHeightPercent}px`, width: windowSize.width }}>
          <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div className="contact-me-row" style={{ marginBottom: `${contactMeHeight * 0.1}px`, fontWeight: 'bold', fontSize: `${contactMeFontSize}px` }}>
              Contact Me:
            </div>
            <div className="link-container" style={{ display: 'flex', gap: `${linkSpacing}px`, fontSize: `${linkFontSize}px`, textAlign: 'center' }}>
              <div className="icon-container">
                <div>
                  <a href="https://www.linkedin.com/in/zack-el-baz" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/LinkedinSVG.svg`} alt="LinkedIn" className="icon" />
                  </a>
                </div>
                <div className="text">LinkedIn</div>
              </div>
              <div className="icon-container">
                <div>
                <a href="mailto:zackelbaz@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/EmailSVG.svg`} alt="Email" className="icon" />
                  </a>
                </div>
                <div className="text">Email</div>
              </div>
              <div className="icon-container">
                <div>
                <a href="https://www.google.com/maps?q=Bristol,%20UK" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/LocationSVG.svg`} alt="Location" className="icon" />
                  </a>
                </div>
                <div className="text">Location</div>
              </div>
              <div className="icon-container">
                <div>
                  <a href={`${process.env.PUBLIC_URL}/Zack El-baz CV 2024.pdf`} download="Zack_El-baz_CV_2024.pdf">
                    <img src={`${process.env.PUBLIC_URL}/PDFSVG.svg`} alt="CV" className="icon" />
                  </a>
                </div>
                <div className="text">CV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/// Deployment
/// git add .
/// git commit -m "Deployed Website"
/// git push
/// npm run deploy