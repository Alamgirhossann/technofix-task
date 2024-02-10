import { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    company: "",
    file: null, // Adding file state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      company: "",
      file: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-semibold text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>

      {/* End of file input field */}
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-semibold text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>
      {/* Add file input field */}
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-sm font-semibold text-gray-700"
        >
          Upload File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="form-input border-2 mt-1 block w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-b from-purple-200 to-pink-200 px-4 py-2 rounded-md"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
