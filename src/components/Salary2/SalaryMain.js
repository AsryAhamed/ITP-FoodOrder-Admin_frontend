import React from 'react'
import data from './SalaryDB'
import Salary from './Salary'

function SalaryMain() {
  return (
    <div>
      <div>
      {
        data.map(Data=>{
            return <div><Salary Data={Data}/> </div>
        })
      }
    </div>
    </div>
  )
}

export default SalaryMain
