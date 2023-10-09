import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import JobPagination from "./components/JobPagination";
import Admin from "./pages/admin";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/alljobs" element={<JobPagination />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
