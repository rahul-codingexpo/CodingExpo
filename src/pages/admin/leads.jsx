import React from "react";
import "./leads.css";

const Leads = () => {
  const leadsData = [
    {
      id: 1,
      name: "Rahul Maurya",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      message: "Interested in your services.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 9123456789",
      message: "Need more details about pricing.",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@example.com",
      phone: "+91 9988776655",
      message: "Schedule a call for tomorrow.",
    },
  ];

  return (
    <div className="leads-container">
      <h2 className="leads-title">Leads</h2>
      <div className="table-wrapper">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td className="blue-email">{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
