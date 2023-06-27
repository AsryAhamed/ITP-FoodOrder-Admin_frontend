import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {

  const navigate = useNavigate()

  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const [size, setSize] = useState("");

  const [prices, setPrices] = useState([
    { size: "", price: "" },
    { size: "", price: "" },
    { size: "", price: "" },
  ]);

  // const handleSizeChange = (event) => {
  //   const { value } = event.target;
  //   const newSizes = value.split(',');
  //   setSizes(newSizes);
  // };

  const handlePriceChange = (index, event) => {
    const { name, value } = event.target;
    const newPrices = [...prices];
    newPrices[index][name] = value;
    setPrices(newPrices);
  };

  const { data, loading, error } = useFetch("/products");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleSelect = (e) => {
  //   const value = Array.from(
  //     e.target.selectedOptions,
  //     (option) => option.value
  //   );
  //   setPrices(value);
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const sizesArray = size.split(",").map((s) => s.trim());
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dbzy3p0c7/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newProduct = {
        ...info,
        size: sizesArray,
        photos: url,
        prices,
      };

      await axios.post("http://localhost:8000/api/product", newProduct);
      navigate("/product")
      toast.success('Form submitted successfully!');
    } catch (err) {
      console.log(err);
      toast.error('Adding Failed')
    }
  };

  console.log(info);
  return (
    <div className="new">
      <Sidebar />
      <ToastContainer />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            {/* -------------------------------------------------- */}
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              {/* -------------------------------------------------------------------------------------- */}
              <div className="formInput">
                <label htmlFor="size">Size (separated by commas)</label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>

              {/* -------------------------------------------------------------------------------------- */}

              {prices.map((price, index) => (
                <div key={index}>
                  <label htmlFor="size">Price (Size and Price)</label>
                  <input
                    type="text"
                    name="size"
                    value={price.size}
                    onChange={(event) => handlePriceChange(index, event)}
                  />
                  <input
                    type="number"
                    name="price"
                    value={price.price}
                    onChange={(event) => handlePriceChange(index, event)}
                  />
                </div>
              ))}


              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;