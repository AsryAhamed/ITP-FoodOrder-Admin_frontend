import "./NewEvent.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const NewEvent = ({ inputs, title }) => {

  const [info, setInfo] = useState({});
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (data) => {
    alert("Hello submitted ");
    try {
      await axios.post("http://localhost:8000/api/event", data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    
    e.preventDefault();
    const data = new FormData();
    data.append("upload_preset", "upload");
    try {

      const newEvent = {
        ...info,

      };

      await axios.post("http://localhost:8000/api/event", newEvent);
      navigate("/event")
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
          <h1>{title} hello</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form  onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                  {...register(input.id, { required: true })}
                   
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                  {errors[input.id] && <span>This field is required.</span>}
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
