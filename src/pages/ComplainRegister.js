import { useState } from "react";
import mainbackground from "../assets/download.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../Responsive";


function ComplainRegister() {
    
  const [data, setdata] = useState({
    lname: "",
    service: "",
    problemstatement: "",
    image: "",
      mobilenumber: "",
    email:"",
    name:""
  });
    const [check, setcheck] = useState("false");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({
      ...data,
      [name]: value,
    });

    console.log(data);
  };

  const handleSubmit = async () => {
    console.log(data);
    try {
      console.log("mihir1");

      setcheck("true")

    } catch (error) {
      console.log(error);
    }
  };
  const handlecheck = async () => {
    console.log(data);
    try {
      console.log("mihir1");

      setcheck("true")

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ backgroundImage: `url(${mainbackground})` }}>
        <Navbar />
        <div className="complain-container">
          <h1>Register Complain</h1>
          <div className="inputfield">
            <label>Enter Library Name </label>
            <input
              name="lname"
              onChange={handleInput}
              value={data.lname}
              required
              type="text"
            />
          </div>
          <div className="inputfield">
            <label>Enter Service name </label>
            <input
              name="service"
              onChange={handleInput}
              value={data.service}
              required
              type="text"
            />
          </div>
          {check === "true" && (
            <>
              <div className="inputfield">
                <label>Enter Your Name </label>
                <input
                  name="name"
                  onChange={handleInput}
                  value={data.name}
                  required
                  type="text"
                />
              </div>
              <div className="inputfield">
                <label>Enter Your Mobile Number </label>
                <input
                  name="mobilenumber"
                  onChange={handleInput}
                  value={data.mobilenumber}
                  required
                  type="number"
                />
              </div>
              <div className="inputfield">
                <label>Enter Your Email </label>
                <input
                  name="email"
                  onChange={handleInput}
                  value={data.email}
                  required
                  type="email"
                />
              </div>
              <div className="inputfield">
                <label>Write Your problem </label>
                <input
                  name="problemstatement"
                  onChange={handleInput}
                  value={data.problemstatement}
                  required
                  type="text"
                />
              </div>
              <div className="inputfield">
                <label>Upload Photo Of Error </label>
                <input
                  accept="image/jpeg, image/png"
                  name="image"
                  onChange={handleInput}
                  value={data.image}
                  type="file"
                />
              </div>
              <div className="inputfield">
                <button type="button" onClick={handleSubmit} className="btn ">
                  Submit
                </button>
              </div>
            </>
          )}

          {check === "false" && (
            <div className="inputfield">
              <button type="button" onClick={handlecheck} className="btn ">
                Check
              </button>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
export default ComplainRegister;
