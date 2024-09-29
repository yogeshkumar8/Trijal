import React from 'react';

function Header() {
  return (
    <header className='hero-section'>
      <nav className='header-main'>
      <div className='logo-name'>
        Trijal
        <p className='para-logo'>Come Lets Go The Right Way</p>
      </div>
        <ul className=''>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Products & Services </a></li>
          <li><a href="#contact">Gallery</a></li>
          <li><a href="#contact">Career</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div style={{marginTop:"180px"}}>
        <div style={{fontSize:"70px",fontWeight:"500"}}>
        We Work For Excellence
        </div>
        <div style={{fontSize:"28px",fontWeight:"500",marginTop:"20px"}}>
        By providing customized solutions, products & services that 
       
        </div>
        <div style={{fontSize:"28px",fontWeight:"500" ,marginTop:"10px"}}> best satisfies the requirements of our Customers.</div>
      </div>
    </header>
  );
}

export default Header;