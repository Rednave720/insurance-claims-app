import { toast } from 'react-hot-toast';
import React, { useState } from 'react';
import { saveClaim } from '../services/firebaseConfig'; // you'll create this next

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    policyNumber: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.policyNumber || !formData.description) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      await saveClaim(formData);
      toast.success("Claim submitted successfully!");

      setFormData({ name: '', email: '', policyNumber: '', description: '' });
    } catch (error) {
      console.error("Error saving claim:", error);
    }
  };

  return (
<div className="w-100" style={{ maxWidth: '600px' }}>   
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <h2 className="text-center mb-4">Submit a Claim</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label>Policy Number</label>
          <input type="text" name="policyNumber" className="form-control" value={formData.policyNumber} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Claim</button>
      </form>
    </div>
  </div>
</div>
  );
};

export default ClaimForm;
// This component is a form for submitting insurance claims. It uses React's useState hook to manage form data.
// The form includes fields for name, email, policy number, and a description of the claim.
// When the form is submitted, it calls the saveClaim function to save the data to Firebase.
// The form also includes basic validation to ensure all fields are filled out before submission.
// The form is styled using Bootstrap classes for a clean and responsive design.
// The form is wrapped in a Bootstrap container for proper spacing and alignment.
// The form includes a submit button that triggers the handleSubmit function when clicked.
// The handleChange function updates the form data state as the user types in the input fields.
// The form is designed to be user-friendly and provides feedback upon successful submission.
