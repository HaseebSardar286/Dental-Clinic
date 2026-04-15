"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faSyringe, faBone } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-tooth": faTooth,
  "fa-syringe": faSyringe,
  "fa-bone": faBone,
};

export default function OralSurgeryPage() {
  return (
    <div className="py-5 my-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
          style={{ maxWidth: "800px" }}
        >
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-custom-teal bg-opacity-10 text-white rounded-pill small fw-bold text-uppercase mb-4">
            <FontAwesomeIcon icon={faTooth} /> Advanced Care
          </div>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Oral <span className="text-custom-teal">Surgery</span>
          </h1>
          <p className="lead text-secondary mb-0">
            Comprehensive oral surgical solutions provided with precision,
            cutting-edge technology, and compassionate care by our specialists.
          </p>
        </motion.div>

        <div className="row g-4" style={{ maxWidth: "1200px" }}>
          {[
            {
              title: "Dental Implants",
              desc: "The gold standard for replacing missing teeth. Dental implants are surgically placed into your jawbone to function, feel, and look precisely like natural healthy teeth, preventing bone loss.",
              icon: "fa-tooth",
            },
            {
              title: "Wisdom Teeth Removal",
              desc: "Expert, comfortable removal of impacted or troublesome wisdom teeth to prevent severe pain, infection, and crowding of your correctly aligned healthy teeth.",
              icon: "fa-syringe",
            },
            {
              title: "Bone Grafting",
              desc: "Advanced preparation for dental implants by carefully strengthening and restoring underlying jawbone structure that has eroded due to tooth loss or periodontal disease.",
              icon: "fa-bone",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="card h-100 border-0 shadow-sm p-4 p-md-5 rounded-4 transition hover-shadow text-start">
                <div className="card-body d-flex flex-column p-0">
                  <div
                    className="bg-custom-teal bg-opacity-10 text-white rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <FontAwesomeIcon icon={iconMap[s.icon]} className="fs-2" />
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-dark">{s.title}</h3>
                  <p
                    className="text-secondary mb-0 flex-grow-1"
                    style={{ fontSize: "1.05rem" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
