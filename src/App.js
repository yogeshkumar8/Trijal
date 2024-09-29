
// //import Matrix from './component/Matrix';
// import './App.css'
// // import ParentComponent from './component/ParentComponent';
// // import Wazir from './component/Wazir';

// function App() {
//   return (
//     // <div className="App">
//     //   {/* <Wazir/> */}
//     //   <ParentComponent/>
//     // </div>
//     // <div className="App">
//     //   <h1>3x3 Matrix</h1>
//     //   <Matrix/>
//     // </div>
//     <>
//       <div>hello</div>
//     </>
//   );
// }

// export default App;
import React from 'react';
import Header from './trijal-electrikals/Header';
import HeroSection from './trijal-electrikals/HeroSection';
import AboutSection from './trijal-electrikals/AboutSection';
import ServicesSection from './trijal-electrikals/ServicesSection';
import TestimonialsSection from './trijal-electrikals/TestimonialsSection';
import ContactSection from './trijal-electrikals/ContactSection';
import Footer from './trijal-electrikals/Footer';
import './App.css'
import Partnership from './trijal-electrikals/Partnership';
function App() {
  return (
    <div>
      <Header />
      <Partnership />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;