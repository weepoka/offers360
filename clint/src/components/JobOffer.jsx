import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "./Axios";
import api from "./ServerLink";
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
  return (
    <>
      <h2 className="text-center text-3xl font-semibold my-10">
        Most Recent Job Offer
      </h2>
      <div className="container mx-0 px-5">
        <div className="flex flex-wrap justify-around gap-x-5 gap-y-8">
          {jobOffer.map((item) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-[250px]">
              <div className="px-6 py-4">
                <div>
                  <h2 className="font-bold text-xl mb-2">{item?.jobTitle}</h2>
                  <img
                    className="h-[90px] mx-auto"
                    src={`${api}${item?.logo}`}
                    alt="png"
                  />
                </div>
                <p className="text-gray-700 text-base">
                  {item?.jobDescription}
                </p>
                <p className="text-green-600 text-lg font-semibold mt-2">
                  {item?.salary}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a
                  href={item?.link}
                  className="bg-secondory hover:bg-[#f56e45] text-white font-semibold py-2 px-4 rounded-full inline-block w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
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
