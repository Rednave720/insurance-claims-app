import React, { useState, useEffect } from 'react';
import { getClaims } from '../services/firebaseConfig'; // again, you'll create this next

const ClaimsList = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const data = await getClaims();
        if (data) {
          const claimsArray = Object.entries(data).map(([id, claim]) => ({ id, ...claim }));
          setClaims(claimsArray);
        }
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };
    fetchClaims();
  }, []);

  return (
<div className="w-100" style={{ maxWidth: '800px' }}>
  <h2 className="text-center mb-4">Submitted Claims</h2>
  {claims.length === 0 ? (
    <p className="text-center">No claims submitted yet.</p>
  ) : (
    <div className="row justify-content-center">
      {claims.map((claim) => (
        <div className="col-md-6 col-lg-5 mb-4" key={claim.id}>
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{claim.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{claim.email}</h6>
              <p className="card-text flex-grow-1">
                <strong>Policy #:</strong> {claim.policyNumber}<br/>
                <strong>Description:</strong> {claim.description}
              </p>
              <div className="mt-3">
                <span className="badge bg-warning text-dark">Pending</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default ClaimsList;
// This component fetches and displays the list of claims from Firebase.
// It uses the `useEffect` hook to fetch data when the component mounts.
// The claims are displayed in a card format using Bootstrap classes.
// The component also handles the case when no claims are available by displaying a message.
// The `getClaims` function fetches the claims from Firebase and returns them as an array.