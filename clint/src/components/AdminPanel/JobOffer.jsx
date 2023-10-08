import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "../Axios";
import { Table } from "antd";

const JobOffer = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Description",
      dataIndex: "jobDescription",
      key: "jobDescription",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];

  const [info, setInfo] = useState({
    jobTitle: "",
    jobDescription: "",
    salary: "",
    link: "",
    file: null,
  });

  const handelChange = (e) => {
    if (e.target.name === "file") {
      setInfo({ ...info, file: e.target.files[0] });
    } else {
      let { name, value } = e.target;
      setInfo({ ...info, [name]: value });
    }
    console.log(info);
  };

  const handelSubmit = async () => {
    const formData = new FormData();
    formData.append("jobTitle", info.jobTitle);
    formData.append("jobDescription", info.jobDescription);
    formData.append("salary", info.salary);
    formData.append("link", info.link);
    formData.append("file", info.file); // Make sure the field name is "file"

    try {
      let data = await axios.post("/api/jobOffer/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      });
      console.log(data.data);
    } catch (error) {
      console.error("Error creating job offer:", error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-lg mb-4">Job Offer</h1>
      <Input placeholder="Job Title" name="jobTitle" onChange={handelChange} />
      <div className="flex items-center mt-2">
        <input
          onChange={handelChange}
          name="file"
          type="file"
          className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          id="formFileSm"
          accept="image/*" // Add this if you want to accept image files
        />
      </div>
      <Input
        onChange={handelChange}
        placeholder="Job Description"
        className="mt-2"
        name="jobDescription"
      />
      <Input
        onChange={handelChange}
        placeholder="Salary"
        className="mt-2"
        name="salary"
      />
      <Input
        onChange={handelChange}
        placeholder="https://"
        className="mt-2"
        name="link"
      />
      <Button onClick={handelSubmit} className="mt-2">
        Submit
      </Button>

      <Table
        className="mt-10"
        columns={columns}
        dataSource={[]} // Replace with your data source
      />
    </>
  );
};

export default JobOffer;
