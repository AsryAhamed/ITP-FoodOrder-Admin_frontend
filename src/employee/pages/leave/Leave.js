import { useState, React } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './Leave.module.css'
import {options} from './Data'
import axios from 'axios'

function Leave() {
  const [name, setName] = useState("")
  const [employeeID, setEmployeeID] = useState("")
  const [position, setPosition] = useState("")
  const [stratingDate, setStartingDate] = useState("")
  const [endingDate, setEndingDate] = useState("")
  const [reason, setReason] = useState("")
  const [leave, setLeave] = useState("Days of Leave")
  const[submittedData, setSubmittedData] = useState([])

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleEmplyeeID = (event) => {
    setEmployeeID(event.target.value)
  }

  const handlePosition = (event) => {
    setPosition(event.target.value)
  }

  const handleStartingDate = (event) => {
    setStartingDate(event.target.value)
  }

  const handleEndingDate = (event) => {
    setEndingDate(event.target.value)
  }
  const handleReason = (event) => {
    setReason(event.target.value)
  }
  const handleLeave = (event) => {
    setLeave(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const details = {
      name,
      position,
      employeeID,
      stratingDate,
      endingDate,
      leave,
      reason
    }
    console.log(details)
    try {
      const response = await axios.post('http://localhost:8000/api/leave/', details);
      console.log('Response:', response.data);
      if(response){
        alert("Data Sucessful")
      }
      setSubmittedData(response.data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  // const [leave, setLeave] = useState('')

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
                  <input type='text' value={name} id='' name='name' placeholder='name with initial' className={Css.inp1} onChange={handleName}/>

                </div>

                <div className={Css.inp}>
                  <labal>

                  </labal><br />
                  <input type='text' id='' value={position} name='position' placeholder='position' className={Css.inp1} onChange={handlePosition}/>
                </div>

                <div className={Css.inp}>
                  <label>

                  </label><br />
                  <input type='text' id='' value={employeeID} name='employeeID' placeholder=' Employee ID' className={Css.inp1} onChange={handleEmplyeeID}/>
                </div>
              </div>
              <div className={Css.r1c2}>
                <div className={Css.inp}>
                  <label>

                  </label><br />
                 
                  <select value={leave} className={Css.inp1} onChange={handleLeave}>
                    {options.map((option) => (
                      <option key={option.id} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                </div>

                <div className={Css.inp}>
                  <labal>
                    strating date
                  </labal><br />
                  <input type='date'name='stratingDate' className={Css.inp1} value={stratingDate} onChange={handleStartingDate} /><br />
                  <labal>
                    Ending date
                  </labal><br />
                  <input type='date'name='endingDate' className={Css.inp1} value={endingDate} onChange={handleEndingDate} />
                </div>
              </div>
              <div>
                <label>
                  Reasons
                </label><br />
                <textarea name="reason" rows={5} cols={60} style={{ fontSize: '23px' }} value={reason}  onChange={handleReason}/>
              </div>
              <button style={{ width: '150px', height: '40px', backgroundColor: 'rgb(172, 61, 194)' }}>Apply</button>
            </form>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Leave