"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <div className="bg-custom-teal text-white rounded d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', fontWeight: 'bold' }}>
            D
          </div>
          <span className="fw-bold">Denbury <span className="text-custom-teal">Bright Smiles</span></span>
        </Link>
        
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
            <li className="nav-item dropdown hover-dropdown">
              <Link className="nav-link fw-semibold dropdown-toggle" href="/services" id="servicesDropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item py-2" href="/services/cosmetic-dentistry">Cosmetic Dentistry</Link></li>
                <li><Link className="dropdown-item py-2" href="/services/periodontics">Periodontics Dentistry</Link></li>
                <li><Link className="dropdown-item py-2" href="/services/oral-surgery">Oral Surgery</Link></li>
                <li><Link className="dropdown-item py-2" href="/services/endodontics">Endodontics Dentistry</Link></li>
                <li><Link className="dropdown-item py-2" href="/services/prosthodontics">Prosthodontics Dentistry</Link></li>
                <li><Link className="dropdown-item py-2" href="/services/pediatrics">Pediatrics Dentistry</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item py-2 fw-medium text-custom-teal" href="/services">View All Services</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown hover-dropdown">
              <Link className="nav-link fw-semibold dropdown-toggle" href="/invisalign" id="invisalignDropdown" aria-expanded="false">
                Invisalign®
              </Link>
              <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="invisalignDropdown">
                <li><Link className="dropdown-item py-2" href="/invisalign">Learn More</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/about">Our Practice</Link>
            </li>
            <li className="nav-item dropdown hover-dropdown">
              <Link className="nav-link fw-semibold dropdown-toggle" href="/patient-resources" id="resourcesDropdown" aria-expanded="false">
                Patient Resources
              </Link>
              <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item py-2" href="/patient-resources#membership-plan">Membership Plans</Link></li>
                <li><Link className="dropdown-item py-2" href="/patient-resources#insurances">Insurances we accept</Link></li>
                <li><Link className="dropdown-item py-2" href="/patient-resources#payment-options">Payment options</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link href="/contact" className="btn btn-custom-teal text-white px-4 py-2 rounded-pill fw-bold shadow-sm">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
