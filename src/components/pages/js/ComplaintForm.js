import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const policeData = {
  'Western Province': {
    'Colombo Police Division': ['Colombo Central Police Station', 'Pettah Police Station', 'Slave Island Police Station', 'Fort Police Station'],
    'Kalutara Police Division': ['Kalutara Police Station', 'Panadura Police Station', 'Horana Police Station'],
    'Gampaha Police Division': ['Gampaha Police Station', 'Negombo Police Station', 'Katunayake Police Station']
  },
  'Central Province': {
    'Kandy Police Division': ['Kandy Police Station', 'Peradeniya Police Station', 'Katugastota Police Station'],
    'Matale Police Division': ['Matale Police Station', 'Dambulla Police Station'],
    'Nuwara Eliya Police Division': ['Nuwara Eliya Police Station', 'Hatton Police Station', 'Talawakele Police Station']
  },
  'Southern Province': {
    'Galle Police Division': ['Galle Police Station', 'Hikkaduwa Police Station', 'Ambalangoda Police Station'],
    'Matara Police Division': ['Matara Police Station', 'Akuressa Police Station', 'Weligama Police Station']
  },
  'Northern Province': {
    'Jaffna Police Division': ['Jaffna Police Station', 'Chavakachcheri Police Station', 'Point Pedro Police Station'],
    'Vavuniya Police Division': ['Vavuniya Police Station', 'Mannar Police Station', 'Kilinochchi Police Station']
  },
  'Eastern Province': {
    'Batticaloa Police Division': ['Batticaloa Police Station', 'Kattankudy Police Station', 'Kalmunai Police Station'],
    'Trincomalee Police Division': ['Trincomalee Police Station', 'Kinniya Police Station', 'Kantale Police Station']
  },
  'North Central Province': {
    'Anuradhapura Police Division': ['Anuradhapura Police Station', 'Medawachchiya Police Station', 'Kekirawa Police Station'],
    'Polonnaruwa Police Division': ['Polonnaruwa Police Station', 'Hingurakgoda Police Station', 'Lankapura Police Station']
  },
  'Uva Province': {
    'Badulla Police Division': ['Badulla Police Station', 'Bandarawela Police Station', 'Hali-Ela Police Station'],
    'Monaragala Police Division': ['Monaragala Police Station', 'Wellawaya Police Station', 'Bibile Police Station']
  },
  'Sabaragamuwa Province': {
    'Kegalle Police Division': ['Kegalle Police Station', 'Rambukkana Police Station', 'Mawanella Police Station'],
    'Ratnapura Police Division': ['Ratnapura Police Station', 'Embilipitiya Police Station', 'Balangoda Police Station']
  },
  'North Western Province': {
    'Kurunegala Police Division': ['Kurunegala Police Station', 'Kuliyapitiya Police Station', 'Nikaweratiya Police Station'],
    'Puttalam Police Division': ['Puttalam Police Station', 'Chilaw Police Station', 'Wennappuwa Police Station']
  }
};

function ComplaintForm() {
  const provinces = Object.keys(policeData);
  const [formData, setFormData] = useState({
    province: '',
    policeDivision: '',
    policeStation: '',
    complaintType: '',
    complaintDescription: '',
    complaintDate: '',
    complaintMode: '',
    complainantName: '',
    contactInfo: {
      email: '',
      phone: '',
      address: ''
    },
    attachments: null
  });

  const [similarComplaintsDetails, setSimilarComplaintsDetails] = useState([]);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      province: selectedProvince,
      policeDivision: '',
      policeStation: ''
    }));
  };

  const handleDivisionChange = (e) => {
    const selectedDivision = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      policeDivision: selectedDivision,
      policeStation: ''
    }));
  };

  const handleStationChange = (e) => {
    const selectedStation = e.target.value;
    setFormData(prevState => ({
      ...prevState,
      policeStation: selectedStation
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('contactInfo.')) {
      const contactInfoField = name.split('.')[1];
      setFormData((prevState) => ({
        ...prevState,
        contactInfo: {
          ...prevState.contactInfo,
          [contactInfoField]: value
        }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      attachments: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'contactInfo') {
        Object.keys(formData.contactInfo).forEach(contactKey => {
          formDataToSend.append(`contactInfo.${contactKey}`, formData.contactInfo[contactKey]);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    if (formData.attachments) {
      formDataToSend.append('attachments', formData.attachments);
    }

    try {
      const response = await fetch("http://localhost:5000/api/complaints", {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        setSimilarComplaintsDetails(data.similarComplaintsDetails);
        console.log("Similar Complaints Details:", data.similarComplaintsDetails);
      } else {
        console.error('Failed to submit complaint');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Submit a Complaint</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Province</label>
          <select
            className="form-control"
            value={formData.province}
            onChange={handleProvinceChange}
          > <br />
            <option value="">Select Province</option>
            {provinces.map(province => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </div><br />

        {formData.province && (
          <div className="form-group">
            <label>Police Division</label>
            <select
              className="form-control"
              value={formData.policeDivision}
              onChange={handleDivisionChange}
            >
              <option value="">Select Division</option>
              {Object.keys(policeData[formData.province]).map(division => (
                <option key={division} value={division}>{division}</option>
              ))}
            </select> <br />
          </div>
        )}

        {formData.policeDivision && (
          <div className="form-group">
            <label>Police Station</label>
            <select
              className="form-control"
              value={formData.policeStation}
              onChange={handleStationChange}
            >
              <option value="">Select Station</option>
              {policeData[formData.province][formData.policeDivision].map(station => (
                <option key={station} value={station}>{station}</option>
              ))}
            </select><br />
          </div>
        )}

        <div className="form-group">
          <label>Complaint Type</label>
          <input
            type="text"
            className="form-control"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Complaint Description</label>
          <textarea
            className="form-control"
            name="complaintDescription"
            value={formData.complaintDescription}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Complaint Date</label>
          <input
            type="date"
            className="form-control"
            name="complaintDate"
            value={formData.complaintDate}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Complaint Mode</label>
          <input
            type="text"
            className="form-control"
            name="complaintMode"
            value={formData.complaintMode}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Complainant Name</label>
          <input
            type="text"
            className="form-control"
            name="complainantName"
            value={formData.complainantName}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="contactInfo.email"
            value={formData.contact}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="contactInfo.phone"
            value={formData.contactInfo.phone}
            onChange={handleChange}
          />
        </div> <br />
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="contactInfo.address"
            value={formData.contactInfo.address}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Attachments</label> &nbsp;
          <input
            type="file"
            className="form-control-file"
            onChange={handleFileChange}
          />
        </div> <br />
        <button type="submit" className="btn btn-primary">Submit Complaint</button>
      </form>

    {/* Similar Complaints Section */}
    {similarComplaintsDetails.length > 0 && (
        <div className="mt-4">
          <h4>Similar Complaints Found:</h4>
          <ul>
            {similarComplaintsDetails.map(complaint => (
              <li key={complaint.id}>
                <p>Complaint ID: {complaint.id}</p>
                <p>Police Station: {complaint.policeStation}</p>
                <p>Police Division: {complaint.policeDivision}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ComplaintForm;

