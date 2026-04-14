import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 border-top bg-white mt-auto">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <div className="bg-custom-teal text-white rounded d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px', fontWeight: 'bold' }}>
            D
          </div>
          <span className="fw-bold text-dark">Denbury <span className="text-custom-teal">Bright Smiles</span></span>
        </div>
        <div className="text-secondary small">
          &copy; {new Date().getFullYear()} Denbury Bright Smiles. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
