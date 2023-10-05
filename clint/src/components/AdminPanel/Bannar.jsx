import { TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "../Axios"; // Import Axios

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Bannar = () => {
  const [data, setData] = useState({
    url: "",
    img: null, // Store the selected image file here
  });

  const handelChange = (e) => {
    if (e.target.name === "img") {
      // Handle image file selection
      setData({
        ...data,
        img: e.target.files[0], // Store the selected image file
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handelSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("url", data.url);
      formData.append("img", data.img);

      // Use Axios to send the form data to the server
      const response = await axios.post("/imgupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for FormData
        },
      });

      if (response.status === 200) {
        const imageUrl = response.data; // Assuming the server returns the image URL
        // Handle the returned image URL as needed
        console.log("Image URL:", imageUrl);
      } else {
        console.error("Error uploading image");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-lg items-center font-bold py-4">
        Upload your Bannar
      </h1>
      <div className="flex justify-around items-center gap-y-5 md:flex-row flex-col">
        <TextField
          id="outlined-basic"
          label="Enter Your Link"
          name="url"
          placeholder="http://"
          variant="outlined"
          onChange={handelChange}
          value={data.url}
        />

        <div className="flex items-center">
          <label
            htmlFor="fileInput"
            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          >
            Upload Image
            <input
              onChange={handelChange}
              className="hidden"
              id="fileInput"
              type="file"
              name="img"
            />
          </label>
        </div>
        <div>
          <Button onClick={handelSubmit} variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Bannar;
