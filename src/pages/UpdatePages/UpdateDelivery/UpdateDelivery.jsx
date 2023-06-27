import "./UpdateDelivery.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const UpdateDelivery = ({ inputs, title }) => {

  const [deliveryData, setDeliveryData] = useState({})
  const navigate = useNavigate()
  const [getDeliveryData, setGetDeliveryData] = useState({});

  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)
//   const data = location.state.data
//   console.log(data)

  useEffect(() => {
  axios
    .get(`http://localhost:8000/api/delivery/find/${ids}`)
    .then((res) => {
      setGetDeliveryData(res.data);
      // alert(res.data.TextH)
    })
    .catch((err) => {
      console.log(err.data);
    });
    }, [ids]);

    const mergedData = inputs.map((item) => ({
    ...item,
     value: getDeliveryData[item.id] || "",
}));

  const updateDelivery = async () => {
    // const { id } = MenuList;

    console.log(deliveryData)
    try {
      const updatedDelivery = await axios.put(`http://localhost:8000/api/delivery/${ids}`, deliveryData);
        navigate("/delivery")
        toast.success('Your data has been successfully updated!');

      
      console.log('Updated Blog:', updatedDelivery.data);
    } catch (err) {
      console.log(err);
      toast.error('Updating Failed');

    }
  };

  const handleChange = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDelivery();
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
                  />
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

export default UpdateDelivery;
