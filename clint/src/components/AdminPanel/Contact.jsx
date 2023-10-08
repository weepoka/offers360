import { Button, Input } from "antd";
import React, { useState } from "react";
import axios from "../Axios";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [technical, setTechnical] = useState({
    category: "technical",
    email: "",
    number: "",
  });
  const [sales, setSales] = useState({
    category: "sales",
    email: "",
    number: "",
  });

  const [bug, setBug] = useState({
    category: "bug",
    email: "",
    number: "",
  });
  const [presh, setPresh] = useState({
    category: "presh",
    email: "",
    number: "",
  });
  const handleTechnicalChange = (e) => {
    const { name, value } = e.target;
    setTechnical((prevTechnical) => ({ ...prevTechnical, [name]: value }));
  };

  const handleSalesChange = (e) => {
    const { name, value } = e.target;
    setSales((prevSales) => ({ ...prevSales, [name]: value }));
  };

  const handleBugChange = (e) => {
    const { name, value } = e.target;
    setBug((prevBug) => ({ ...prevBug, [name]: value }));
  };

  const handlePreshChange = (e) => {
    const { name, value } = e.target;
    setPresh((prevPresh) => ({ ...prevPresh, [name]: value }));
  };

  const handelSubmit = async (category) => {
    let data;

    // Use the category parameter to determine which state to send to the server
    if (category === "technical") {
      data = technical;
    } else if (category === "sales") {
      data = sales;
    } else if (category === "bug") {
      data = bug;
    } else if (category === "presh") {
      data = presh;
    }

    try {
      data = await axios.post("/api/contact/contactControllar", data);
      toast.success("succesfully Updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(data.data);
    } catch (error) {
      toast.error("error Updated", {
        position: "top-right",
        autoClose: 5000,
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
      <div className="flex justify-between md:flex-row flex-col gap-y-4 items-center gap-x-4">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ToastContainer />
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Technical support</h1>
          <Input
            onChange={handleTechnicalChange}
            name="email"
            placeholder="Email"
            className="mb-2"
          />
          <Input
            onChange={handleTechnicalChange}
            name="number"
            placeholder="Phone Number"
          />
          <Button onClick={() => handelSubmit("technical")} className="mt-2">
            Submit
          </Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Sales questions</h1>
          <Input
            name="email"
            onChange={handleSalesChange}
            placeholder="Email"
            className="mb-2"
          />
          <Input
            name="number"
            onChange={handleSalesChange}
            placeholder="Phone Number"
          />
          <Button onClick={() => handelSubmit("sales")} className="mt-2">
            Submit
          </Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Press</h1>
          <Input
            name="email"
            onChange={handlePreshChange}
            placeholder="Email"
            className="mb-2"
          />
          <Input
            name="number"
            onChange={handlePreshChange}
            placeholder="Phone Number"
          />
          <Button onClick={() => handelSubmit("presh")} className="mt-2">
            Submit
          </Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Bug report</h1>
          <Input
            name="email"
            onChange={handleBugChange}
            placeholder="Email"
            className="mb-2"
          />
          <Input
            name="number"
            onChange={handleBugChange}
            placeholder="Phone Number"
          />

          <Button onClick={() => handelSubmit("bug")} className="mt-2">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
