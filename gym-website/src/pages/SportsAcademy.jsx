import SportsAcademyComponent from "../components/SportsAcademy/SportsAcademy";
import "./SportsAcademy.css";
import heroBanner from "../assets/Sportsimages/sports-banner.jpg";
import { FaArrowRight, FaPlay } from "react-icons/fa";

import silambam from "../assets/Sportsimages/silambam.png";
import archery from "../assets/Sportsimages/archery.png";
import karate from "../assets/Sportsimages/karate.png";
import cricket from "../assets/Sportsimages/cricket.png";
import athletics from "../assets/Sportsimages/athletics.png";
import badminton from "../assets/Sportsimages/badminton.png";
import athleteGroup from "../assets/Sportsimages/athlete-group.png"

import academyImage from "../assets/Sportsimages/academy.jpg";
import Navbar from "../components/Navbar/Navbar";
import TopBar from "../components/TopBar/TopBar";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SportsAcademy() {


    const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    mobile: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    bloodGroup: "",
    sport: "",
    admissionDate: "",
    address: ""
});

const [errors, setErrors] = useState({});

const [previewImage, setPreviewImage] = useState(null);

const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));

};
const handleDOB = (e) => {

    const dob = e.target.value;

    const birth = new Date(dob);

    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {

        age--;

    }

    setFormData((prev) => ({
        ...prev,
        dob,
        age
    }));

};

const handleSportChange = (e) => {

    setFormData((prev) => ({
        ...prev,
        sport: e.target.value
    }));

};

const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setPreviewImage(URL.createObjectURL(file));

};

const handleSubmit = (e) => {

    e.preventDefault();

    let newErrors = {};

    if (!formData.studentName.trim()) {

        newErrors.studentName = "Student name is required";

    }

    if (!formData.guardianName.trim()) {

        newErrors.guardianName = "Father / Guardian name is required";

    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {

        newErrors.mobile = "Enter a valid mobile number";

    }

    if (!formData.dob) {

        newErrors.dob = "Select Date of Birth";

    }

    if (!formData.gender) {

        newErrors.gender = "Select Gender";

    }

    if (!formData.bloodGroup) {

        newErrors.bloodGroup = "Select Blood Group";

    }

    if (!formData.sport) {

        newErrors.sport = "Select Sport";

    }

    if (!formData.address.trim()) {

        newErrors.address = "Address is required";

    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

        navigate("/cta");

    }

};

    const navigate = useNavigate();

    const sports = [

{
id:1,
title:"Cricket",
image:cricket,
description:"Professional batting, bowling and match strategy training."
},

{
id:2,
title:"Archery",
image:archery,
description:"Improve focus, balance and accuracy with certified coaches."
},

{
id:3,
title:"Silambam",
image:silambam,
description:"Traditional martial art that builds strength and discipline."
},

{
id:4,
title:"Karate",
image:karate,
description:"Develop confidence, self-defense and physical fitness."
},

{
id:5,
title:"Athletics",
image:athletics,
description:"Running, endurance and speed development programs."
},

{
id:6,
title:"Badminton",
image:badminton,
description:"Professional shuttle coaching with tournament practice."
}

];
  return (

    <>

  
 {/*=========================================
 HERO SECTION V2
=========================================*/}

<section
    className="sports-hero"
    style={{ backgroundImage: `url(${heroBanner})` }}
>

    <div className="hero-overlay"></div>

    <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

            <span className="hero-badge">

                PROFESSIONAL SPORTS ACADEMY

            </span>

            <h1>

                BUILD

                <span> CHAMPIONS</span>

                <br />

                CREATE

                <span> FUTURES</span>

            </h1>

            <p>

                Experience world-class coaching, modern sports infrastructure,
                and professional athlete development programs designed to
                unlock your true potential.

            </p>

            <div className="hero-buttons">

                <button className="primary-btn"
                
                 onClick={() => navigate("/cta")}
                 >

                    Join Academy

                    <FaArrowRight />

                </button>

                <button className="secondary-btn">

                    <FaPlay />

                    Watch Video

                </button>

            </div>

            <div className="hero-stats">

                <div className="stat">

                    <h2>500+</h2>

                    <span>Students</span>

                </div>

                <div className="stat">

                    <h2>15+</h2>

                    <span>Sports</span>

                </div>

                <div className="stat">

                    <h2>50+</h2>

                    <span>Expert Coaches</span>

                </div>

            </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">
            {/* <img src={athleteGroup} alt="Athletes" /> */}
        </div>

    </div>

</section>




        {/* <SportsAcademyComponent /> */}

    {/*=========================================
 SPORTS PROGRAMS
=========================================*/}

<section className="sports-programs">

    <div className="sports-heading">

        <span>OUR SPORTS</span>

        <h2>

            Explore Our

            <span> Sports Programs</span>

        </h2>

        <p>

            Professional coaching designed to develop skills,
            confidence and championship-level performance.

        </p>

    </div>

    <div className="sports-grid">

        {sports.map((sport)=>{

            const className = sport.title.toLowerCase();

            return(

                <div
                    className={`sport-card ${className}`}
                    key={sport.id}
                >

                    <div className="sport-image">

                        <img
                            src={sport.image}
                            alt={sport.title}
                        />

                    </div>

                    <div className="sport-info">

                        <h3>

                            {sport.title}

                        </h3>

                        <p>

                            {sport.description}

                        </p>

                        {/* <button  
                         onClick={() => navigate("/cta")}
                         >

                            Learn More

                            <FaArrowRight/>

                        </button> */}

                    </div>

                </div>

            )

        })}

    </div>

</section>

<section className="academy-about">

    <div className="academy-wrapper">

        {/* LEFT */}

        <div className="academy-content">

            <span>

                WHY CHOOSE US

            </span>

            <h2>

                Become The Athlete
                <br/>

                <strong>You've Always Dreamed Of</strong>

            </h2>

            <p>

                Our academy combines expert coaching,
                world-class infrastructure and scientific
                athlete development to help every student
                achieve their maximum potential.

            </p>

            <div className="academy-features">

                <div>

                    ✔ Certified Coaches

                </div>

                <div>

                    ✔ Modern Infrastructure

                </div>

                <div>

                    ✔ Individual Athlete Tracking

                </div>

                <div>

                    ✔ National Tournament Exposure

                </div>

                <div>

                    ✔ Fitness & Nutrition

                </div>

                <div>

                    ✔ Performance Analytics

                </div>

            </div>

            <button
              onClick={() => navigate("/cta")}
              >

                Join Academy

                <FaArrowRight/>

            </button>

        </div>

        {/* RIGHT */}

        <div className="academy-image">

            <img

            src={academyImage}

            alt="academy"

            />

            <div className="experience-box">

                <h2>

                    15+

                </h2>

                <span>

                    Years Experience

                </span>

            </div>

        </div>

    </div>

</section>



{/*=========================================
ACADEMY VALUES
=========================================*/}

{/* <section className="academy-values">

    <div className="values-heading">

        <span>OUR CORE VALUES</span>

        <h2>

            Building Champions With

            <span> Strong Values</span>

        </h2>

        <p>

            Every athlete is trained with discipline,
            dedication and determination to achieve
            excellence both on and off the field.

        </p>

    </div>

    <div className="values-grid">

        <div className="value-card">

            <div className="value-number">

                01

            </div>

            <h3>

                Discipline

            </h3>

            <p>

                Discipline builds consistency,
                respect and responsibility in
                every athlete.

            </p>

        </div>

        <div className="value-card">

            <div className="value-number">

                02

            </div>

            <h3>

                Dedication

            </h3>

            <p>

                We encourage athletes to stay
                committed towards continuous
                learning and improvement.

            </p>

        </div>

        <div className="value-card">

            <div className="value-number">

                03

            </div>

            <h3>

                Determination

            </h3>

            <p>

                Every challenge becomes an
                opportunity through hard work
                and determination.

            </p>

        </div>

    </div>

</section> */}


{/*=========================================
ADMISSION SECTION
=========================================*/}

<section className="sports-admission">

    <div className="admission-title">

        <span>

            ADMISSION OPEN 2026

        </span>

        <h2>

            Sports Academy

            <span> Registration</span>

        </h2>

        <p>

            Complete the admission form below to join our academy.

        </p>

    </div>

    <div className="admission-container">

        {/* LEFT SIDE */}

        <div className="registration-form">

            <div className="form-header">

                <h3>

                    Student Admission Form

                </h3>

                <p>

                    Fill all mandatory fields carefully.

                </p>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="photo-upload">

                    <div className="photo-box">

                        <img
                            src={previewImage || "/images/avatar.png"}
                            alt="Student"
                        />

                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />

                </div>

                <div className="form-row">

                    <div className="sa-form-group">

                        <label>

                            Student Name <span>*</span>

                        </label>

                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Enter Student Name"
                        />

                        {

                            errors.studentName &&

                            <p className="error">

                                {errors.studentName}

                            </p>

                        }

                    </div>

                    <div className="sa-form-group">

                        <label>

                            Father / Guardian Name <span>*</span>

                        </label>

                        <input
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            placeholder="Enter Father / Guardian Name"
                        />

                        {

                            errors.guardianName &&

                            <p className="error">

                                {errors.guardianName}

                            </p>

                        }

                    </div>

                </div>

                <div className="form-row">

                    <div className="sa-form-group">

                        <label>

                            Mobile Number <span>*</span>

                        </label>

                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="9876543210"
                        />

                        {

                            errors.mobile &&

                            <p className="error">

                                {errors.mobile}

                            </p>

                        }

                    </div>

                    <div className="sa-form-group">

                        <label>

                            Email Address

                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                        />

                    </div>

                </div>
                                <div className="form-row">

                    <div className="sa-form-group">

                        <label>

                            Date Of Birth <span>*</span>

                        </label>

                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleDOB}
                        />

                        {

                            errors.dob &&

                            <p className="error">

                                {errors.dob}

                            </p>

                        }

                    </div>

                    <div className="sa-form-group">

                        <label>

                            Age

                        </label>

                        <input
                            type="text"
                            value={formData.age}
                            readOnly
                        />

                    </div>

                </div>

                <div className="form-row">

                    <div className="sa-form-group">

                        <label>

                            Gender <span>*</span>

                        </label>

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >

                            <option value="">

                                Select Gender

                            </option>

                            <option value="Male">

                                Male

                            </option>

                            <option value="Female">

                                Female

                            </option>

                            <option value="Other">

                                Other

                            </option>

                        </select>

                        {

                            errors.gender &&

                            <p className="error">

                                {errors.gender}

                            </p>

                        }

                    </div>

                    <div className="sa-form-group">

                        <label>

                            Blood Group <span>*</span>

                        </label>

                        <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                        >

                            <option value="">

                                Select Blood Group

                            </option>

                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>

                        </select>

                        {

                            errors.bloodGroup &&

                            <p className="error">

                                {errors.bloodGroup}

                            </p>

                        }

                    </div>

                </div>

                <div className="form-row">

                    <div className="sa-form-group">

                        <label>

                            Select Sport <span>*</span>

                        </label>

                        <select
                            name="sport"
                            value={formData.sport}
                            onChange={handleSportChange}
                        >

                            <option value="">

                                Choose Sport

                            </option>

                            <option value="Cricket">

                                Cricket

                            </option>

                            <option value="Archery">

                                Archery

                            </option>

                            <option value="Silambam">

                                Silambam

                            </option>

                            <option value="Karate">

                                Karate

                            </option>
                                                        <option value="Athletics">

                                Athletics

                            </option>

                            <option value="Badminton">

                                Badminton

                            </option>

                        </select>

                        {

                            errors.sport &&

                            <p className="error">

                                {errors.sport}

                            </p>

                        }

                    </div>

                    <div className="sa-form-group">

                        <label>

                            Admission Date

                        </label>

                        <input
                            type="date"
                            name="admissionDate"
                            value={formData.admissionDate}
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <div className="sa-form-group">

                    <label>

                        Residential Address <span>*</span>

                    </label>

                    <textarea
                        rows="4"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Complete Address"
                    ></textarea>

                    {

                        errors.address &&

                        <p className="error">

                            {errors.address}

                        </p>

                    }

                </div>

                <button
                    type="submit"
                    className="register-btn"
                >

                    Register Now

                    <FaArrowRight />

                </button>

            </form>

        </div>

        {/* RIGHT SIDE */}

        <div className="fee-card">

            {/* <div className="fee-header">

                <h3>

                    Payment Details

                </h3>

                <p>

                    Sports Academy Fee Structure

                </p>

            </div>

            <div className="payment-details">

                <div className="payment-item">

                    <span>

                        Registration Fee

                    </span>

                    <strong>

                        ₹1000

                    </strong>

                </div>

                <div className="payment-item">

                    <span>

                        Monthly Coaching Fee

                    </span>

                    <strong>

                        ₹1500

                    </strong>

                </div>

                <div className="payment-item">

                    <span>

                        Uniform / Jersey

                    </span>

                    <strong>

                        ₹500

                    </strong>

                </div>

                <div className="payment-item">

                    <span>

                        Academy ID Card

                    </span>

                    <strong>

                        ₹100

                    </strong>

                </div>

                <div className="payment-item total">

                    <span>

                        Total Amount

                    </span>

                    <strong>

                        ₹3100

                    </strong>

                </div>

            </div> */}

                        <h4 className="fee-title">

                Monthly Fee Structure

            </h4>

            <div className="fee-list">

                <div className="fee-row">

                    <span>🏏 Cricket</span>

                    <strong>₹1500 / Month</strong>

                </div>

                <div className="fee-row">

                    <span>🏹 Archery</span>

                    <strong>₹1200 / Month</strong>

                </div>

                <div className="fee-row">

                    <span>🥋 Silambam</span>

                    <strong>₹700 / Month</strong>

                </div>

                <div className="fee-row">

                    <span>🥋 Karate</span>

                    <strong>₹700 / Month</strong>

                </div>

                <div className="fee-row">

                    <span>🏃 Athletics</span>

                    <strong>₹600 / Month</strong>

                </div>

                <div className="fee-row">

                    <span>🏸 Badminton</span>

                    <strong>₹800 / Month</strong>

                </div>

            </div>

            <div className="important-note">

                <h4>

                    Important Instructions

                </h4>

                <ul>

                    <li>

                        Admission fee is payable only once during registration.

                    </li>

                    <li>

                        Monthly coaching fee should be paid on or before the 5th of every month.

                    </li>

                    <li>

                        Students should wear the academy uniform during every training session.

                    </li>

                    <li>

                        Parents / Guardians should immediately inform the academy about any medical condition.

                    </li>

                    <li>

                        Students must maintain discipline and regular attendance.

                    </li>

                    <li>

                        Fees once paid are non-refundable and non-transferable.

                    </li>

                </ul>

            </div>

        </div>

    </div>

</section>

{/*=========================================
ACADEMY VALUES
=========================================*/}

<section className="academy-values-bottom">

    <div className="value-card">

        <span>01</span>

        <h3>

            Discipline

        </h3>

        <p>

            Discipline is the foundation of every successful athlete.
            We encourage punctuality, consistency and respect in every training session.

        </p>

    </div>

    <div className="value-card">

        <span>02</span>

        <h3>

            Dedication

        </h3>

        <p>

            Dedicated athletes improve every day through continuous
            learning, hard work and commitment towards their goals.

        </p>

    </div>

    <div className="value-card">

        <span>03</span>

        <h3>

            Determination

        </h3>

        <p>

            Determination helps athletes overcome challenges,
            build confidence and achieve excellence in every competition.

        </p>

       </div>

</section>

{/*=========================================
ACADEMY LOCATION
=========================================*/}

<section className="academy-location">

    <div className="location-container">

        <div className="location-icon">
            <i className="bi bi-geo-alt-fill"></i>
        </div>

        <div className="location-content">

            <span className="location-tag">
                VISIT OUR ACADEMY
            </span>

            <h2>
                Ochre &90s
                <span> Sports Academy</span>
            </h2>

            <p>
                Nearby Old Kaliappanadar School,
                56 Colony, Amman Nagar Road
            </p>

        </div>

        <a
            href="https://www.google.com/maps/search/?api=1&query=Ochre%20%2690s%20Sports%20Academy%20Nearby%20Old%20Kaliappanadar%20School%2056%20Colony%20Amman%20Nagar%20Road"
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
        >
            <i className="bi bi-map"></i>
            View Location
        </a>

    </div>

</section>
    </>
);
}

export default SportsAcademy;