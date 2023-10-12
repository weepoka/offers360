import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileImageOutlined,
  ProfileOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Layout, Menu, Button, theme } from "antd";
import Bannar from "../components/AdminPanel/Bannar";
import About from "../components/AdminPanel/About";
import Contact from "../components/AdminPanel/Contact";
import JobOffer from "../components/AdminPanel/JobOffer";
import { MdWork } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../userSlice/authSlice";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1"); // Initialize with the default menu item

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };
  const dishpath = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state);
  useEffect(() => {
    if (
      selector.user.user?.email &&
      "mizanurrahmansagar8@gmail.com" &&
      "mizanurrahmansagar8@gmail.com"
    ) {
      return navigate("/admin");
    } else {
      return handelLogout();
    }
  }, []);
  const handelLogout = () => {
    localStorage.removeItem("user");
    dishpath(activeUser(null));
    navigate("/login");
  };

  let content = null;

  switch (selectedMenuItem) {
    case "1":
      content = <Bannar />;
      break;
    case "2":
      content = <About />;
      break;
    case "3":
      content = <Contact />;
      break;
    case "4":
      content = <JobOffer />;
      break;
    case "5":
      handelLogout();
      break;
    default:
      content = <div>Default Content</div>;
  }

  return (
    <Layout
      className="flex md:!flex-row !flex-col "
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        className="!w-full !max-w-full md:!max-w-[200px] md:!min-w-[200px] !min-w-full"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="py-[30px] text-center  text-[white]">
          <h2 className="px-5">JobOffers 360</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onClick={({ key }) => handleMenuItemClick(key)}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FileImageOutlined />,
              label: "Bannar",
            },
            {
              key: "2",
              icon: <ProfileOutlined />,
              label: "About",
            },
            {
              key: "3",
              icon: <ContactsOutlined />,
              label: "Contact",
            },
            {
              key: "4",
              icon: <MdWork />,
              label: "JobOffer",
            },
            {
              key: "5",
              icon: <BiLogOut />,
              label: "LogOut",
            },
          ]}
        />
      </Sider>
      <Layout
        className=" md:!w-auto !w-full   "
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="!p-0 !m-0 md:!p-6 md:!m-6"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
