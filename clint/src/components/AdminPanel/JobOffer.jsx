import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import axios from "../Axios";
import { Table } from "antd";
import api from "../ServerLink";
import { ToastContainer, toast } from "react-toastify";
const JobOffer = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "logo",
      key: "Image",
      render: (text, record) => (
        <img
          src={`${api}${record.logo}`}
          alt={record.img}
          style={{ maxWidth: "100px" }}
        />
      ),
    },
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
      render: (_, record) => (
        <a onClick={() => handelDelet(record._id)}>Delete</a>
      ),
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
    formData.append("file", info.file);
    try {
      let data = await axios.post("/api/jobOffer/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setInfo({
        jobTitle: "",
        jobDescription: "",
        salary: "",
        link: "",
        file: null,
      });
      document.getElementById("formFileSm").value = null;
      setTimeout(() => {
        getjobOffer();
      }, 300);
      toast.success("Sucssefully Update", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Error creating job offer", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error creating job offer:", error);
    }
  };

  const [jobOffer, setJobOffer] = useState([]);

  const getjobOffer = async () => {
    let data = await axios.get("/api/jobOffer/getAll");
    setJobOffer(data.data);
  };
  useEffect(() => {
    getjobOffer();
  }, [jobOffer.length]);

  let handelDelet = async (id) => {
    try {
      let data = await axios.post("/api/jobOffer/delete", { id });

      toast.success("Sucssefully Deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        getjobOffer();
      }, 300);
    } catch (e) {
      toast.error("error Deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <h1 className="font-bold text-lg mb-4">Job Offer</h1>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        value={info.jobTitle}
        pauseOnHover
        theme="light"
      />
      <Input
        placeholder="Job Title"
        value={info.jobTitle}
        name="jobTitle"
        onChange={handelChange}
      />
      <div className="flex items-center mt-2">
        <input
          onChange={handelChange}
          name="file"
          type="file"
          className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          id="formFileSm"
          accept="image/*"
        />
      </div>
      <Input
        onChange={handelChange}
        placeholder="Job Description"
        className="mt-2"
        name="jobDescription"
        value={info.jobDescription}
      />
      <Input
        onChange={handelChange}
        placeholder="Salary"
        className="mt-2"
        name="salary"
        value={info.salary}
      />
      <Input
        onChange={handelChange}
        placeholder="https://"
        className="mt-2"
        name="link"
        value={info.link}
      />
      <Button onClick={handelSubmit} className="mt-2">
        Submit
      </Button>

      <Table className="mt-10" columns={columns} dataSource={jobOffer} />
    </>
  );
};

export default JobOffer;
