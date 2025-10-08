import React, { useState, useEffect, useContext } from "react";
import AppContext from "./context/appContext";

const BasicSettings = () => {
  const { getBasicSettings, updateBasicSettings } = useContext(AppContext);

  const [form, setForm] = useState({
    siteName: "",
    metaTitle: "",
    metaDescription: "",
    phone: "",
    footerDescription: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settings = await getBasicSettings(); // fetch from backend
        if (settings) setForm(settings);
      } catch (err) {
        console.error("Error fetching settings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [getBasicSettings]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBasicSettings(form._id, form); // pass id + updated data
      alert("Settings Updated Successfully!");
    } catch (err) {
      console.error("Error updating settings:", err);
      alert("Failed to update settings.");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Basic Settings</h2>

      <form onSubmit={handleSubmit} className="px-1">
        {/* Site Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Site Name</label>
          <input
            type="text"
            className="form-control"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            placeholder="Enter site name"
          />
        </div>

        {/* Meta Title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Site Meta Title</label>
          <input
            type="text"
            className="form-control"
            name="metaTitle"
            value={form.metaTitle}
            onChange={handleChange}
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Site Meta Description</label>
          <textarea
            className="form-control"
            rows="3"
            name="metaDescription"
            value={form.metaDescription}
            onChange={handleChange}
            placeholder="Enter meta description"
          ></textarea>
        </div>

        {/* Phone + Email side by side */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
        </div>

        {/* Footer Description */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Footer Description</label>
          <textarea
            className="form-control"
            rows="2"
            name="footerDescription"
            value={form.footerDescription}
            onChange={handleChange}
            placeholder="Enter footer description"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicSettings;
