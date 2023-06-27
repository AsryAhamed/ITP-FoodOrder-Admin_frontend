import "./newMenuList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const NewMenuList = ({ inputs, title }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    try {
      await axios.post("http://localhost:8000/api/menuList", data);
      navigate("/menuList");
      toast.success('Form submitted successfully!');
    } catch (err) {
      console.log(err);
      toast.error('Adding Failed');
    }
  };

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
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    name={input.id} // Add name attribute for registration
                    {...register(input.id, { required: true })} // Register input for validation
                  />
                  {errors[input.id] && (
                    <span className="error">This field is required</span>
                  )}
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

export default NewMenuList;