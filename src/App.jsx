import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AppContext from './components/context/appContext';
import { Switch, Route, Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Slider from './components/slider';
import Samples from './components/samples';
import Prices from './components/prices';
import Faq from './components/faq';
import Thumbnails from './components/thumbnails';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
import Agency from './components/agency';
import { useEffect } from 'react';
function App() {
  const context = useContext(AppContext)
  const { helloworld, navbarRef } = context
  console.log(helloworld);
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflowX = "hidden"
      document.documentElement.style.overflowX = "hidden" // <html>
    } else {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflow = "unset"
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    // Cleanup: reset overflow when component unmounts

  }, [location.pathname])
  return (
    <>

      {/* <div className="d-flex py-3 justify-content-center">

       <Link to="/"> <div className="btn btn-outline-primary px-2 mx-2">Home</div></Link>
       <Link to="/about"> <div className="btn btn-outline-primary px-2 mx-2">About</div></Link>
       <Link to="/users"> <div className="btn btn-outline-primary px-2 mx-2">Users</div></Link>
      </div> */}
      <div className="sticky-top">
        <Navbar />
      </div>
      <button type="button" ref={navbarRef} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content upBlackShade">
            <div class="modal-header border-0 d-flex justify-content-end">
              <button type="button" style={{ backgroundColor: "#fff0", border: "none" }} data-bs-dismiss="modal">
                <i class="fa fa-times text-white" style={{ fontSize: '40px' }} aria-hidden="true"></i>

              </button>
            </div>
            <div class="modal-body border-0 text-center">
              <Link style={{ textDecoration: "none" }} onClick={() => navbarRef.current.click()} to="/agency"><h1 class="display-1 fw-bold text-light">AGENCY</h1></Link>
              <h1 class="display-1 fw-bold text-light">COURSES</h1>
              <h1 class="display-1 fw-bold text-light">GOOGLE ADS</h1>
              <h1 class="display-1 fw-bold text-light">FACEBOOK ADS</h1>
              <h1 class="display-1 fw-bold text-light">REVIEWS</h1>
            </div>
          </div>
        </div>
      </div>
      <div>


        <Switch>

          <Route path="/" exact>
            {/* <h1 className="text-center">Home Component</h1> */}
            <Home />
          </Route>

          <Route path="/agency" exact>
            <Agency />
          </Route>
          <Route path="/users" exact>
            <h1 className="text-center">Users Component</h1>
          </Route>
        </Switch>
      </div>
      <Footer />

    </>

  );
}

export default App;
