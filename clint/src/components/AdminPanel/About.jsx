import { Button, TextField } from "@mui/material";

import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col  gap-y-4">
        <h1 className="mb-10 text-lg font-bold text-center">About Us </h1>
        <TextField fullWidth label="About us" id="fullWidth" />
        <TextField fullWidth label="Our Mission" id="fullWidth" />
        <Button variant="contained">Submit</Button>
      </div>
    </>
  );
};

export default About;
