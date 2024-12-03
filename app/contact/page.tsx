'use client';
import Image from "next/image";
import Container from "@/components/container";
import { useState } from "react";

// Define the shape of formData and error state
interface FormData {
  name: string;
  email: string;
  message: string;
  form?: string; 
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error for the current field
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
        const response = await fetch("http://localhost:4000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      
        if (response.ok) {
          setSuccessMessage("Thank you for contacting us! We'll get back to you shortly.");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setFormError(null); // Clear any form-specific errors
        } else {
          const errorData = await response.json();
          setFormError(errorData.message || "Failed to send the message");
        }
      } catch (error) {
        console.error("Error:", error);
        setFormError("Something went wrong. Please try again later.");
      }
  };

  return (
    <Container>
      <div className="relative">
        <Image
          src="/contact.png"
          alt="contact us"
          layout="responsive"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
          <h1 className="text-blue-300 font-bold mb-2 lg:mb-4 text-xl sm:text-2xl lg:text-4xl leading-tight lg:leading-snug">
            CONTACT US
          </h1>
          <p className="text-base sm:text-lg lg:text-3xl leading-snug lg:leading-normal">
            We specialize in helping you build a team of expert
          </p>
          <p className="text-base sm:text-lg lg:text-3xl leading-snug lg:leading-normal">
            developers.
          </p>
        </div>
      </div>

      <div className="py-8 sm:py-16 px-4 sm:px-8 w-full flex items-center justify-center">
        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1 w-full">
            <Image
              src="/map1.png"
              alt="location"
              layout="responsive"
              width={300}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 w-full bg-blue-600 bg-opacity-50 text-white p-6 rounded-lg rounded-tl-[50px] shadow-lg lg:-ml-32 mt-8 lg:mt-0 relative">
            <h1 className="text-3xl sm:text-2xl font-bold">Connect With Us </h1>
            <h1 className="text-3xl sm:text-2xl font-bold mb-5">Today!</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    className="p-2 w-full rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="p-2 w-full rounded-md outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="p-2 w-full rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-2 w-full rounded-md outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 h-20 w-full rounded-md outline-none"
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>
              {errors.form && <p className="text-red-500 text-xs absolute">{errors.form}</p>}
              {successMessage && <p className="text-green-500 absolute bg-white w-[30vw] p-10 inset-20 h-[20vh] text-xl">{successMessage}</p>}
              <button
                type="submit"
                className="w-20 bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-400 transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
