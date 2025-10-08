import React, { useRef } from 'react'
import AppContext from './appContext'
import { useState } from 'react'

const AppState = (props) => {
    const [helloworld, setHelloworld] = useState("Helloworld")
    const navbarRef = useRef()
    const [homePage, sethomePage] = useState({})
    const [agencyPage, setAgencyPage] = useState({})
    


    const loggedIn = async (username, password)=> {
  try {
    const response = await fetch("https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

 

    const data = await response.json(); // { authToken: "..." }
    console.log("Auth Token:", data.authToken);

    // Store token in localStorage/sessionStorage if needed
    // localStorage.setItem("authToken", data.authToken);

    return data;
  } catch (err) {
    console.error("Error during login:", err.message);
    // alert("Login failed: " + err.message);
  }
}


// base URL
// const API_URL = "";

// ✅ Get Basic Settings
 const getBasicSettings = async () => {
  try {
    const res = await fetch(`https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/basicsettings/get-basicsettings`);
    if (!res.ok) throw new Error("Failed to fetch settings");
    return await res.json();
  } catch (err) {
    console.error("Error fetching settings:", err);
    return null;
  }
};

// ✅ Create Basic Settings
 const createBasicSettings = async (data) => {
  try {
    const res = await fetch(`https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/basicsettings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create settings");
    return await res.json();
  } catch (err) {
    console.error("Error creating settings:", err);
    return null;
  }
};

// ✅ Update Basic Settings by ID
const updateBasicSettings = async (id, data) => {
  try {
    const res = await fetch(`https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/basicsettings/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update settings");
    return await res.json();
  } catch (err) {
    console.error("Error updating settings:", err);
    return null;
  }
};




  // Fetch Homepage
  const getHomepage = async () => {
    try {
      const res = await fetch("https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/homepage/get-home-page");
      const data = await res.json();
      sethomePage(data)
      return data.length > 0 ? data[0] : null;
    } catch (err) {
      console.error("Failed to fetch homepage:", err);
      return null;
    }
  };

  // Update Homepage
  const updateHomepage = async (id, updatedData) => {
    try {
      const res = await fetch(`https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/homepage/update-homepage/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      return res.ok ? data : null;
    } catch (err) {
      console.error("Failed to update homepage:", err);
      return null;
    }
  };


  // Base URL (change if needed)
// const API_URL = "";

// // Create new Agency Page
//  const createAgencyPage = async (formData) => {
//   try {
//     const res = await fetch("https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/agency", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     if (!res.ok) throw new Error("Failed to create agency page");
//     return await res.json();
//   } catch (err) {
//     console.error("Error creating agency page:", err);
//     return null;
//   }
// };

// Get Agency Page
 const getAgencyPage = async () => {
  try {
    const res = await fetch("https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/agencypage/get-agency");
    if (!res.ok) throw new Error("Failed to fetch agency page");
    const data =  await res.json();
    setAgencyPage(data)
    return data
  } catch (err) {
    console.error("Error fetching agency page:", err);
    return null;
  }
};

// Update Agency Page
 const updateAgencyPage = async (id, formData) => {
  try {
    const res = await fetch(`https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/agencypage/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error("Failed to update agency page");
    return await res.json();
  } catch (err) {
    console.error("Error updating agency page:", err);
    return null;
  }
};

 const fetchSettings = async () => {
      try {
        const res = await fetch("https://superkingex-dot-arched-gear-433017-u9.de.r.appspot.com/api/basicsettings/get-basicsettings"); // ✅ use your backend URL
        if (!res.ok) throw new Error("Failed to fetch settings");
        const data = await res.json();
        return data
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };


    return (
        <AppContext.Provider value={{helloworld,homePage, agencyPage,fetchSettings, getAgencyPage,updateAgencyPage,getHomepage,updateHomepage,navbarRef, loggedIn, getBasicSettings, createBasicSettings, updateBasicSettings}}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState