import React from 'react'
import css from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ReceiptIcon from '@mui/icons-material/Receipt';
function Sidebar({id}) {

const navLinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive ? 'bold' : 'normal'
      
    }
}

const handleLocalStorage = () => {
  localStorage.removeItem("eid")
  localStorage.removeItem("eidMongo")
}

const eidMongo = localStorage.getItem("eidMongo")
  console.log(eidMongo)

  return (
    <div className={css.sidebar}>
      <div className={css.containor}>
        <ul >
          
          <NavLink to={`/profile/${eidMongo}`} style={navLinkStyles}  >
            <li><PersonIcon sx={{ fontSize: 30 }} />  PROFILE</li>
          </NavLink>
          <NavLink to ="/attendance2" style={navLinkStyles}>
            <li><HowToRegIcon sx={{ fontSize: 30 }}/>ATTENDANCE</li>
          </NavLink>
          <NavLink to="/leaves" style={navLinkStyles}>
            <li><DirectionsWalkIcon sx={{ fontSize: 30 }}/> APPLY LEAVE</li>
          </NavLink>
          <NavLink to={`/payrollslip`} style={navLinkStyles}>
            <li><ReceiptIcon sx={{ fontSize: 30 }} /> PAYROLL SLIP</li>
          </NavLink>
          <NavLink to={`/`} style={navLinkStyles} onClick={handleLocalStorage}>
            <li><ReceiptIcon sx={{ fontSize: 30 }} /> Main Admin</li>
          </NavLink>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar