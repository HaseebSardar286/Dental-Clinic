"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvisalignPage() {
  const problems = [
    { title: 'Overcrowding', desc: 'When teeth lack sufficient space, increasing the risk of tooth decay and gum disease.' },
    { title: 'Large Gaps', desc: 'Spaces between teeth due to missing teeth or abnormal jaw growth.' },
    { title: 'Crossbite', desc: 'Upper teeth bite inside lower teeth, causing uneven wear, gum disease, and bone loss.' },
    { title: 'Overbite', desc: 'Upper teeth protruding over lower teeth, potentially leading to TMJ and jaw pain.' },
    { title: 'Underbite', desc: 'Lower teeth protruding over upper teeth, which can also cause TMJ and jaw pain.' }
  ];

  return (
    <div className="py-5 my-5">
      <div className="container">
        
        <div className="row align-items-center g-5 mb-5 pb-5 border-bottom border-light">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-12 col-lg-6"
          >
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-custom-teal bg-opacity-10 text-custom-teal rounded-pill small fw-bold text-uppercase mb-4">
              Elite Provider
            </div>
            <h1 className="display-4 fw-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              Clear Aligner <br />
              <span className="text-custom-teal">Transformation</span>
            </h1>
            <p className="lead text-secondary mb-5">
              Invisalign® is the modern way to straighten your teeth without traditional metal braces. No wires, no brackets, just beautifully engineered results.
            </p>
            <ul className="list-unstyled mb-5">
              {["Virtually Invisible practically unnoticeable day-to-day", "Removable for eating, brushing, and flossing", "Customized for comfort with SmartTrack material", "Faster results in many cases compared to braces"].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="d-flex align-items-center gap-3 bg-light p-3 rounded-4 border mb-3 text-secondary fw-medium"
                >
                  <div className="bg-custom-teal bg-opacity-10 text-custom-teal rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '32px', height: '32px' }}>
                    <i className="fa-solid fa-circle-check fs-5"></i>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-custom-teal text-white btn-lg rounded-pill fw-bold shadow px-5 py-3 d-inline-flex align-items-center gap-2">
               Book Free Consultation <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="col-12 col-lg-6 position-relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=2069" 
              alt="Invisalign Aligners" 
              className="img-fluid rounded-4 shadow-lg border border-white border-5 w-100" 
              style={{ objectFit: 'cover', aspectRatio: '4/5' }}
            />
          </motion.div>
        </div>

        {/* Problems Corrected Section */}
        <div className="row g-5 pt-5 mb-5 align-items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="col-12 col-lg-5"
          >
             <h2 className="display-6 fw-bold mb-4 text-dark">
               What Types of Problems Can <span className="text-custom-teal">Invisalign® Correct?</span>
             </h2>
             <p className="lead text-secondary mb-4">
               Among some of the common dental problems that can be corrected with Invisalign® include functional and aesthetic issues. To find out if Invisalign is right for you, contact us today for a complimentary consultation.
             </p>
             <Link href="/contact" className="btn btn-outline-custom-teal btn-lg rounded-pill fw-bold d-inline-flex align-items-center gap-2 px-4 py-3">
                Complimentary Consultation
             </Link>
          </motion.div>
          
          <div className="col-12 col-lg-7">
             <div className="row g-4">
                {problems.map((p, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="col-12 col-md-6"
                  >
                     <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light">
                        <div className="card-body p-0">
                           <h4 className="h5 fw-bold text-dark mb-3"><i className="fa-solid fa-tooth text-custom-teal me-2"></i> {p.title}</h4>
                           <p className="text-secondary mb-0">{p.desc}</p>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        {/* HFD Financing Section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-dark text-white p-5 rounded-4 shadow-lg position-relative overflow-hidden mt-5"
        >
           <div className="position-absolute top-0 end-0 bg-custom-teal opacity-25 rounded-circle blur-effect" style={{ width: '300px', height: '300px', filter: 'blur(100px)', transform: 'translate(40%, -40%)' }}></div>
           <div className="row align-items-center position-relative z-1">
              <div className="col-12 col-md-8 mb-4 mb-md-0">
                 <h3 className="display-6 fw-bold mb-3">Third-Party Financing by HFD</h3>
                 <p className="lead text-light opacity-75 mb-0">
                   Your Invisalign treatment is supported by HFD, giving you access to flexible financing options designed to fit your budget.
                 </p>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                 <Link href="/patient-resources" className="btn btn-custom-teal text-white btn-lg rounded-pill fw-bold shadow px-5 py-3">
                   Explore Financing
                 </Link>
              </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
