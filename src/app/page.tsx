"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faPhone,
  faCheckCircle,
  faTooth,
  faWandMagicSparkles,
  faShieldHalved,
  faMicroscope,
  faTeeth,
  faChild,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const iconMap: Record<string, any> = {
  "fa-tooth": faTooth,
  "fa-wand-magic-sparkles": faWandMagicSparkles,
  "fa-shield-halved": faShieldHalved,
  "fa-microscope": faMicroscope,
  "fa-teeth": faTeeth,
  "fa-child": faChild,
};

export default function DenburyHome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Appointment Request",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        utm_source: localStorage.getItem("utm_source") || "Direct",
        utm_medium: localStorage.getItem("utm_medium") || "",
        utm_campaign: localStorage.getItem("utm_campaign") || "",
      };

      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success(
          "Thank you! We'll reach out to schedule your visit soon.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Appointment Request",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please call us directly.");
      }
    } catch (error) {
      toast.error("Could not connect. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-5 my-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center mb-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-custom-teal bg-opacity-10 text-white rounded-pill small fw-bold text-uppercase mb-4">
                <FontAwesomeIcon icon={faStar} className="text-white fs-6" />{" "}
                Voted Best Dental Care 2024
              </div>
              <h1
                className="display-3 fw-bold mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Modern dentistry for <br />
                <span className="text-custom-teal">your bright future.</span>
              </h1>
              <p className="lead text-secondary mb-5">
                Experience gentle, sophisticated dental care in the heart of
                Denbury. We combine advanced technology with a personal touch to
                give you a smile you'll love.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link
                  href="/contact"
                  className="btn btn-custom-teal text-white btn-lg rounded-pill fw-bold shadow d-flex align-items-center justify-content-center gap-2 px-4 py-3"
                >
                  Get Started{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="fs-5" />
                </Link>
                <a
                  href="tel:+14752379011"
                  className="btn btn-outline-dark btn-lg rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 px-4 py-3"
                >
                  <FontAwesomeIcon icon={faPhone} className="fs-5" /> Call Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="col-12 col-lg-6 position-relative"
            >
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2070"
                alt="Modern Dental Office"
                className="img-fluid rounded-4 shadow-lg border border-white border-5"
                style={{ objectFit: "cover", aspectRatio: "4/3" }}
              />
              <div
                className="position-absolute bottom-0 start-0 bg-white p-4 rounded-3 shadow mb-4 ms-4 d-flex align-items-center gap-3"
                style={{ transform: "translateY(25%)" }}
              >
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="fs-4" />
                </div>
                <div>
                  <div className="small text-secondary fw-bold text-uppercase">
                    Next Available
                  </div>
                  <div className="fw-bold text-dark">Tomorrow, 9:00 AM</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-light">
        <div className="container text-center py-5">
          <h2 className="display-5 fw-bold mb-3">Premium Services</h2>
          <p className="text-secondary mb-5 lead">
            We provide comprehensive dental solutions using the latest medical
            advancements.
          </p>

          <div className="row g-4">
            {[
              {
                title: "General Dentistry",
                desc: "Routine cleaning, fillings, and preventative care to keep your smile healthy year-round.",
                link: "/services",
                icon: "fa-tooth",
              },
              {
                title: "Cosmetic Procedures",
                desc: "Teeth whitening, veneers, and smile makeovers designed to boost your confidence.",
                link: "/services/cosmetic-dentistry",
                icon: "fa-wand-magic-sparkles",
              },
              {
                title: "Dental Implants",
                desc: "Permanent, natural-looking solutions for missing teeth using advanced surgical techniques.",
                link: "/services/oral-surgery",
                icon: "fa-shield-halved",
              },
              {
                title: "Endodontics",
                desc: "Root Canal therapy for tooth preservation to save your natural teeth.",
                link: "/services/endodontics",
                icon: "fa-microscope",
              },
              {
                title: "Prosthodontics",
                desc: "Crowns, bridges, and full mouth restorations designed for incredible durability.",
                link: "/services/prosthodontics",
                icon: "fa-teeth",
              },
              {
                title: "Pediatrics",
                desc: "Gentle and fun dental care helping them build incredibly positive habits.",
                link: "/services/pediatrics",
                icon: "fa-child",
              },
            ].map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                key={i}
                className="col-12 col-md-4"
              >
                <div className="card h-100 border-0 shadow-sm p-4 text-start rounded-4 hover-shadow transition">
                  <div className="card-body">
                    <div
                      className="bg-custom-teal bg-opacity-10 text-white rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "56px", height: "56px" }}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[s.icon]}
                        className="fs-3 "
                      />
                    </div>
                    <h3 className="h4 fw-bold mb-3">{s.title}</h3>
                    <p className="text-secondary mb-4">{s.desc}</p>
                    <Link
                      href={s.link}
                      className="text-custom-teal fw-bold text-decoration-none d-flex align-items-center gap-2"
                    >
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="col-12 col-lg-5"
            >
              <img
                src="/Dr_ Anusha Atique.avif"
                alt="Dr. Anusha Atique, DDS"
                className="img-fluid rounded-4 shadow border border-white border-5 w-100"
                style={{ objectFit: "cover", aspectRatio: "3/4" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="col-12 col-lg-7 text-start"
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-custom-teal bg-opacity-10 text-white rounded-pill small fw-bold text-uppercase mb-4">
                Top Rated Dentist
              </div>
              <h2 className="display-5 fw-bold mb-3">Dr. Anusha Atique</h2>
              <p className="lead text-secondary mb-4">
                Meet our experienced dentist, Dr. Anusha Atique, supported by a
                compassionate clinical team dedicated to finding the best
                solutions. More importantly, we prioritize finding the best
                solution for you.
              </p>
              <Link
                href="/about"
                className="btn btn-outline-custom-teal btn-lg rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-2 px-4 py-3"
              >
                About Me <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plan Banner */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-custom-teal text-white p-5 p-md-5 rounded-4 shadow-lg position-relative overflow-hidden text-center"
          >
            <div
              className="position-absolute top-0 end-0 bg-white opacity-25 rounded-circle blur-effect"
              style={{
                width: "250px",
                height: "250px",
                filter: "blur(80px)",
                transform: "translate(30%, -30%)",
              }}
            ></div>
            <div className="position-relative z-1 py-md-4">
              <h2 className="display-5 fw-bold mb-3">
                No insurance? No problem.
              </h2>
              <p
                className="lead text-white opacity-75 mb-4 mx-auto"
                style={{ maxWidth: "700px" }}
              >
                Affordable dental care with our in-house savings plan — no
                deductibles, no waiting, just quality care.
              </p>
              <Link
                href="/patient-resources/membership-plan"
                className="btn btn-light text-dark btn-lg rounded-pill fw-bold shadow px-5 py-3"
              >
                Explore Saving Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container text-center py-5">
          <h2 className="display-5 fw-bold mb-3">
            Kind words from our patients
          </h2>
          <p className="text-secondary mb-5 lead">
            Don't just take our word for it—listen to what our patients have to
            say.
          </p>

          <div className="row g-4">
            {[
              {
                text: "Danbury Bright Smiles is fantastic! The office is clean, the staff is friendly, and they make you feel completely comfortable. Great care and attention to detail, I highly recommend them!",
                author: "Ron",
              },
              {
                text: "Had a great experience, the doctor was a professional and heard me out on all of my concerns. The dental assistant was also very nice.",
                author: "Carmin",
              },
              {
                text: "Wonderful family business with very kind, understanding, and professional staff. Great service that made me feel like I was in good hands at all times!",
                author: "Matheus",
              },
            ].map((t, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                key={i}
                className="col-12 col-md-4"
              >
                <div className="card h-100 border p-4 bg-light text-start rounded-4 hover-shadow transition">
                  <div className="card-body d-flex flex-column">
                    <div className="text-warning mb-3">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p
                      className="text-secondary flex-grow-1 lead"
                      style={{ fontSize: "1.05rem", fontStyle: "italic" }}
                    >
                      "{t.text}"
                    </p>
                    <h5 className="fw-bold text-dark mt-3 mb-0">
                      - {t.author}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-5 bg-dark text-white position-relative">
        <div className="container py-5 z-1 position-relative">
          <div className="row g-5 align-items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-12 col-lg-7"
            >
              <div className="bg-white text-dark p-4 p-md-5 rounded-4 shadow-lg border-0">
                <h2 className="display-6 fw-bold mb-4">
                  Ready for your{" "}
                  <span className="text-custom-teal">best smile yet?</span>
                </h2>
                <p className="text-secondary mb-4">
                  Fill out the form below and our care coordinator will reach
                  out to schedule your initial consultation. No commitment
                  required.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-bold text-secondary">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Cooper"
                        className="form-control form-control-lg bg-light border-0"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-bold text-secondary">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        className="form-control form-control-lg bg-light border-0"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="form-control form-control-lg bg-light border-0"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">
                      Preferred Treatment (Optional)
                    </label>
                    <select
                      className="form-select form-select-lg bg-light border-0 text-secondary"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option>Appointment Request</option>
                      <option>Dental Cleaning</option>
                      <option>Cosmetic Consultation</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold text-secondary">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your dental goals..."
                      className="form-control form-control-lg bg-light border-0"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="btn btn-custom-teal text-white btn-lg w-100 rounded-3 fw-bold shadow-sm py-3"
                  >
                    {isSubmitting ? "Requesting..." : "Send Request"}
                  </button>
                </form>
              </div>
            </motion.div>

            <div className="col-12 col-lg-5">
              <div className="ps-lg-5 lh-lg border-start border-secondary py-3">
                <div className="mb-5">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-custom-teal mb-3 fs-2"
                  />
                  <h4 className="h3 fw-bold mb-1">Our Location</h4>
                  <p className="text-light opacity-75">
                    57 North St, Suite 411 <br /> Danbury, CT 06810
                  </p>
                </div>
                <div className="mb-5">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-custom-teal mb-3 fs-2"
                  />
                  <h4 className="h3 fw-bold mb-1">Clinic Hours</h4>
                  <p className="text-light opacity-75">
                    Mon - Fri: 8:00 AM - 6:00 PM <br /> Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle border border-secondary d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} className="fs-5" />
                  </div>
                  <div
                    className="rounded-circle border border-secondary d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
