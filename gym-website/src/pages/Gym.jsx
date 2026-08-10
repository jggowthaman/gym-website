import HeroAthlete from "../assets/gympage/hero-athlete.png";
import AboutImage from "../assets/gympage/about.jpg";
import Programs from "../components/Programs/Programs";
import "./Gym.css";

import {
  FaArrowRight,
  FaPlay,
  FaDumbbell,
  FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Gym() {
  const navigate = useNavigate();

  return (
    <>
      {/*=========================================
      HERO SECTION
      =========================================*/}

      <section className="gym-hero">
        <div className="hero-overlay"></div>

        <div className="hero-container">
          {/* LEFT */}

          <div className="hero-left">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              PREMIUM FITNESS CLUB
            </span>

            <h1>
              TRANSFORM YOUR
              <span> BODY </span>
              ELEVATE YOUR
              <span> LIFESTYLE</span>
            </h1>

            <p>
              Train with certified coaches, world-class equipment and
              personalized fitness programs designed to help you build
              strength, improve endurance and unlock your full potential.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/cta")}
              >
                Join Now
                <FaArrowRight />
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/cta")}
              >
                <FaPlay />
                Book Free Trial
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <h2>10K+</h2>
                <span>Active Members</span>
              </div>

              <div className="stat-card">
                <h2>25+</h2>
                <span>Expert Trainers</span>
              </div>

              <div className="stat-card">
                <h2>12+</h2>
                <span>Years Experience</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src={HeroAthlete}
                alt="Gym Athlete"
                className="hero-athlete"
              />
                            {/* Floating Card 1 */}

              <div className="floating-card card-one">
                <FaDumbbell />

                <div>
                  <h4>Premium</h4>
                  <span>Equipment</span>
                </div>
              </div>

              {/* Floating Card 2 */}

              <div className="floating-card card-two">
                <FaUsers />

                <div>
                  <h4>Personal</h4>
                  <span>Training</span>
                </div>
              </div>

              {/* Floating Card 3 */}

              <div className="floating-card card-three">
                <FaAward />

                <div>
                  <h4>Certified</h4>
                  <span>Coaches</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/*=========================================
      PROGRAMS SECTION
      =========================================*/}

      <Programs />

      {/*=========================================
      ABOUT SECTION
      =========================================*/}

      <section className="gym-about">
        <div className="about-container">
          {/* LEFT */}

          <div className="about-left">
            <div className="about-image">
              <img
                src={AboutImage}
                alt="About Gym"
              />

              <div className="experience-card">
                <h2>12+</h2>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="about-right">
            <span className="section-tag">
              ABOUT OUR GYM
            </span>

            <h2>
              Where Passion Meets
              <span> Performance.</span>
            </h2>

            <p>
              We believe fitness is more than lifting weights.
              Our mission is to create an inspiring environment
              where everyone can improve their strength,
              confidence, and overall well-being through
              expert guidance and world-class facilities.
            </p>

            <div className="about-features"></div>
                          <div className="feature-item">
                <FaCheckCircle />
                <span>Certified Professional Trainers</span>
              </div>

              <div className="feature-item">
                <FaCheckCircle />
                <span>Modern Imported Equipment</span>
              </div>

              <div className="feature-item">
                <FaCheckCircle />
                <span>Personalized Workout Programs</span>
              </div>

              <div className="feature-item">
                <FaCheckCircle />
                <span>Nutrition & Lifestyle Guidance</span>
              </div>
            </div>

            <div className="about-stats">
              <div>
                <h3>10K+</h3>
                <span>Happy Members</span>
              </div>

              <div>
                <h3>25+</h3>
                <span>Expert Coaches</span>
              </div>

              <div>
                <h3>15+</h3>
                <span>Fitness Programs</span>
              </div>
            </div>

            <button
              className="about-btn"
              onClick={() => navigate("/cta")}
            >
              Join Today
              <FaArrowRight />
            </button>
          </div>
      </section>
    </>
  );
}

export default Gym;