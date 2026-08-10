import "./Programs.css";

import weight from "../../assets/weight-training.jpg";
import cardio from "../../assets/cardio-fitness.jpg";
import functional from "../../assets/yoga.jpg";
import crossfit from "../../assets/crossfit.jpg";
import boxing from "../../assets/boxing.jpg";
import  personal from "../../assets/nutrition.jpg";
import { useNavigate } from "react-router-dom";

function Programs() { 

     const navigate = useNavigate();

    const programs = [

        {
            image: weight,
            icon: "bi bi-bar-chart-fill",
            title: "Weight Training",
            description: "Build strength, increase muscle mass and unlock your full potential."
        },

        {
            image: cardio,
            icon: "bi bi-heart-pulse-fill",
            title: "Cardio Fitness",
            description: "Improve endurance, burn calories and strengthen your heart."
        },

        {
            image: functional,
            icon: "bi bi-activity",
            title: "Functional Training",
            description: "Build strength, Enhance mobility with dynamic full-body workouts."
        },

        {
            image: crossfit,
            icon: "bi bi-lightning-charge-fill",
            title: "CrossFit",
            description: "High-intensity functional workouts designed for maximum performance."
        },

        {
            image: boxing,
            icon: "bi bi-shield-fill-check",
            title: "Boxing",
            description: "Boost speed, coordination, confidence and overall fitness."
        },

        {
            image:  personal,
            icon: "bi bi-person-check-fill",
            title: "Personal Training",
            description: "Personalized training for stronger, healthier and confident you."
        }

    ];

    return (

        <section className="programs">

            <div className="programs-container">

                <div className="section-title">

                    <span>
                        OUR PROGRAMS
                    </span>

                    <h2>

                        Train Smarter.
                        <span> Transform Faster.</span>

                    </h2>

                    <p>

                        Discover professionally designed fitness programs
                        tailored for beginners, athletes, and fitness enthusiasts.

                    </p>

                </div>

                <div className="programs-grid">

                    {

                        programs.map((program, index) => (

                            <div
                                className="program-card"
                                key={index}
                            >

                                <div className="program-image">

                                    <img
                                        src={program.image}
                                        alt={program.title}
                                    />

                                </div>

                                <div className="program-content">

                                    <div className="program-icon">

                                        <i className={program.icon}></i>

                                    </div>

                                    <h3>

                                        {program.title}

                                    </h3>

                                    <p>

                                        {program.description}

                                    </p>

                                        {/* <button
                                            className="program-btn"
                                            onClick={() => navigate("/cta")}
                                        >
                                            Learn More
                                            <i className="bi bi-arrow-right"></i>
                                        </button> */}

                                </div>

                            </div>

                        ))

                    }

                </div>

                {/* <div className="programs-button">
                    <button
                        onClick={() => navigate("/cta")}
                    >
                        View All Programs
                        <i className="bi bi-arrow-right"></i>
                    </button>

                </div> */}

            </div>

        </section>

    );

}

export default Programs;