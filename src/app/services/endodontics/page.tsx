"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faTooth,
  faRotateRight,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-tooth": faTooth,
  "fa-rotate-right": faRotateRight,
  "fa-truck-medical": faTruckMedical,
};

export default function EndodonticsPage() {
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
            <FontAwesomeIcon icon={faMicroscope} /> Specialized Tooth
            Preservation
          </div>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Endodontics <span className="text-custom-teal">Dentistry</span>
          </h1>
          <p className="lead text-secondary mb-0">
            Expert care focused on saving your natural teeth. Utilizing advanced
            micro-dentistry, we offer comfortable, efficient root canal
            therapies and treatments for dental pulp.
          </p>
        </motion.div>

        <div className="row g-4" style={{ maxWidth: "1200px" }}>
          {[
            {
              title: "Root Canal Therapy",
              desc: "A highly effective, virtually painless procedure to remove infected dental pulp, thoroughly clean the inner canals, and seal the tooth to save it from extraction.",
              icon: "fa-tooth",
            },
            {
              title: "Endodontic Retreatment",
              desc: "Specialized care for a previously treated tooth that has not healed properly or has sustained new infections, ensuring the tooth can still be preserved.",
              icon: "fa-rotate-right",
            },
            {
              title: "Dental Trauma Treatment",
              desc: "Immediate, expert management of traumatic dental injuries such as knocked-out, dislodged, or fractured teeth to maximize the chances of saving the tooth.",
              icon: "fa-truck-medical",
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
