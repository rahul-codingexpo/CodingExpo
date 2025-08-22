import React, { useEffect, useState } from "react";
import "./leads.css";
import API from "../../BaseApi";
const Leads = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await API.get("/leads");
        setLeadsData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leads:", error);
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="leads-container">
      <h2 className="leads-title">Leads</h2>

      {loading ? (
        <p>Loading leads...</p>
      ) : (
        <div className="table-wrapper">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {leadsData.length > 0 ? (
                leadsData.map((lead, index) => (
                  <tr key={lead._id || index}>
                    <td>{lead.name}</td>
                    <td className="blue-email">{lead.email}</td>
                    <td>{lead.contact}</td>
                    <td>{new Date(lead.createdAt).toLocaleString()}</td>
                    <td>{lead.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No leads available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leads;
