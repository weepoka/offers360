import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import axios from "./Axios";
import api from "./ServerLink";
import Grid from "@mui/material/Grid";

const JobOffer = () => {
  const [jobOffer, setJobOffer] = useState([]);
  const fatchData = async () => {
    try {
      let data = await axios.get("/api/jobOffer/getAll");
      const rev = data.data.reverse();
      const first12items = rev.slice(0, 12);
      setJobOffer(first12items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length <= wordCount) {
      return text;
    }
    return words.slice(0, wordCount).join(" ") + "...";
  };
  return (
    <>
      <h2 className="text-center md:text-3xl text-xl font-semibold md:my-10 my-5">
        Most Recent Job Offer
      </h2>
      <div className="container mx-0 px-5  bg-white">
        {/* <div className="flex flex-wrap justify-around gap-x-5 gap-y-8"> */}

        <Grid container spacing={2}>
          {jobOffer.map((item) => (
            <Grid item xs={6} md={3}>
              <div className="bg-white relative shadow-lg rounded-lg h-[250px] md:h-[350px] overflow-hidden mx-auto max-w-[250px]">
                <div className="md:px-6 px-2 md:py-4 py-2 ">
                  <div>
                    <h2 className="font-bold md:text-base    text-sm mb-2">
                      {truncateText(item?.jobTitle, 9)}
                    </h2>
                    <img
                      className="md:h-[90px] h-[50px] mx-auto"
                      src={`${api}${item?.logo}`}
                      alt="png"
                    />
                  </div>
                  <p className="text-gray-700 md:text-base text-xs mt-2 md:mt-0">
                    {truncateText(item?.jobDescription, 15)}
                  </p>
                  <p className=" md:text-base text-xs font-semibold mt-2">
                    {item?.salary} $
                  </p>
                </div>
                <div className="md:px-6 flex items-center justify-center px-1  mx-0 text-center md:pt-4 pt-1 md:pb-2 pb-1 absolute bottom-2 w-full ">
                  <a
                    href={item?.link}
                    className="bg-transparent transition-colors border-[#f56e45] border text-[#f56e45] mx-auto hover:bg-[#f56e45] hover:text-white md:font-semibold md:py-2 md:px-4 rounded-full inline-block md:text-lg !text-sm md:w-full w-auto px-2 py-1   text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* </div> */}
        <div className="text-center md:my-10 my-5 ">
          <Link to="/alljobs?page=2">
            <Button
              sx={{ border: "1px solid #ff6348", color: "#ff6348" }}
              variant="outlined"
            >
              See More Job
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobOffer;

// i get jobOffer in mongodbo but i need to show last array item in front of item list how to do this
