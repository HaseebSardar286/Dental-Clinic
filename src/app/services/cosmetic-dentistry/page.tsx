"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faSun } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-wand-magic-sparkles": faWandMagicSparkles,
  "fa-sun": faSun,
};

export default function CosmeticDentistryPage() {
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
            <FontAwesomeIcon icon={faWandMagicSparkles} /> Aesthetic
            Enhancements
          </div>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Cosmetic <span className="text-custom-teal">Dentistry</span>
          </h1>
          <p className="lead text-secondary mb-0">
            Transform your smile and boost your confidence with our advanced
            cosmetic treatments tailored to your unique facial aesthetics.
          </p>
        </motion.div>

        <div className="row g-4" style={{ maxWidth: "1200px" }}>
          {[
            {
              title: "Porcelain Veneers",
              desc: "Ultra-thin, custom-made ceramic shells bonded to the front of your teeth. They conceal imperfections, close gaps, and create a flawlessly aligned, brilliant smile.",
              icon: "fa-wand-magic-sparkles",
            },
            {
              title: "Professional Whitening",
              desc: "Achieve a noticeably dramatically brighter smile in just one visit with our advanced clinical-grade whitening systems that remove deep stubborn stains.",
              icon: "fa-sun",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="col-12 col-md-6"
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
                    className="text-secondary mb-4 flex-grow-1"
                    style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                  >
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="text-custom-teal fw-bold text-decoration-none mt-auto"
                  >
                    Request a Consultation &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
