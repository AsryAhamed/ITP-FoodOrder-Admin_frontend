import React, { useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './Attendance.module.css'
import axiox from 'axios'
// import { error } from 'console'

function Attendance2() {
  const [data, setData ] = useState({name: "", position: "", employeeID: ""})
  // const [position, setPosition ] = useState("")
  // const [employeeID, setEmployeeID ] = useState("")

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    axiox.post('http://localhost:8000/api/attendance/', data)
    .then(response => {
      console.log(response.data);
      alert("Leave Application Submitted")
      setData({
        name: "",
        position: "",
        employeeID: ""
      })
    })
    .catch(error => {
      console.log(error)
      alert("Failed to apply")
    })
  }

  return (
    <div>

        <div>
          <Navbar />
        </div>
        <div className={Css.row1}>
          <div className={Css.col1}>
            <Sidebar />
          </div>
          <div className={Css.col2}>
          <div className={Css.cont}>
            <form className={Css.form} onSubmit={handleSubmit}>
              <div className={Css.r1c1}>
                <div className={Css.inp}>
                  <labal>
                    
                  </labal><br />
                  <input type='text' id='' name='name' placeholder='name with initial' className={Css.inp1}  onChange={handleChange}/>

                </div>

                <div className={Css.inp}>
                  <labal>
                   
                  </labal><br />
                  <input type='text' id='' name='position' placeholder='position' className={Css.inp1}  onChange={handleChange}/>
                </div>

                <div className={Css.inp}>
                  <label>
                   
                  </label><br />
                  <input type='text' id='' name='employeeID' placeholder=' Employee ID' className={Css.inp1}  onChange={handleChange}/>
                </div>
              </div>
              {/* <div className={Css.r1c2}>
                <div className={Css.inp}>
                  <label>
                    
                  </label><br />
                  <select className={Css.inp1}>
                    <option value='0'>Days of Leave</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </select>

                </div>

                <div className={Css.inp}>
                  <labal>
                    strating date
                  </labal><br />
                  <input type='date' className={Css.inp1} /><br />
                  <labal>
                    Ending date
                  </labal><br />
                  <input type='date' className={Css.inp1} />
                </div>
              </div>
              <div>
                <label>
                  Reasons
                </label><br />
                <textarea name="postContent" rows={10} cols={60} style={{ fontSize: '23px' }} />
              </div> */}
              <br/>
              <button style={{width:'150px',height:'40px',backgroundColor:'white' }}>Submit</button>
            </form>
            {/* <form className={Css.form} onSubmit={handleSubmit}>
                <input type='text' placeholder="  Enter Name" className={Css.inp} onChange ={e => setName(e.target.value)} />
                {error&&name.length<=0? <label>Name can't be empty</label>:""}
                <br/>
                <input type='text' placeholder="  Enter Email" className={Css.inp} onChange ={e => setEmail(e.target.value)} />
                {error&&email.length<=0? <label>Email can't be empty</label>:""}
                <br/>
                <input type='password' placeholder='  Enter password'className={Css.inp} onChange ={e => setPassword(e.target.value)}/>
                {error&&password.length<=0? <label>password can't be empty</label>:""}
                <br/>
                <button type='submit' className={Css.btn} ><b>Sign up</b></button>
               </form> */}
          </div>
          </div>
          
        </div>
      
    </div>
  )     
  }
export default Attendance2