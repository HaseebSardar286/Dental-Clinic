"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="py-5 my-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Contact <span className="text-custom-teal">Us</span>
          </h1>
          <p className="lead text-secondary mb-0">
            We are here to answer any questions you have and to help you
            schedule your next appointment.
          </p>
        </motion.div>

        <div className="row g-5 align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-12 col-lg-6"
          >
            <div className="mb-5">
              <h2 className="display-6 fw-bold mb-4 text-dark">
                Visit Our Office
              </h2>
              <p className="lead text-secondary mb-0">
                Conveniently located in the center of Denbury, providing
                high-quality dental care in a state-of-the-art, welcoming
                setting.
              </p>
            </div>

            <div className="d-flex flex-column gap-4 mb-5">
              <div className="d-flex align-items-start gap-4">
                <div
                  className="bg-custom-teal bg-opacity-10 text-custom-teal rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa-solid fa-location-dot fs-2"></i>
                </div>
                <div>
                  <div className="small text-secondary fw-bold text-uppercase mb-1">
                    Our Location
                  </div>
                  <div className="h5 fw-bold text-dark mb-0">
                    57 North St, Suite 411
                    <br />
                    Danbury, CT 06810
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start gap-4">
                <div
                  className="bg-custom-teal bg-opacity-10 text-custom-teal rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa-solid fa-phone fs-2"></i>
                </div>
                <div>
                  <div className="small text-secondary fw-bold text-uppercase mb-1">
                    Phone Number
                  </div>
                  <div className="h5 fw-bold text-dark mb-0">
                    (475) 237-9011
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start gap-4">
                <div
                  className="bg-custom-teal bg-opacity-10 text-custom-teal rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa-regular fa-envelope fs-2"></i>
                </div>
                <div>
                  <div className="small text-secondary fw-bold text-uppercase mb-1">
                    Email Address
                  </div>
                  <div className="h5 fw-bold text-dark mb-0">
                    danburybrightsmiles@gmail.com
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start gap-4">
                <div
                  className="bg-custom-teal bg-opacity-10 text-custom-teal rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <i className="fa-regular fa-clock fs-2"></i>
                </div>
                <div>
                  <div className="small text-secondary fw-bold text-uppercase mb-1">
                    Business Hours
                  </div>
                  <div className="h6 text-secondary lh-lg mb-0">
                    Mon - Fri:{" "}
                    <span className="fw-bold text-dark">8:00 AM - 6:00 PM</span>
                    <br />
                    Sat:{" "}
                    <span className="fw-bold text-dark">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 pt-4 border-top">
              <a
                href="#"
                className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 text-custom-teal"
                style={{ width: "48px", height: "48px" }}
              >
                <i className="fa-brands fa-instagram fs-5"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 text-custom-teal"
                style={{ width: "48px", height: "48px" }}
              >
                <i className="fa-brands fa-facebook-f fs-5"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-12 col-lg-6"
          >
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 position-relative">
              <div
                className="position-absolute top-0 end-0 bg-custom-teal opacity-10 rounded-circle blur-effect"
                style={{
                  width: "250px",
                  height: "250px",
                  filter: "blur(80px)",
                  transform: "translate(30%, -30%)",
                }}
              ></div>
              <h3 className="h2 fw-bold text-dark mb-4 position-relative z-1">
                Send an Inquiry
              </h3>
              <form onSubmit={handleSubmit} className="position-relative z-1">
                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-secondary">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control form-control-lg bg-light border-0"
                      placeholder=""
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-secondary">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light border-0"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold text-secondary">
                    Phone
                  </label>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text bg-light border-0 pe-2">
                      🇺🇸
                    </span>
                    <input
                      type="tel"
                      className="form-control bg-light border-0 ps-2"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light border-0"
                    placeholder=""
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold text-secondary mb-2 d-block">
                    Do you have dental insurance? *
                  </label>
                  <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="insurance"
                        id="insYes"
                        value="yes"
                        required
                      />
                      <label
                        className="form-check-label text-secondary fs-5"
                        htmlFor="insYes"
                        style={{ fontWeight: "300" }}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="insurance"
                        id="insNo"
                        value="no"
                      />
                      <label
                        className="form-check-label text-secondary fs-5"
                        htmlFor="insNo"
                        style={{ fontWeight: "300" }}
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold text-secondary">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    className="form-control form-control-lg bg-light border-0"
                    placeholder=""
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-custom-teal btn-lg w-100 rounded-pill fw-bold shadow py-3"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Map Embedded Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 pt-4"
        >
          <h3 className="h3 fw-bold text-dark mb-4 text-center">
            Get Directions
          </h3>
          <div
            className="rounded-4 overflow-hidden shadow-lg border border-white border-5"
            style={{ height: "450px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=57+North+St,+Danbury,+CT+06810&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
