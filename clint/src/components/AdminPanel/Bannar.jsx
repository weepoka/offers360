import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "../Axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { Table } from "antd";
import api from "../ServerLink";
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
    img: null,
  });
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handelChange = (e) => {
    if (e.target.name === "img") {
      setData({
        ...data,
        img: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handelSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("url", data.url);
      formData.append("img", data.img);

      const response = await axios.post("/imgupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      document.getElementById("formFileSm").value = null;
      setData({
        url: "",
        img: null,
      });
      if (response.status === 200) {
        setTimeout(() => {
          fetchBannerData();
          toast.success("Successfully uploaded", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }, 200);
        const imageUrl = response.data;
        setLoading(false);
        setData({ url: "", img: null });
      } else {
        setLoading(false);
        toast.error("Error uploading", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error uploading", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const fetchBannerData = async () => {
    try {
      const response = await axios.get("/api/banner/allbannar");
      if (response.status === 200) {
        setTableData(response.data);
      }
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };
  useEffect(() => {
    fetchBannerData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await axios.post("/api/banner/bannarDeleteControllar", {
        id,
      });
      if (response.status === 200) {
        setTimeout(() => {
          fetchBannerData();
        }, 200);
        toast.success("Item deleted successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Error deleting item", {
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
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item", {
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

  const columns = [
    {
      title: "img",
      dataIndex: "img",
      key: "img",
      render: (text, record) => (
        <img
          src={`${api}${record.img}`}
          alt={record.img}
          style={{ maxWidth: "100px" }}
        />
      ),
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <a onClick={() => handleDelete(record._id)}>Delete</a>
      ),
    },
  ];

  return (
    <>
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
      <h1 className="text-center text-lg items-center font-bold py-4">
        Upload your Banner
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
          <div class="mb-3">
            <label
              for="formFileSm"
              class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            ></label>
            <input
              class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileSm"
              type="file"
              name="img"
              onChange={handelChange}
            />
          </div>
        </div>
        <div onClick={handelSubmit}>
          {loading ? (
            <LoadingButton loading loadingPosition="start" variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button variant="contained">Submit</Button>
          )}
        </div>
      </div>
      <Table
        columns={columns}
        expandable={{
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={tableData}
      />
    </>
  );
};

export default Bannar;
