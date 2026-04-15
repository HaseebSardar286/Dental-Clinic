"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faBroom,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-broom": faBroom,
  "fa-kit-medical": faKitMedical,
  "fa-clipboard-check": faClipboardCheck,
};

export default function PeriodonticsPage() {
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
            <FontAwesomeIcon icon={faTooth} /> Gum Health & Maintenance
          </div>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Periodontics <span className="text-custom-teal">Dentistry</span>
          </h1>
          <p className="lead text-secondary mb-0">
            Comprehensive care for the foundational structures of your teeth. We
            provide expert treatment for gum disease to ensure long-term oral
            health and stability.
          </p>
        </motion.div>

        <div className="row g-4" style={{ maxWidth: "1200px" }}>
          {[
            {
              title: "Scaling and Root Planing",
              desc: "A meticulous deep cleaning procedure that removes dental plaque and calculus, smoothing the root surfaces to promote proper healing of gum tissue.",
              icon: "fa-broom",
            },
            {
              title: "Gum Disease Treatment",
              desc: "Advanced therapeutic interventions to arrest the progression of periodontal disease, minimizing inflammation and preventing future tooth loss.",
              icon: "fa-kit-medical",
            },
            {
              title: "Periodontal Maintenance",
              desc: "Ongoing specialized care and routine monitoring designed to protect your gums and ensure the sustained success of previous periodontal treatments.",
              icon: "fa-clipboard-check",
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
