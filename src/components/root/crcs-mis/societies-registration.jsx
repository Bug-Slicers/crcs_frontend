import React, { useState } from "react";
import { stateOptions } from "../../../assets/stateData";

const SocietiesRegistration = () => {
  const [societyName, setSocietyName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [societyType, setSocietyType] = useState("");
  const [designation, setDesignation] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let errors = {};

    // Validate society name
    if (!societyName.trim()) {
      errors.societyName = "Please enter a name for the society";
    }

    // Validate address
    if (!address.trim()) {
      errors.address = "Please enter a valid address";
    }

    // Validate pin code
    if (!pinCode.trim()) {
      errors.pinCode = "Please enter a valid pin code";
    }

    // Validate state
    if (!state.trim()) {
      errors.state = "Please select a state";
    }

    // Validate district
    if (!district.trim()) {
      errors.district = "Please select a district";
    }

    // Validate society type
    if (!societyType.trim()) {
      errors.societyType = "Please select a society type";
    }

    // Validate designation
    if (!designation.trim()) {
      errors.designation = "Please enter a designation";
    }

    // Validate PAN number
    const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
    if (!panRegex.test(panNumber.trim())) {
      errors.panNumber = "Please enter a valid PAN number";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email";
    }

    // Validate phone number
    const phoneRegex = /^([0-9]){10}?$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    // Validate password
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Form submission logic goes here
    // You can handle the registration process or API call

    setIsLoading(true);

    // Simulating registration process
    setTimeout(() => {
      // Reset form state
      setSocietyName("");
      setAddress("");
      setPinCode("");
      setState("");
      setDistrict("");
      setSocietyType("");
      setDesignation("");
      setPanNumber("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
      setIsLoading(false);

      // Show success message or redirect to another page
      alert("Registration successful!");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto font-poppins">
      <h2 className="text-2xl font-bold mb-4">Societies Registration</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 p-8 rounded-md"
      >
        <div>
          <label htmlFor="societyName" className="block mb-1">
            Society Name:
          </label>
          <input
            type="text"
            id="societyName"
            value={societyName}
            onChange={(e) => setSocietyName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.societyName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.societyName && (
            <div className="text-red-500">{errors.societyName}</div>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <div className="text-red-500">{errors.address}</div>
          )}
        </div>
        <div>
          <label htmlFor="pinCode" className="block mb-1">
            Pin Code:
          </label>
          <input
            type="text"
            id="pinCode"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          />
          {errors.pinCode && (
            <div className="text-red-500">{errors.pinCode}</div>
          )}
        </div>
        <div>
          <label htmlFor="state" className="block mb-1">
            State:
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select State</option>
            {stateOptions.map((stateOption, index) => (
              <option key={index} value={stateOption.name}>
                {stateOption.name}
              </option>
            ))}
          </select>
          {errors.state && <div className="text-red-500">{errors.state}</div>}
        </div>
        <div>
          <label htmlFor="district" className="block mb-1">
            District:
          </label>
          <select
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.district ? "border-red-500" : "border-gray-300"
            }`}
            disabled={!state} // Disable the select until a state is selected
          >
            <option value="">Select District</option>
            {stateOptions
              .find((stateOption) => stateOption.name === state)
              ?.districts.map((districtOption, index) => (
                <option key={index} value={districtOption}>
                  {districtOption}
                </option>
              ))}
          </select>
          {errors.district && (
            <div className="text-red-500">{errors.district}</div>
          )}
        </div>
        <div>
          <label htmlFor="societyType" className="block mb-1">
            Society Type:
          </label>
          <input
            type="text"
            id="societyType"
            value={societyType}
            onChange={(e) => setSocietyType(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.societyType ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.societyType && (
            <div className="text-red-500">{errors.societyType}</div>
          )}
        </div>
        <div>
          <label htmlFor="designation" className="block mb-1">
            Designation:
          </label>
          <input
            type="text"
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.designation ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.designation && (
            <div className="text-red-500">{errors.designation}</div>
          )}
        </div>
        <div>
          <label htmlFor="panNumber" className="block mb-1">
            PAN Number:
          </label>
          <input
            type="text"
            id="panNumber"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.panNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.panNumber && (
            <div className="text-red-500">{errors.panNumber}</div>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phoneNumber && (
            <div className="text-red-500">{errors.phoneNumber}</div>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocietiesRegistration;
