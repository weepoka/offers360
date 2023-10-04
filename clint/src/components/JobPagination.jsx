import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const JobPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Dummy job post data for demonstration
  const jobPosts = [
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    {
      title: "StartACareerToday - Amazon From Home jobs",
      description: "Sign up and find Amazon jobs from home!",
      price: "$15-35 Per hour",
      img: "./assets/amazon.png",
    },
    // Add more job posts here
  ];

  // Number of job posts to display per page
  const postsPerPage = 25;

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const displayedJobPosts = jobPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between md:flex-row items-center flex-col  md:px-9 my-3">
        <h1 className="md:text-[35px] py-5 md:py-0 text-center font-semibold  text-[25px]">
          Job Offers
        </h1>
        <div class="mb-3">
          <div class="relative mb-4 flex md:w-[340px] w-[300px] flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#f56e45] focus:text-neutral-700 focus:shadow-[#f56e45] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              class="relative z-[2] flex items-center rounded-r bg-[#ff6348] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {displayedJobPosts.map((jobPost, index) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-[250px]">
            <div className="px-6 py-4">
              <div>
                <h2 className="font-bold text-xl mb-2">{jobPost.title}</h2>
                <img src={jobPost.img} alt="png" />
              </div>
              <p className="text-gray-700 text-base">{jobPost.description}</p>
              <p className="text-green-600 text-lg font-semibold mt-2">
                {jobPost.price}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a
                href="https://go4affm.com/c/?p=30640&o=7479"
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

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(jobPosts.length / postsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={
          "pagination mt-4 text-center gap-x-[5px] mx-auto justify-center items-center flex"
        }
        activeClassName={"active"}
        previousClassName={
          "border border-[#ff6348] rounded-md bg-[#ff6348] hover:bg-[#ff6310] text-white py-2 px-2 "
        }
        nextClassName={
          "border border-[#ff6348] rounded-md bg-[#ff6348] hover:bg-[#ff6310] text-white py-2 px-2 "
        }
      />
    </div>
  );
};

export default JobPagination;
