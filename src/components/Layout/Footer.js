import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center  p-10 bg-neutral text-neutral-content">
    <nav>
      <header className="footer-title">Services</header> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Career</header> 
      <a className="link link-hover">Email</a>
      <a className="link link-hover">LinkedIn</a>
      <a className="link link-hover">Facebook</a>
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
};

export default Footer;