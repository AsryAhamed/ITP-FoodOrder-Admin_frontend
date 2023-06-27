import "./NewBlog.scss";
//import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";


const NewBlog = ({ inputs, title }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [info, setInfo] = useState({});

  // const handleChange = (e) => {
  //   setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const onSubmit = async (e) => {
  //   alert("Hello submitted")
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("upload_preset", "upload");
  //   try {

  //     const newUser = {
  //       ...info,

  //     };

  //     await axios.post("http://localhost:8000/api/blog", newUser);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const onSubmit = async (data) => {
    alert("Hello submitted ");
    try {
      await axios.post("http://localhost:8000/api/blog", data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title} hello</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id} >
                  <label>{input.label}</label>
                  <input
                    {...register(input.id, { required: true })}
                   // onChange={handleChange}
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

export default NewBlog;
