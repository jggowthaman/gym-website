import "./Stats.css";

function Stats() {
  const stats = [
    {
      icon: "bi-trophy-fill",
      number: "12+",
      title: "Years Experience",
    },
    {
      icon: "bi-people-fill",
      number: "8K+",
      title: "Active Members",
    },
    {
      icon: "bi-patch-check-fill",
      number: "45+",
      title: "Certified Trainers",
    },
    {
      icon: "bi-activity",
      number: "250+",
      title: "Modern Equipment",
    },
    {
      icon: "bi-shield-check",
      number: "100%",
      title: "Safe & Clean",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-wrapper">
        {stats.map((item, index) => (
          <div className="stats-item" key={index}>
            <div className="stats-icon">
              <i className={`bi ${item.icon}`}></i>
            </div>

            <div className="stats-text">
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;