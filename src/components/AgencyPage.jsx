import React, { useState, useEffect, useContext } from "react";
import AppContext from "./context/appContext";

const AgencyPage = () => {
  const { getAgencyPage, updateAgencyPage } = useContext(AppContext);

  const [form, setForm] = useState({
    droneShots: [],
    colorGrades: [],
    allOverEdits: [],
    longFormEdits: [],
    motionGraphics: [],
    thumbnails1: [],
    thumbnails2: [],
    thumbnails3: [],
    thumbnails4: [],
    thumbnails5: [],
    thumbnails6: [],
    thumbnails7: [],
    thumbnails8: [],
    proveSection: [{ stats: "", youtuberImg: "" }],
  });

  const [loadingFields, setLoadingFields] = useState({});
  const [agencyId, setAgencyId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🧠 Drag & Drop state
  const [firstDnd, setFirstDnd] = useState({ field: null, index: null });
  const [secondDnd, setSecondDnd] = useState({ field: null, index: null });

  // ✅ Fetch agency data
  useEffect(() => {
    const fetchAgency = async () => {
      try {
        setIsLoading(true);
        const data = await getAgencyPage();
        if (data) {
          setForm({
            droneShots: data.droneShots || [],
            colorGrades: data.colorGrades || [],
            allOverEdits: data.allOverEdits || [],
            longFormEdits: data.longFormEdits || [],
            motionGraphics: data.motionGraphics || [],
            thumbnails1: data.thumbnails1 || [],
            thumbnails2: data.thumbnails2 || [],
            thumbnails3: data.thumbnails3 || [],
            thumbnails4: data.thumbnails4 || [],
            thumbnails5: data.thumbnails5 || [],
            thumbnails6: data.thumbnails6 || [],
            thumbnails7: data.thumbnails7 || [],
            thumbnails8: data.thumbnails8 || [],
            proveSection:
              data.proveSection && data.proveSection.length > 0
                ? data.proveSection
                : [{ stats: "", youtuberImg: "" }],
          });
          setAgencyId(data._id);
        }
      } catch (err) {
        console.error("Error fetching agency:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAgency();
  }, []);

  // ✅ Upload to Cloudinary
  const uploadToCloudinary = async (files, field, idx = null, subField = null) => {
    const loadingKey = idx !== null && subField ? `${field}-${idx}-${subField}` : field;
    setLoadingFields((prev) => ({ ...prev, [loadingKey]: true }));

    try {
      let uploadedUrls = [];
      for (const file of files) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Real_Estate");

        const uploadUrl = file.type.startsWith("video/")
          ? "https://api.cloudinary.com/v1_1/dqu8eh3hz/video/upload"
          : "https://api.cloudinary.com/v1_1/dqu8eh3hz/image/upload";

        const res = await fetch(uploadUrl, { method: "POST", body: data });
        const result = await res.json();
        if (result.secure_url) uploadedUrls.push(result.secure_url);
      }

      if (field === "proveSection" && idx !== null && subField) {
        const updated = [...form.proveSection];
        updated[idx][subField] = uploadedUrls[0];
        setForm((prev) => ({ ...prev, proveSection: updated }));
      } else {
        setForm((prev) => ({
          ...prev,
          [field]: [...prev[field], ...uploadedUrls],
        }));
      }
    } catch (err) {
      console.error("Upload failed:", err);
      alert("File upload failed!");
    } finally {
      setLoadingFields((prev) => ({ ...prev, [loadingKey]: false }));
    }
  };

  // ✅ Remove image
  const removeImage = (field, index) => {
    setForm((prev) => {
      const updated = [...prev[field]];
      updated.splice(index, 1);
      return { ...prev, [field]: updated };
    });
  };

  // ✅ Change order (drag & drop)
  const changeOrder = () => {
    if (!firstDnd.field || firstDnd.field !== secondDnd.field) return; // ignore if dragging across sections

    const updated = [...form[firstDnd.field]];
    const temp = updated[firstDnd.index];
    updated[firstDnd.index] = updated[secondDnd.index];
    updated[secondDnd.index] = temp;

    setForm((prev) => ({ ...prev, [firstDnd.field]: updated }));
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agencyId) return alert("Agency Page ID missing!");
    await updateAgencyPage(agencyId, form);
    alert("Agency Page updated successfully!");
  };

  if (isLoading) {
    return (
      <div className="container my-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading agency page data...</p>
      </div>
    );
  }

  const imageFields = [
    { key: "droneShots", label: "Drone Shots" },
    { key: "colorGrades", label: "Color Grades" },
    { key: "allOverEdits", label: "All Over Edits" },
    { key: "longFormEdits", label: "Long Form Edits" },
    { key: "motionGraphics", label: "Motion Graphics" },
    { key: "thumbnails1", label: "Thumbnail Images 1" },
    { key: "thumbnails2", label: "Thumbnail Images 2" },
    { key: "thumbnails3", label: "Thumbnail Images 3" },
    { key: "thumbnails4", label: "Thumbnail Images 4" },
    { key: "thumbnails5", label: "Thumbnail Images 5" },
    { key: "thumbnails6", label: "Thumbnail Images 6" },
    { key: "thumbnails7", label: "Thumbnail Images 7" },
    { key: "thumbnails8", label: "Thumbnail Images 8" },
  ];

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Agency Page Settings</h2>

      <form onSubmit={handleSubmit}>
        {/* ✅ Image Sections with Drag & Drop */}
        {imageFields.map((field) => (
          <div className="mb-4" key={field.key}>
            <label className="form-label fw-semibold">{field.label}</label>
            <div className="d-flex flex-wrap gap-2">
              {form[field.key].map((img, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => setFirstDnd({ field: field.key, index })}
                  onDragEnter={() => setSecondDnd({ field: field.key, index })}
                  onDragEnd={changeOrder}
                  className="position-relative"
                  style={{
                    cursor: "grab",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src={img}
                    alt={field.label}
                    className="rounded"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(field.key, index)}
                    className="btn btn-sm btn-danger position-absolute top-0 end-0"
                    style={{ width: "20px", height: "20px", padding: 0 }}
                  >
                    ×
                  </button>
                </div>
              ))}

              {loadingFields[field.key] && (
                <div
                  className="d-flex justify-content-center align-items-center border rounded"
                  style={{ width: "100px", height: "100px" }}
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Uploading...</span>
                  </div>
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              multiple
              className="form-control mt-2"
              onChange={(e) =>
                e.target.files.length > 0 &&
                uploadToCloudinary([...e.target.files], field.key)
              }
            />
          </div>
        ))}

        {/* ✅ Prove Section (excluded from DnD) */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Prove Section</label>
          {form.proveSection.map((item, idx) => (
            <div key={idx} className="border p-3 rounded mb-3 position-relative">
              {form.proveSection.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const updated = [...form.proveSection];
                    updated.splice(idx, 1);
                    setForm((prev) => ({ ...prev, proveSection: updated }));
                  }}
                  className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                  style={{ width: "25px", height: "25px", padding: 0 }}
                >
                  ×
                </button>
              )}

              <h6>Stats Image</h6>
              <div className="d-flex align-items-center gap-2">
                {item.stats && (
                  <img
                    src={item.stats}
                    alt="stats"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) =>
                    e.target.files.length > 0 &&
                    uploadToCloudinary([...e.target.files], "proveSection", idx, "stats")
                  }
                />
              </div>

              <h6 className="mt-2">YouTuber Image</h6>
              <div className="d-flex align-items-center gap-2">
                {item.youtuberImg && (
                  <img
                    src={item.youtuberImg}
                    alt="youtuber"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) =>
                    e.target.files.length > 0 &&
                    uploadToCloudinary([...e.target.files], "proveSection", idx, "youtuberImg")
                  }
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                proveSection: [...prev.proveSection, { stats: "", youtuberImg: "" }],
              }))
            }
          >
            + Add More Proof
          </button>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4">
            Update Agency Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgencyPage;
