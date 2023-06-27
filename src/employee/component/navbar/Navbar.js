import React from 'react'
import css from './Navbar.module.css'

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
function Navbar() {
  return (
    <nav>
          
        <div className={css.my}>
            
            <div className={css.icon}>
                <div >
                    <h1 style={{paddingLeft:"20px"}}>Emplyee Managment</h1> 
                    {/* style={{textAlign:"left"}} */}
                </div>

                
                
                <div className={css.icon2}>
                    
                    <h2>Empolyee</h2>
                    <AccountCircleSharpIcon sx={{ fontSize: 70 }}/>     
                    
                </div>
         
            </div>
        </div>
    </nav>
  )
}

export default Navbar