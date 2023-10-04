import { Button, Input } from "antd";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-between md:flex-row flex-col gap-y-4 items-center gap-x-4">
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Technical support</h1>
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4"> Sales questions</h1>
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Press</h1>
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
        <div className="w-[300px] text-center">
          <h1 className="font-bold mb-4">Bug report</h1>
          <Input placeholder="Email" className="mb-2" />
          <Input placeholder="Phone Number" />
          <Button className="mt-2">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
