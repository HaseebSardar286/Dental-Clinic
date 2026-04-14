"use client";

import React from 'react';
import Link from 'next/link';

export default function PatientResourcesPage() {
  return (
    <div className="bg-white" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="position-relative py-5">
         <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Care" 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{ objectFit: 'cover', opacity: 0.6 }} 
         />
         <div className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50"></div>
         <div className="container position-relative z-1 py-5 my-5">
            <h1 className="display-4 fw-bold text-custom-teal shadow-sm bg-white bg-opacity-75 p-4 rounded-4 d-inline-block" style={{ backdropFilter: 'blur(8px)' }}>
              Quality care <br/>within your <br/>budget.
            </h1>
         </div>
      </section>

      {/* No Insurance block */}
      <section className="py-5 container mt-4">
         <div className="row g-4 align-items-stretch">
            <div className="col-12 col-md-5">
              <img 
                 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" 
                 alt="Dentist discussing with patient" 
                 className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"
              />
            </div>
            <div className="col-12 col-md-7">
               <div className="bg-custom-teal bg-opacity-10 h-100 rounded-4 p-5 d-flex flex-column justify-content-center shadow-sm">
                 <h2 className="display-5 fw-bold text-custom-teal mb-4">No insurance?<br/>We've got you<br/>covered.</h2>
                 <p className="text-secondary" style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
                   Danbury Bright Smiles was built starting inside out for uninsured people. That is why we offer our own in-house membership - a simple and affordable alternative to traditional insurance, providing you with clear pricing and peace of mind. Whether you're uninsured or want a better way to manage your dental care, our membership plan provides a stress-free option.
                 </p>
               </div>
            </div>
         </div>
      </section>

      {/* Membership Plan */}
      <section id="membership-plan" className="py-5 text-center container mt-4" style={{ scrollMarginTop: '100px' }}>
         <h2 className="display-4 fw-bold text-custom-teal mb-2" style={{ letterSpacing: '2px' }}>Membership Plan</h2>
         <p className="text-custom-teal lead fw-bold mb-4">Affordable Care, Anytime You Need It</p>
         <p className="text-secondary mb-5 small mx-auto" style={{maxWidth: '600px'}}>
           Explore our special dental membership plans — created to keep your smile healthy with affordable, consistent pricing and exceptional benefits.
         </p>

         <div className="row g-4 justify-content-center">
            {/* Adult Plan */}
            <div className="col-12 col-md-5">
               <div className="bg-custom-teal bg-opacity-25 rounded-4 p-5 text-center shadow-sm h-100 border border-white border-5">
                 <h3 className="h4 text-custom-teal fw-bold">Adult</h3>
                 <p className="small text-secondary mb-4">(13 years and older)</p>
                 <h4 className="fw-bold fs-5 mb-1 text-dark">Membership Pricing</h4>
                 <p className="small text-custom-teal fw-bold mb-4">$349 / Year</p>
                 <h5 className="fw-bold text-dark fs-6 mb-3">Included Services</h5>
                 <ul className="list-unstyled text-secondary small lh-lg mb-5">
                    <li>2 Cleanings</li>
                    <li>Exams</li>
                    <li>X-Rays</li>
                    <li>2 Fluoride treatments</li>
                    <li className="mt-2 text-dark" style={{fontSize: '11px'}}>Any additional treatments needed<br/>excluding sedation</li>
                 </ul>
                 <button className="btn btn-dark text-white rounded-pill px-5 py-2 shadow fw-bold mt-auto w-75">Book Now</button>
               </div>
            </div>
            {/* Minor Plan */}
            <div className="col-12 col-md-5">
               <div className="bg-custom-teal bg-opacity-25 rounded-4 p-5 text-center shadow-sm h-100 border border-white border-5">
                 <h3 className="h4 text-custom-teal fw-bold">Minor</h3>
                 <p className="small text-secondary mb-4">(12 years and younger)</p>
                 <h4 className="fw-bold fs-5 mb-1 text-dark">Membership Pricing</h4>
                 <p className="small text-custom-teal fw-bold mb-4">$229 / Year</p>
                 <h5 className="fw-bold text-dark fs-6 mb-3">Included Services</h5>
                 <ul className="list-unstyled text-secondary small lh-lg mb-5">
                    <li>2 Cleanings</li>
                    <li>Exams</li>
                    <li>X-Rays</li>
                    <li>2 Fluoride treatments</li>
                    <li className="mt-2 text-dark" style={{fontSize: '11px'}}>Any additional treatments needed<br/>excluding sedation</li>
                 </ul>
                 <button className="btn btn-dark text-white rounded-pill px-5 py-2 shadow fw-bold mt-auto w-75">Book Now</button>
               </div>
            </div>
         </div>
      </section>

      {/* Insurances */}
      <section id="insurances" className="py-5 container text-center mt-5" style={{ scrollMarginTop: '100px' }}>
         <h2 className="display-5 fw-bold text-custom-teal mb-5" style={{ letterSpacing: '2px' }}>Insurances we accept</h2>
         <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 my-5 opacity-75">
            <span className="fs-3 fw-bold text-success d-flex flex-column align-items-center gap-1"><i className="fa-solid fa-play fs-1"></i> <span style={{fontSize: '14px'}}>DELTA DENTAL</span></span>
            <span className="fs-3 fw-bold text-primary d-flex flex-column align-items-center gap-1"><i className="fa-solid fa-shield-cat fs-1"></i> <span style={{fontSize: '14px'}}>BlueCross BlueShield</span></span>
            <span className="fs-2 fw-bold text-primary d-flex align-items-center gap-2"><i className="fa-brands fa-envira text-success"></i> cigna</span>
            <span className="fs-4 fw-bold text-info d-flex align-items-center gap-2"><i className="fa-regular fa-building text-primary"></i> UnitedHealthcare</span>
            <span className="fs-3 fw-bold text-success d-flex align-items-center gap-2"><i className="fa-brands fa-google text-success"></i> Guardian</span>
            <span className="fs-2 fw-bold text-purple d-flex align-items-center gap-2" style={{color: 'purple'}}><i className="fa-solid fa-heart"></i> aetna</span>
            <span className="fs-5 fw-bold text-dark border border-dark rounded-pill px-3 py-2">HUSKY HEALTH</span>
            <span className="fs-3 fw-bold text-info d-flex align-items-center gap-2"><i className="fa-brands fa-medium text-info"></i> MetLife</span>
         </div>
      </section>

      {/* Payment Options */}
      <section id="payment-options" className="py-5 container text-center mt-4 mb-5" style={{ scrollMarginTop: '100px' }}>
         <h2 className="display-5 fw-bold text-custom-teal mb-5" style={{ letterSpacing: '2px' }}>Payment Options</h2>
         <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6">
               <div className="bg-custom-teal bg-opacity-25 rounded-4 p-5 text-start h-100 shadow-sm border border-white border-5">
                  <h4 className="text-custom-teal fw-bold mb-4 fs-5 lh-base">Affordable Dental Care<br/>with CareCredit</h4>
                  <p className="small text-secondary mb-4" style={{lineHeight: '1.8'}}>At Danbury Bright Smiles, we believe quality dental care should be accessible to everyone. That is why we offer CareCredit, a convenient financing option that allows you to pay for treatments over time with flexible, monthly payments.</p>
                  <ul className="small text-secondary mb-5 ps-3" style={{lineHeight: '1.8'}}>
                     <li className="mb-2"><span className="fw-bold text-dark">Instant Approval</span> - Apply online and get a decision in minutes.</li>
                     <li className="mb-2"><span className="fw-bold text-dark">Pay over time</span> - Get the treatment today and pay over time.</li>
                     <li><span className="fw-bold text-dark">Special Financing Options</span> - Enjoy interest free plans when paid in full within the promotional period.</li>
                  </ul>
                  
                  <div className="d-flex align-items-center gap-3 bg-white p-3 rounded-3 shadow-sm border">
                    <i className="fa-solid fa-qrcode text-dark" style={{fontSize: '4rem'}}></i>
                    <span className="text-secondary fw-bold" style={{fontSize: '11px'}}>Scan or click the secure link<br/>to safely apply for<br/>CareCredit to us.</span>
                  </div>
               </div>
            </div>
            
            <div className="col-12 col-md-6">
               <div className="bg-custom-teal bg-opacity-25 rounded-4 p-5 text-start h-100 shadow-sm border border-white border-5">
                  <h4 className="text-custom-teal fw-bold mb-4 fs-5 lh-base">Flexible Financing<br/>with Cherry</h4>
                  <p className="small text-secondary mb-4" style={{lineHeight: '1.8'}}>At Danbury Bright Smiles, we believe everyone deserves a confident, healthy smile without financial stress. That is why we've partnered with Cherry, a simple and fast payment plan option that lets you split your treatment costs into monthly payments.</p>
                  
                  <p className="small text-custom-teal fw-bold mb-2">Why Choose Cherry?</p>
                  <ul className="small text-secondary mb-5 ps-3" style={{lineHeight: '1.8'}}>
                     <li className="mb-2">Quick Approval (no hard credit check)</li>
                     <li className="mb-2">Flexible monthly payments</li>
                     <li className="mb-2">No hidden fees or surprises</li>
                     <li>Apply in seconds - get results instantly</li>
                  </ul>
                  
                  <div className="d-flex align-items-center gap-3 bg-white p-3 rounded-3 shadow-sm border">
                    <i className="fa-solid fa-qrcode text-dark" style={{fontSize: '4rem'}}></i>
                    <span className="text-secondary fw-bold" style={{fontSize: '11px'}}>Scan or click the secure link<br/>to safely apply for<br/>Cherry and pay us.</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Map Section */}
      <section className="position-relative w-100 border-top border-4 border-custom-teal" style={{ height: '400px', backgroundColor: '#f9f9f9'}}>
         <iframe 
                src="https://maps.google.com/maps?q=57+North+St,+Danbury,+CT+06810&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
         <div className="position-absolute bottom-0 start-0 m-2 m-md-5 p-4 bg-white bg-opacity-75 rounded-4 shadow" style={{ backdropFilter: 'blur(10px)', minWidth: '350px'}}>
           <div className="d-flex align-items-center gap-2 fw-bold text-dark mb-4">
               <div className="bg-custom-teal text-white rounded d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontWeight: 'bold' }}>
                  DBS
               </div>
               <span>Denbury Bright Smiles</span>
           </div>
           
           <p className="small fw-bold text-dark mb-2 border-bottom border-secondary border-opacity-25 pb-2">
             <i className="fa-solid fa-phone text-custom-teal me-2"></i> Tel: (475) 237-9011
           </p>
           <p className="small fw-bold text-dark mb-2 border-bottom border-secondary border-opacity-25 pb-2">
             <i className="fa-regular fa-envelope text-custom-teal me-2"></i> Email: danburybrightsmiles@gmail.com
           </p>
           <p className="small fw-bold text-dark mb-4">
             <i className="fa-solid fa-location-dot text-custom-teal me-2"></i> 57 North St, Suite 411 Danbury, CT 06810
           </p>
           
           <div className="d-flex gap-3 mt-4">
             <a href="#" className="text-dark bg-white shadow-sm border rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
               <i className="fa-brands fa-facebook-f fs-5"></i>
             </a>
             <a href="#" className="text-dark bg-white shadow-sm border rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
               <i className="fa-brands fa-instagram fs-5"></i>
             </a>
           </div>
         </div>
      </section>

    </div>
  );
}
