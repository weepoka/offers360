import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import axios from "../components/Axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { activeUser } from "../userSlice/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.user);
  console.log(selector);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  let handelChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({ ...error, email: "", password: "" });
    console.log(data);
  };
  useEffect(() => {
    if (selector?.user?.email) {
      navigate("/admin");
    }
  }, []);
  const handelSubmit = async () => {
    if (!data.email) {
      setError({ email: "Please enter your email" });
    } else if (!data.password) {
      setError({ email: "Please enter your password" });
    } else {
      try {
        let res = await axios.post("/api/auth/login", data);
        if (res.data) {
          toast.success("Successfully Login", {
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
        dispatch(activeUser(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/admin");
      } catch (error) {
        toast.error("Authentication Error", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
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
        <div className="flex flex-col  gap-y-5 w-[80%] md:w-[30%] px-4 py-2">
          <div className="w-[200px] mx-auto">
            <img src="./assets/logo360.png" alt="" />
          </div>
          {error && <p className="text-center text-red-600">{error.email}</p>}
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            onChange={handelChange}
          />
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={handelChange}
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            onClick={handelSubmit}
            sx={{
              backgroundColor: "#ff6348",
              "&:hover": {
                backgroundColor: "#ff6340",
              },
            }}
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
