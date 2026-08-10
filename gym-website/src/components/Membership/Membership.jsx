import "./Membership.css";

import {
  BsCheckCircleFill,
  BsArrowRight,
  BsStarFill,
} from "react-icons/bs";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "₹1,999",
    duration: "/ Month",
    featured: false,
    features: [
      "Gym Access",
      "Basic Equipment",
      "Locker Room",
      "1 Group Class",
    ],
  },

  {
    id: 2,
    name: "Standard Plan",
    price: "₹2,999",
    duration: "/ Month",
    featured: true,
    badge: "POPULAR",
    features: [
      "Gym Access",
      "All Equipment",
      "Locker Room",
      "3 Group Classes",
      "Body Composition Analysis",
    ],
  },

  {
    id: 3,
    name: "Premium Plan",
    price: "₹4,999",
    duration: "/ Month",
    featured: false,
    features: [
      "Gym Access",
      "All Equipment",
      "Locker Room",
      "Unlimited Group Classes",
      "2 Personal Training Sessions",
    ],
  },
];

function Membership() {
  return (
    <section className="membership">

      <div className="membership-container">

        {/* Section Heading */}

        <div className="section-title">

          <span>Membership Plans</span>

          <h2>
            Choose Your <span>Fitness Journey</span>
          </h2>

          <p>
            Whether you're just getting started or training like an athlete,
            we've got a membership designed to help you reach your goals.
          </p>

        </div>

        {/* Cards */}

        <div className="membership-grid">

          {plans.map((plan) => (

            <div
  key={plan.id}
  className={`membership-card ${plan.featured ? "featured" : ""}`}
>

  {/* Shine Effect */}
  <div className="shine"></div>

  {plan.featured && (
    <div className="popular-badge">
      {plan.badge}
    </div>
  )}

  <h3>{plan.name}</h3>

              <div className="price">

                <h2>{plan.price}</h2>

                <span>{plan.duration}</span>

              </div>

              <ul>

                {plan.features.map((item, index) => (

                  <li key={index}>

                    <BsCheckCircleFill className="check-icon" />

                    {item}

                  </li>

                ))}

              </ul>

             <a href="#registration" className="join-btn">
  Join Now
  <BsArrowRight />
</a>

            </div>

          ))}

          {/* Testimonial Card */}

          <div className="testimonial-card">

            <h3>What Our Members Say</h3>

            <div className="quote">
              “
            </div>

            <p>
              Forge Athletics completely transformed my lifestyle.
              The trainers are supportive, the atmosphere is motivating,
              and every workout pushes me to become stronger.
            </p>

            <div className="member">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="member"
              />

              <div>

                <h4>Ravi Kumar</h4>

                <span>Member</span>

              </div>

            </div>

            <div className="rating">

              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Membership;