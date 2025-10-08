import React, { useState, useEffect, useContext } from "react";
import AppContext from "./context/appContext";

const HomePage = () => {
  const { getHomepage, updateHomepage } = useContext(AppContext);

  const [form, setForm] = useState({
    video1: "",
    video2: "",
    video3: "",
    video4: "",
    thumbnails1: [],
    thumbnails2: [],
    thumbnails3: [],
    thumbnails4: [],
    thumbnails5: [],
    thumbnails6: [],
  });

  const [loadingFields, setLoadingFields] = useState({});
  const [homepageId, setHomepageId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🟩 Fetch existing homepage data
  useEffect(() => {
    const fetchHome = async () => {
      try {
        setIsLoading(true);
        const data = await getHomepage();
        let home = null;

        if (Array.isArray(data) && data.length > 0) {
          home = data[0];
        } else if (data && !Array.isArray(data)) {
          home = data;
        }

        if (home) {
          setForm({
            video1: home.video1 || "",
            video2: home.video2 || "",
            video3: home.video3 || "",
            video4: home.video4 || "",
            thumbnails1: home.thumbnails1 || [],
            thumbnails2: home.thumbnails2 || [],
            thumbnails3: home.thumbnails3 || [],
            thumbnails4: home.thumbnails4 || [],
            thumbnails5: home.thumbnails5 || [],
            thumbnails6: home.thumbnails6 || [],
          });
          setHomepageId(home._id);
        }
      } catch (error) {
        console.error("Error fetching homepage:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHome();
  }, []);

  // 🟩 Upload to Cloudinary
  const uploadToCloudinary = async (files, field) => {
    setLoadingFields((prev) => ({ ...prev, [field]: true }));
    try {
      let uploadedUrls = [];
      for (const file of files) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "Real_Estate");

        const isVideo = file.type.startsWith("video/");
        const uploadUrl = isVideo
          ? "https://api.cloudinary.com/v1_1/dqu8eh3hz/video/upload"
          : "https://api.cloudinary.com/v1_1/dqu8eh3hz/image/upload";

        const res = await fetch(uploadUrl, { method: "POST", body: data });
        const result = await res.json();
        if (result.secure_url) uploadedUrls.push(result.secure_url);
      }

      if (field.startsWith("video")) {
        setForm((prev) => ({ ...prev, [field]: uploadedUrls[0] }));
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
      setLoadingFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  // 🟩 Remove image
  const removeImage = (field, index) => {
    setForm((prev) => {
      const updated = [...prev[field]];
      updated.splice(index, 1);
      return { ...prev, [field]: updated };
    });
  };

  // 🟩 Handle drag and drop reorder
  const handleDragStart = (field, index) => {
    setForm((prev) => ({ ...prev, dragIndex: index, dragField: field }));
  };

  const handleDragEnter = (field, index) => {
    setForm((prev) => ({ ...prev, dragOverIndex: index, dragField: field }));
  };

  const handleDragEnd = (field) => {
    if (form.dragIndex === null || form.dragOverIndex === null) return;

    const updated = [...form[field]];
    const temp = updated[form.dragIndex];
    updated[form.dragIndex] = updated[form.dragOverIndex];
    updated[form.dragOverIndex] = temp;

    setForm((prev) => ({
      ...prev,
      [field]: updated,
      dragIndex: null,
      dragOverIndex: null,
    }));
  };

  // 🟩 Update homepage
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!homepageId) return alert("Homepage ID missing!");
    await updateHomepage(homepageId, form);
    alert("Homepage updated successfully!");
  };

  // 🟩 Loader
  if (isLoading) {
    return (
      <div className="container my-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading homepage data...</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">Home Page Settings</h2>

      <form onSubmit={handleSubmit} className="px-1">
        {/* 🎥 Videos */}
        <div className="row">
          {[1, 2, 3, 4].map((num) => {
            const field = `video${num}`;
            return (
              <div className="col-md-6 mb-3" key={num}>
                <label className="form-label fw-semibold">Video {num}</label>
                <input
                  type="file"
                  accept="video/*"
                  className="form-control"
                  onChange={(e) =>
                    e.target.files[0] &&
                    uploadToCloudinary([e.target.files[0]], field)
                  }
                />

                {loadingFields[field] && (
                  <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Uploading...</span>
                    </div>
                  </div>
                )}

                {form[field] && !loadingFields[field] && (
                  <div className="position-relative mt-2">
                    <video
                      src={form[field]}
                      controls
                      className="w-100 rounded"
                      style={{ maxHeight: "200px" }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({ ...prev, [field]: "" }))
                      }
                      className="btn btn-sm btn-danger position-absolute top-0 end-0"
                      style={{ width: "24px", height: "24px", padding: 0 }}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <hr />

        {/* 🖼️ Thumbnails with Drag & Drop */}
        {[1, 2, 3, 4, 5, 6].map((num) => {
          const field = `thumbnails${num}`;
          return (
            <div className="mb-4" key={num}>
              <label className="form-label fw-semibold">
                Thumbnail Images {num}
              </label>
              <div className="d-flex flex-wrap gap-2">
                {form[field].map((thumb, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(field, index)}
                    onDragEnter={() => handleDragEnter(field, index)}
                    onDragEnd={() => handleDragEnd(field)}
                    className="position-relative border rounded shadow-sm"
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                      cursor: "grab",
                    }}
                  >
                    <img
                      src={thumb}
                      alt="thumbnail"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(field, index)}
                      className="btn btn-sm btn-danger position-absolute top-0 end-0"
                      style={{
                        width: "20px",
                        height: "20px",
                        padding: 0,
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}

                {loadingFields[field] && (
                  <div
                    className="d-flex justify-content-center align-items-center border rounded"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
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
                  uploadToCloudinary([...e.target.files], field)
                }
              />
            </div>
          );
        })}

        <div className="text-end">
          <button type="submit" className="btn btn-primary px-4">
            Update HomePage
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
