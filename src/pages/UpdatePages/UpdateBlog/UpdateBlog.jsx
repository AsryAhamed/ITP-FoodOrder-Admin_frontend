import "./UpdateBlog.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateBlog = ({ inputs, title }) => {

  const [blogData, setBlogData] = useState({})
  const navigate = useNavigate()
  const [getBlogData, setGetBlogData] = useState({});
   //const [blogData, setBlogData] = useState();
  // const { register, handleSubmit, formState: { errors }, trigger, setValue } = useForm();

  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)
//   const data = location.state.data
//   console.log(data)



useEffect(() => {
  axios
    .get(`http://localhost:8000/api/blog/find/${ids}`)
    .then((res) => {
      setGetBlogData(res.data);
      // alert(res.data.TextH)
    })
    .catch((err) => {
      console.log(err.data);
    });
}, [ids]);

const mergedData = inputs.map((item) => ({
  ...item,
  value: getBlogData[item.id] || "",
}));

// const getBlogDetails = () => {
//   axios
//     .get(`http://localhost:8000/api/blog/find/${ids}`)
//     .then((res) => {
//       console.log(res.data);
//       setBlogList(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const mergedArray = inputs.map((item) => ({
//   ...item,
//   [item.id]: bloglist[item.id] || "",
// }))
//console.log("mergedArray", mergedArray);

  const updateBlog = async () => {
    // const { id } = MenuList;

    console.log(blogData)
    try {
      const updatedBlog = await axios.put(`http://localhost:8000/api/blog/${ids}`, blogData);
        navigate("/blog")
        toast.success('Your data has been successfully updated!');
        
      console.log('Updated Blog:', updatedBlog.data);
    } catch (err) {
      console.log(err);
      toast.error('Updating Failed')

    }
  };
  

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // //e.preventDefault();
    // const fieldName = Object.keys(data)[0]; // Get the field name of the current input
    // setBlogData(data);
    // setValue(fieldName, data[fieldName]); // Update the form value for the current field
    // const isValid = await trigger(fieldName); // Trigger validation only for the current field
    // if (isValid) {
    //   updateBlog();
    // }
    e.preventDefault();
    updateBlog();
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
            <form onSubmit={handleSubmit}>
              {mergedData.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                 
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    defaultValue={input.value}
                    //{...register(input.id, { required: true })}
                   // value={bloglist?.id}
                  />
                {/* {errors[input.id] && <span>This field is required.</span>} */}
                </div>
              ))}
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
