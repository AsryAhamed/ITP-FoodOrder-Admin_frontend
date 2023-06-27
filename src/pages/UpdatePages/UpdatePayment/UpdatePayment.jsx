import "./updatePayment.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const UpdatePayment = ({ inputs, title }) => {

  const [paymentData, setPaymentData] = useState({})
  const navigate = useNavigate()
  const [getpaymentData, setGetPaymentData] = useState({});
  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/payment/find/${ids}`)
      .then((res) => {
        setGetPaymentData(res.data);
        // alert(res.data.TextH)
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, [ids]);
  
  const mergedData = inputs.map((item) => ({
    ...item,
    value: getpaymentData[item.id] || "",
  }));


  const updatePayment = async () => {
    // const { id } = payment;

    console.log(paymentData)
    try {
      const updatedPayment = await axios.put(`http://localhost:8000/api/payment/${ids}`, paymentData);
      navigate("/payment")
      toast.success('Your data has been successfully updated!');

      console.log('Updated payment:', updatedPayment.data);
    } catch (err) {
      console.log(err);
      toast.error('Updating Failed')

    }
  };

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePayment();
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

export default UpdatePayment;
