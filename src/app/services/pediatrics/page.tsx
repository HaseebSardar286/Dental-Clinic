"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faStar,
  faShieldHeart,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-star": faStar,
  "fa-shield-heart": faShieldHeart,
  "fa-droplet": faDroplet,
};

export default function PediatricsPage() {
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
            <FontAwesomeIcon icon={faChild} /> Compassionate Children's Care
          </div>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Pediatrics <span className="text-custom-teal">Dentistry</span>
          </h1>
          <p className="lead text-secondary mb-0">
            We provide a welcoming, fun, and exceptionally gentle environment
            for young patients, helping them build incredibly positive habits
            for a lifetime of healthy smiles.
          </p>
        </motion.div>

        <div className="row g-4" style={{ maxWidth: "1200px" }}>
          {[
            {
              title: "Gentle Cleanings & Exams",
              desc: "Routine preventative care conducted with absolute patience and care, ensuring your child always feels completely relaxed and comfortable in the dentist's chair.",
              icon: "fa-star",
            },
            {
              title: "Preventative Sealants",
              desc: "A simple, painless, and highly effective protective coating applied to the chewing surfaces of back teeth to expertly guard against childhood cavities.",
              icon: "fa-shield-heart",
            },
            {
              title: "Fluoride Treatments",
              desc: "Quick and incredibly easy topical treatments designed to significantly strengthen developing enamel and proactively prevent tooth decay in young smiles.",
              icon: "fa-droplet",
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
