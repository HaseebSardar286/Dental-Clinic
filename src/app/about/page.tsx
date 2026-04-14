"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="py-5 my-5">
      <div className="container">
        {/* Our Mission */}
        <div className="row align-items-center g-5 mb-5 pb-5 border-bottom border-light">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-12 col-lg-6"
          >
            <div className="d-inline-block px-3 py-1 bg-custom-teal bg-opacity-10 text-custom-teal rounded-pill small fw-bold text-uppercase mb-4">
              Our Mission
            </div>
            <h1
              className="display-4 fw-bold mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              We prioritize finding the <br />
              <span className="text-custom-teal">best solution for you.</span>
            </h1>
            <div className="lead text-secondary">
              <p className="mb-4">
                At Danbury Bright Smiles, we believe that a visit to the dentist
                should be a positive, empowering experience. We've completely
                reimagined dental care by blending advanced clinical technology
                with a serene, modern environment.
              </p>
              <p>
                From routine cleanings to complete smile transformations, our
                dedicated clinical team is committed to delivering personalized
                care that focuses on your comfort, your goals, and your
                long-term health.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="col-12 col-lg-6 position-relative"
          >
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070"
              alt="Danbury Bright Smiles Team"
              className="img-fluid rounded-4 shadow-lg border border-white border-5 w-100"
              style={{ objectFit: "cover", minHeight: "400px" }}
            />
          </motion.div>
        </div>

        {/* Our Team */}
        <div className="row align-items-center g-5 pt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="col-12 col-lg-5 order-2 order-lg-1"
          >
            <img
              src="/Dr_ Anusha Atique.avif"
              alt="Dr. Anusha Atique, DDS"
              className="img-fluid rounded-4 shadow-lg border border-white border-5 w-100"
              style={{ objectFit: "cover", aspectRatio: "3/4" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-12 col-lg-7 order-1 order-lg-2"
          >
            <div className="d-inline-block px-3 py-1 bg-custom-teal bg-opacity-10 text-custom-teal rounded-pill small fw-bold text-uppercase mb-4">
              Our Team
            </div>
            <h2 className="display-5 fw-bold mb-2 text-dark">
              Dr. Anusha Atique, DDS
            </h2>
            <h3 className="h4 text-custom-teal fw-semibold mb-4">
              General Dentist
            </h3>
            <div
              className="text-secondary"
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              <p className="mb-4">
                Dr. Anusha Atique is a dedicated general dentist in Danbury, CT
                (06810) who provides exceptional dental care to patients of all
                ages, from young children to seniors. With a patient-centered
                approach, she blends her expertise with genuine compassion to
                ensure every visit is stress-free and comfortable. Her priority
                is to exceed patient expectations by delivering outstanding
                dental experiences.
              </p>
              <p>
                Known for her warm and approachable nature, Dr. Atique takes the
                time to listen to her patients' concerns, offering personalized
                treatment solutions that best fit their needs. She is dedicated
                to enhancing oral health, restoring confidence through beautiful
                smiles, and promoting the overall well-being of her patients.
                Believing that top-quality dentistry comes from continuous
                education, advanced techniques, and a supportive, caring
                environment, she strives to create a positive and reassuring
                atmosphere for everyone who walks through the doors of Danbury
                Bright Smiles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
