import React, { useState } from "react";
import styled from "styled-components";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh;x */
  background: linear-gradient(to right, #e0f7fa, #80deea);
  /* Or use an image */
  
`;

const FormWrapper = styled.div`
  background: rgba(0, 80, 100, 0.8);
  padding: 30px;
  border-radius: 8px;
  margin: 25px;
  width: 500px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  letter-spacing: 1px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
  font-size: 14px;
`;

// const Input = styled.input`
//   flex: 2;
//   padding: 8px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
// `;
const Input = styled.input`
  flex: 2;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  flex: 2;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Select = styled.select`
  flex: 2;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// const Button = styled.button`
//   flex: 1;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 4px;
//   margin: 0 5px;
//   background: ${(props) => (props.primary ? "#007bff" : "#ffc107")};
//   color: ${(props) => (props.primary ? "white" : "black")};
//   &:hover {
//     opacity: 0.8;
//   }
// `;
const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin: 0 5px;
  background: ${(props) => (props.primary ? "#007bff" : "#ffc107")};
  color: ${(props) => (props.primary ? "white" : "black")};
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

const Preorder = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billingAddress: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
    
  };

  const handlePreorder = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      await addDoc(collection(db, "preorders"), formData);
      alert("Preorder submitted successfully!");
    } catch (error) {
      console.error("Error submitting preorder: ", error);
      alert("Failed to submit preorder. Try again later.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>PRODUCT ORDER FORM</Title>
        <InputGroup>
          <Label>Company Name:</Label>
          <Input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter Company Name"/>
        </InputGroup>
        <InputGroup>
          <Label>Company Description:</Label>
          <TextArea name="companyDescription" value={formData.companyDescription} onChange={handleChange} rows="4" placeholder="Enter Company Description" />
        </InputGroup>
        <InputGroup>
          <Label>First Name:</Label>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name"/>
        </InputGroup>
        <InputGroup>
          <Label>Last Name:</Label>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name"/>
        </InputGroup>
        <InputGroup>
          <Label>Email Address:</Label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email Address" />
        </InputGroup>
        <InputGroup>
          <Label>Phone Number:</Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} maxLength={10} placeholder="Enter Phone Number"/>
        </InputGroup>
        <InputGroup>
          <Label>Billing Address:</Label>
          <Input name="billingAddress" value={formData.billingAddress} onChange={handleChange} placeholder="Enter Billing Address"/>
        </InputGroup>
        <InputGroup>
          <Label>City:</Label>
          <Input name="city" value={formData.city} onChange={handleChange} placeholder="Enter City" />
        </InputGroup>
        <InputGroup>
          <Label>State/Province:</Label>
          <Input name="state" value={formData.state} onChange={handleChange} placeholder="Enter State/Province" />
        </InputGroup>
        <InputGroup>
          <Label>ZIP Code:</Label>
          <Input name="zip" value={formData.zip} onChange={handleChange} maxLength={6} placeholder="Enter ZIP Code"/>
        </InputGroup>
        <InputGroup>
          <Label>Country:</Label>
          <Select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Quantity:</Label>
          <Input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Enter Quantity" />
        </InputGroup>
        {/* <QRCode src="/path-to-your-qr-code.png" alt="UPI QR Code" /> */}
        <ButtonGroup>
          <Button primary onClick={handlePreorder}>Place Order</Button>
          <Button onClick={() => setFormData({
            companyName: "", companyDescription: "", firstName: "", lastName: "", email: "", phone: "", billingAddress: "", address: "", city: "", state: "", zip: "", country: "", quantity: ""
          })}>Reset</Button>
        </ButtonGroup>
      </FormWrapper>
    </Container>
  );
};

export default Preorder;
