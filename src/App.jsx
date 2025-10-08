import './App.css';
import { useContext, useEffect, useState } from 'react';
import AppContext from './components/context/appContext';
import { Switch, Route, Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
import Agency from './components/agency';
import Admin from './components/admin';
import Dashboard from './components/dashboard';

function App() {
  const context = useContext(AppContext);
  const { helloworld, navbarRef, fetchSettings } = context;
  console.log(helloworld);
  const [footerData, setFooterData]= useState()
useEffect(() => {
  
    const func = async ()=>{
      
      const data = await fetchSettings();
      console.log("basics",data)
      setFooterData(data)
      
    }
    func()
  }, [])
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden"; // <html>
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  // ✅ pages where Navbar + Footer should be hidden
  const hideLayoutRoutes = ["/admin", "/dashboard/", "/dashboard/homepage", "/dashboard/agency", "/dashboard/basicsettings"];

  return (
    <>
      {/* ✅ Navbar - only show if not in hideLayoutRoutes */}
      {!hideLayoutRoutes.includes(location.pathname) && (
        <div className="sticky-top">
          <Navbar NavbarDetails={footerData}/>
        </div>
      )}

      <button
        type="button"
        ref={navbarRef}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content upBlackShade">
            <div className="modal-header border-0 d-flex justify-content-end">
              <button
                type="button"
                style={{ backgroundColor: "#fff0", border: "none" }}
                data-bs-dismiss="modal"
              >
                <i
                  className="fa fa-times text-white"
                  style={{ fontSize: "40px" }}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div className="modal-body border-0 text-center">
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => navbarRef.current.click()}
                to="/agency"
              >
                <h1 className="display-1 fw-bold text-light">AGENCY</h1>
              </Link>
              <h1 className="display-1 fw-bold text-light">COURSES</h1>
              <h1 className="display-1 fw-bold text-light">GOOGLE ADS</h1>
              <h1 className="display-1 fw-bold text-light">FACEBOOK ADS</h1>
              <h1 className="display-1 fw-bold text-light">REVIEWS</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/agency" exact>
            <Agency />
          </Route>

          <Route path="/users" exact>
            <h1 className="text-center">Users Component</h1>
          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
        </Switch>
      </div>

      {/* ✅ Footer - only show if not in hideLayoutRoutes */}
      {!hideLayoutRoutes.includes(location.pathname) && <Footer footerDetails={footerData} />}
    </>
  );
}

export default App;
