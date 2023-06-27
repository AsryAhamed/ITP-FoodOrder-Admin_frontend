import "./UpdateProduct.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateProduct = ({ inputs, title }) => {

    const navigate = useNavigate();

    const [productData, setProductData] = useState({})
    const [getproductData, setGetProductData] = useState({});
    const [size, setSize] = useState("");

    const [file, setFile] = useState("");

    const location = useLocation()
    console.log(location)
    const ids = location.pathname.split("/")[3]
    console.log(ids)


    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/product/find/${ids}`)
          .then((res) => {
            setGetProductData(res.data);
            // alert(res.data.TextH)
          })
          .catch((err) => {
            console.log(err.data);
          });
      }, [ids]);
      
      const mergedData = inputs.map((item) => ({
        ...item,
        value: getproductData[item.id] || "",
      }));
      

    


    const updateProduct = async () => {
        // const { id } = payment;
        const sizesArray = size.split(",").map((s) => s.trim());
        
        const data = new FormData();
        data.append("file", file);

        console.log(productData)
        try {

            // const uploadRes = await axios.post(
            //     "https://api.cloudinary.com/v1_1/dbzy3p0c7/image/upload",
            //     data
            // );
        
            // const { url } = uploadRes.data;

            const newProduct = {
                ...productData,
                size: sizesArray,
                // photos: url,
            }

            const updateProduct = await axios.put(`http://localhost:8000/api/product/${ids}`, newProduct);
            navigate("/product")
            toast.success('Your data has been successfully updated!');
            
            console.log('Updated product:', updateProduct.data);
        } catch (err) {
            console.log(err);
            toast.error('Updating Failed')

        }
    };

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct();
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
                        <form onSubmit={handleSubmit}>
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
                            {/* ----------------------------------------------------------------------- */}
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
                            {/* ------------------------------------------------- */}
                            <div className="formInput">
                                <label htmlFor="size">Size (separated by commas)</label>
                                <input
                                    type="text"
                                    id="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                            </div>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
