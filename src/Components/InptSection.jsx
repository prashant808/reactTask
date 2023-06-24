import React, { useState } from "react";
import evelope from "../imgs/envelope.png";
function InptSection() {
  const [email, setemail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    console.log(errors);
    setemail("");
  };
  const handleChange = (event) => {
    setemail(event.target.value);
  };

  return (
    <>
      <div className="container">
        <hr className="hr mt-50"></hr>
      </div>
      <div className="container">
        <div
          className=""
          style={{ background: "#000000", borderRadius: "14px" }}
        >
          <div className="row">
            <div className="col-1 flex2 ">
              <div className="enve">
                <img src={evelope} alt="envelope" />
              </div>
            </div>

            <div className="col-5 ">
              <div className="center inpttext">
                <p style={{ color: "#FFFFFFD8" }}>
                  Get industry update with our daily newsletter
                </p>
                <h3>
                  <a href="/" style={{ color: "#FFFFFF" }}>
                    Subscribe Now !
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-6">
              <form className="form " onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={email}
                  className="inputfld"
                />

                <button type="submit" className="button Montbold">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InptSection;
