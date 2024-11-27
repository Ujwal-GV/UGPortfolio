import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
const server_url = import.meta.env.VITE_BACKEND_URL
const apiClient = axios.create({
    baseURL:server_url
});
const axiosInstance = apiClient;  

const Messages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Define the mutation for submitting the form
  const mutation = useMutation(
    (data) => axiosInstance.post("/contact", data),
    {
      onSuccess: () => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      },
      onError: (error) => {
        console.log("h",error);
        
        if (error.response?.data?.error) {
          setStatus(error.response.data.error); // Show server-provided error message
        } else {
          setStatus("Failed to send message. Please try again later.");
        }
      }      
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(""); // Clear any previous status messages
    mutation.mutate(formData); // Trigger the mutation
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`w-full py-2 mt-4 text-white rounded-lg shadow-md transition-all ${
            mutation.isLoading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {mutation.isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && (
        <p
          className={`mt-4 text-center ${
            status.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default Messages;
