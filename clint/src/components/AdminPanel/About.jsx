import { Button, TextField } from "@mui/material";
import axios from "../Axios";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  let [data, setData] = useState({
    about: "",
    mission: "",
  });

  const handelChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handelSubmit = async () => {
    try {
      axios.post("/api/about/aboutController", data);
      toast.success("successfully updated", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setData((prevData) => ({
        ...prevData,
        about: "",
        mission: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col  gap-y-4">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h1 className="mb-10 text-lg font-bold text-center">About Us </h1>
        <TextField
          onChange={handelChange}
          fullWidth
          label="About us"
          id="fullWidth"
          name="about"
          value={data.about}
        />
        <TextField
          onChange={handelChange}
          fullWidth
          label="Our Mission"
          id="fullWidth"
          name="mission"
          value={data.mission}
        />
        <Button onClick={handelSubmit} variant="contained">
          Submit
        </Button>
      </div>
    </>
  );
};

export default About;
