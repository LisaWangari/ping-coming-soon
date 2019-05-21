import React from "react";

import dashboard from "../../images/illustration-dashboard.png";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboardSection">
      <img src={dashboard} alt="Dashboard Logo" className="dashboardImg" />
    </section>
  );
};

export default Dashboard;
