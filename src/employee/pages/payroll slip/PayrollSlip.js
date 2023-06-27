import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './PayrollSlip.module.css'
import useFetch from '../../../hooks/useFetch'


function PayrollSlip() {



  const eid = localStorage.getItem("eid")
  console.log(eid)

  const { data, loading, error } = useFetch(`http://localhost:8000/api/payroll/`);


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
        <h1 style={{marginBottom: "2rem"}}>payroll details</h1>
          {
            data.map((details, index) => {
              if (details.employeeId === eid) {
                return (
                  <>
                    <table border='1' width={1000}>
                      <tr >
                        <th>Data</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>Employee ID</td>
                        <td>{details.employeeId}</td>
                      </tr>
                      <tr>
                        <td>Basic salry</td>
                        <td>{details.basicSalary}</td>
                      </tr>
                      <tr>
                        <td>Meal Allowance</td>
                        <td>{details.mealAllowance}</td>
                      </tr>
                      <tr>
                        <td>Transportation Allowance</td>
                        <td>{details.transportationAllowance}</td>
                      </tr>
                      <tr>
                        <td>Medical Allowance</td>
                        <td>{details.medicalAllowance}</td>
                      </tr>
                      <tr>
                        <td>Retirement Insurance </td>
                        <td>{details.retirementInsurance}</td>
                      </tr>
                      <tr>
                        <td>EPF </td>
                        <td>{details.EPF}</td>
                      </tr>
                      <tr>
                        <td>ETF </td>
                        <td>{details.ETF}</td>
                      </tr>
                    </table>
               
                  </>
                )
              }
            })
          }
          

        </div>

      </div>
    </div>
  )
}

export default PayrollSlip