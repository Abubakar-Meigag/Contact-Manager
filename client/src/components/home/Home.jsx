import React from "react";
import Form from "../form/Form";
import Nav from "../nav/Nav";
import Side from "../sidebar/Side";
import Contact from "../contact-info/Contact";
import Footer from "../footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 border border-dark">
      <div className="home-box border border-dark">
        <div className="row">
          {/* Navbar */}
          <div className="col-12">
            <Nav />
          </div>
        </div>
        <div className="row mt-3">
          {/* Sidebar */}
          <div className="col-md-4 border border-dark">
            <Side />
          </div>
          {/* Form and Contact */}
          <div className="col-md-8">
            <div className="border border-dark">
              <Form />
            </div>
            <div className="border border-dark">
              <Contact />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
