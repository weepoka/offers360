import { Button, Input } from "antd";
import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    category: "technical",
    email: "",
    number: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-between md:flex-row flex-col gap-y-4 items-center gap-x-4">
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Technical support</h1>
          <Input
            onChange={handelChange}
            name="email"
            placeholder="Email"
            className="mb-2"
          />
          <Input
            onChange={handelChange}
            name="number"
            placeholder="Phone Number"
          />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Sales questions</h1>
          <Input onChange={handelChange} placeholder="Email" className="mb-2" />
          <Input onChange={handelChange} placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Press</h1>
          <Input onChange={handelChange} placeholder="Email" className="mb-2" />
          <Input onChange={handelChange} placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Bug report</h1>
          <Input onChange={handelChange} placeholder="Email" className="mb-2" />
          <Input onChange={handelChange} placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
