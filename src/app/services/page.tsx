"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faTooth,
  faShieldHalved,
  faMicroscope,
  faTeeth,
  faChild,
  faFaceSmileBeam,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "fa-wand-magic-sparkles": faWandMagicSparkles,
  "fa-tooth": faTooth,
  "fa-shield-halved": faShieldHalved,
  "fa-microscope": faMicroscope,
  "fa-teeth": faTeeth,
  "fa-child": faChild,
  "fa-face-smile-beam": faFaceSmileBeam,
};

const services = [
  {
    title: "Cosmetic Dentistry",
    desc: "Veneers, Whitening, Smile Makeovers",
    path: "/services/cosmetic-dentistry",
    icon: "fa-wand-magic-sparkles",
  },
  {
    title: "Periodontics Dentistry",
    desc: "Gum health, disease treatment, and maintenance",
    path: "/services/periodontics",
    icon: "fa-tooth",
  },
  {
    title: "Oral Surgery",
    desc: "Implants, Wisdom Teeth, Extraction",
    path: "/services/oral-surgery",
    icon: "fa-shield-halved",
  },
  {
    title: "Endodontics Dentistry",
    desc: "Root Canal therapy for tooth preservation",
    path: "/services/endodontics",
    icon: "fa-microscope",
  },
  {
    title: "Prosthodontics Dentistry",
    desc: "Crowns, bridges, and full mouth restorations",
    path: "/services/prosthodontics",
    icon: "fa-teeth",
  },
  {
    title: "Pediatrics Dentistry",
    desc: "Gentle and fun dental care for children",
    path: "/services/pediatrics",
    icon: "fa-child",
  },
  {
    title: "Invisalign®",
    desc: "Clear aligners for a straighter smile",
    path: "/invisalign",
    icon: "fa-face-smile-beam",
  },
];

export default function ServicesPage() {
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
          <h1
            className="display-4 fw-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our <span className="text-custom-teal">Services</span>
          </h1>
          <p className="lead text-secondary mb-0">
            From preventive cleanings to advanced restorative procedures, we
            provide comprehensive, state-of-the-art dental solutions tailored to
            your unique needs.
          </p>
        </motion.div>

        <div className="row g-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <Link href={s.path} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm p-4 text-start rounded-4 hover-shadow transition">
                  <div className="card-body">
                    <div
                      className="bg-custom-teal bg-opacity-10 text-white rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[s.icon]}
                        className="fs-3"
                      />
                    </div>
                    <h3 className="h4 fw-bold mb-3 text-dark">{s.title}</h3>
                    <p className="text-secondary mb-4">{s.desc}</p>
                    <div className="text-custom-teal fw-bold d-flex align-items-center gap-2 mt-auto">
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
