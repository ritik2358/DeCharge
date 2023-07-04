import React, { useState } from 'react';
import { ethers } from 'ethers';
import './NewCharger.css';
import abi from '../../contractJSON/ChargerManager.json';
import { Nav } from '../Nav';

const ChargerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    price: '',
    description: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect to the local Ethereum node
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

    // Set the contract address and ABI
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const contractABI = abi.abi;

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    // Get the signer
    const signer = provider.getSigner();

    try {
      // Call the 'addCharger' function in the smart contract
      await contract.connect(signer).addCharger(
        formData.name,
        formData.address,
        formData.price,
        formData.description
      );

      // Store the submitted data
      setSubmittedData(formData);

      // Form data submitted successfully
      console.log('Form data submitted to the smart contract.');
      setSubmissionStatus('success');

      // Show JavaScript alert
      window.alert('New charger has been added!');

      // Redirect the page
      window.location.href = '../../chargers';
    } catch (error) {
      // Error occurred while submitting form data
      console.error('Error submitting form data:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <>
    <div>
          <Nav />
        </div> 
    <div className="form-container">
      <h2 className="form-title">Add a New Charger</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
    </>
  );
};

export default ChargerPage;
