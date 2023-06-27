import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './Home.module.css'
import WorkIcon from '@mui/icons-material/Work';
import { Slider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


function Profile() {

  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[2]

  

  const { data, loading, error } = useFetch(`http://localhost:8000/api/addEmpo/find/${ids}`);

  localStorage.setItem("eid", data.eId)
  localStorage.setItem("eidMongo", ids)


  



  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={Css.row1}>
        <div className={Css.col1}>
          <Sidebar id={ids} />
        </div>
        <div className={Css.col2}>
          <div className={Css.col2row1}>
            <div className={Css.c2}>
              <div className={Css.det}>
                <div className={Css.img}>
                  <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' alt='photo wa kaanam' style={{ height: "250px", width: "200px", borderRadius: "1.5em" }}></img>

                </div>
                <div className={Css.img}>
                  <span style={{ fontSize: "35px", color: "black" }} >{data.name}</span><br />
                  <span style={{ fontSize: "25px", color: "GrayText" }}>{data.nationality}<br /><br />
                    {data.NIC}</span><br />
                  <p style={{fontWeight:"bold"}}>{data.address}</p>
                  <p>
                    There are many characteristic to be a good manager like being warmth and competence, good teamwork skills, superior in communication skills, leading with transparency and honesty, an expert in the field, accountability, cool under pressure and last but not least lead by example.
                  </p>
                  
                </div>
              </div>
            </div>
          </div><br /><br />
          <div className={Css.col2row2}>
            <div className={Css.statusbar1}>
              <div style={{ fontSize: '20px', padding: '10px 10px 10px 10px', display: 'flex' }} >

                <div>
                  <h1>Job Details</h1><br />
                  <div style={{ color: 'GrayText' }}>
                    <h4 >Employment type : <span>Permenent</span></h4>
                    <h4 >Joining Date : 17.03.2023</h4>
                    <h4 >Position : Manager</h4>

                  </div>
                </div>

              </div>
            </div>
            <div className={Css.statusbar1}>
              <div style={{ fontSize: '20px', padding: '10px 10px 10px 10px' }} >
                <div>
                  <h1>Personal Details</h1><br />
                  <div style={{ color: 'GrayText' }}>
                    <h4 >Gender : <span>Male</span></h4>
                    <h4 >Date Of Birth : {data.dob}</h4>
                    <h4 >Natianolity : 
                      










                      
                    </h4>

                  </div>
                </div>
              </div>
            </div>
            <div className={Css.statusbar1}>
              <div style={{ fontSize: '20px', padding: '10px 10px 10px 10px' }} >
                <div>
                  <h1>Educational Details</h1><br />
                  <div style={{ color: 'GrayText' }}>
                    <h4 >Degree : <span>Phd in Financial Managment</span></h4>
                    <h4 >University : SLIIT</h4>
                    <h4 ></h4>

                  </div>
                </div>
              </div>
            </div>
            {/* <div className={Css.statusbar1}>
              <WorkIcon /><h1>job details</h1>
              <h4 style={{ color: 'GrayText' }}>Employment type : <span>Permenent</span></h4>

            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile