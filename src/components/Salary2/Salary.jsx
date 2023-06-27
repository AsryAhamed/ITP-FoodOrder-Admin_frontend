import {useState} from 'react'
import css from './Salary.module.css';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import { toWords } from 'number-to-words';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Salary({Data}) {

    const [salary, setSalary]=useState();
    const [meal , setMeal] = useState();
    const [transport , setTransport] = useState();
    const [medical , setMedical] = useState();
    const [insurance , setInsurance] = useState();
    const [selectedDate, setSelectedDate] = useState(null);

    const navigate = useNavigate()
    


    var [TtlEarn , setTtlEarn] = useState();
    var [TtlRed , setTtlRed] = useState();
    var [Tax, setTax]=useState();
    var [Nsal, setNsal]=useState();
    var [SalT,setSalT]= useState();
    var [EPF, setEPF]=useState();
    var [ETF, setETF]=useState();

    console.log()

    function Calculation()
    {
        EPF= info.basicSalary* 8/100;
        ETF= info.basicSalary* 3/100;

        SalT=info.basicSalary-(-info.mealAllowance)-(-info.transportationAllowance)-(-info.medicalAllowance)-info.retirementInsurance-EPF-ETF;
        // SalT=info.basicSalary-(-info.mealAllowance)-(-info.transportationAllowance)-(-info.medicalAllowance)-info.retirementInsurance;
        console.log("hello"+SalT)
        /* alert("Salary is "+salary); */
        if(SalT>100){
            Tax=SalT* 6/100;
        }
      
        else{
            Tax=0;
        }

       

         TtlEarn= info.basicSalary-(-info.mealAllowance)-(-info.transportationAllowance)-(-info.medicalAllowance);
         TtlRed = info.retirementInsurance-(-Tax)-(-EPF)-(-ETF) ; 

        setSalT(SalT)
        setTax(Tax);
        setEPF(EPF);
        setETF(ETF);
        setTtlEarn(TtlEarn);
        setTtlRed(TtlRed);
   

        
         Nsal= TtlEarn - TtlRed ; 
       
       
        setNsal(Nsal);
        
    }

    // function NumberToWords(props) {
    //     const { number } = props;
    //     const words = toWords(number);
      
    //     return <div>{words}</div>;
    //   }


    // sending to mongoDB using input
    const [info, setInfo] = useState({})  //step 1

    const handleChange = (e) => {   //step 2
        setInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
    } 

    const handleClick = async (e) => {  //step 3
        e.preventDefault();
        const data = new FormData();
        data.append("upload_preset", "upload");
        try {
          const newPayroll = {
            ...info,
            Tax,
            EPF,
            ETF,
          };
          await axios.post("http://localhost:8000/api/payroll", newPayroll)
          navigate("/payroll")
        toast.success('Form submitted successfully!');
        } catch (err) {
          console.log(err);
          toast.error('Adding Failed')
        }
      } 

  return (
    <div class={css.container}>
        <ToastContainer />
        <div className={css.row}>
             <h2>{Data.TextP1}</h2>
             <h5>{Data.TextP2}</h5>
        </div>
        
        <div className={`${css.row} ${css.sah}`} style={{display:'flex'}}>
            <div className={css.col} style={{flex:1 } }>
                
                <div className='align' style={{ display: 'flex',  gap: '80px' , marginTop:'20px' , marginLeft:'10px', marginBottom:'10px'}}>

                {/* <h4>{Data.TextP3}</h4> */}
                {/* name */}
                {/* <input type="text" class="form-control" placeholder={Data.TextP5}/> */}
                </div>

                <div style={{ display: 'flex', gap: '34px' , marginLeft:'10px' }}>
                <h4>{Data.TextP4}</h4>
                {/* emp ID */}
                <input type="text" class="form-control" 
                placeholder={Data.TextP6}
                onChange={handleChange}
                id='employeeId'
                />
                </div>
            </div>


            <div className={css.col} style={{flex:1}}>

                <div style={{ display: 'flex', gap: '100px' , marginTop:'20px' , marginLeft:'10px', marginBottom:'10px' }}>
                {/* <h4>{Data.TextP7}</h4> */}
                {/* <input type="text" class="form-control" placeholder={Data.TextP9}/> */}
                </div>

                <div style={{ display: 'flex', gap: '48px' , marginLeft:'10px' }}>
                {/* <h4>{Data.TextP8}</h4> */}
                {/* <input type="text" class="form-control" placeholder={Data.TextP10}/> */}
                </div>
            </div>

        </div>

  

        <div className={css.row} style={{display:'flex'}}>

            <div className={css.col} style={{flex:1}}>
                <h4>{Data.TextP11}</h4>
               

            </div>

            <div className={css.col} style={{flex:1}}>
                <h4>{Data.TextP12}</h4>
               

            </div>
            <div className={css.col} style={{flex:1}}>
                <h4>{Data.TextP13}</h4>
                

            </div>


        </div>
        <div className={`${css.row} ${css.sah} ${css.saals}`} style={{display:'flex' , height:'350px'}  }>
        <div className={css.col} /* style={{flex:1.8}} */>

             <div className='align' style={{ display: 'flex',  gap: '640px' , marginTop:'20px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP14}</h4>
                {/* Basic Salary */}
                <input type="text" class="form-control" placeholder={Data.TextP20}

                //  onChange={(event)=>
                // {
                // setSalary(event.target.value);
                // }} 
                onChange={handleChange}
                id='basicSalary'
                />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '615px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP15}</h4>
                {/* Meal Allowance */}
                <input type="text" class="form-control" placeholder={Data.TextP21}

                // onChange={(event)=>
                // {
                // setMeal(event.target.value);
                // }}
                onChange={handleChange}
                id='mealAllowance'
                />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '546px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP16}</h4>
                {/* Transportation Allowance */}
                <input type="text" class="form-control" placeholder={Data.TextP22}

                // onChange={(event)=>
                // {
                //  setTransport(event.target.value);
                // }}
                onChange={handleChange}
                id='transportationAllowance'
                />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '595px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP17}</h4>
                {/* Medical Allowance */}
                <input type="text" class="form-control" placeholder={Data.TextP23}

                // onChange={(event)=>
                //  {
                //  setMedical(event.target.value);
                //  }}
                onChange={handleChange}
                id='medicalAllowance'
                 />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '1070px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP18}</h4>
                {/* Retirement Insurance */}
                <input type="text" class="form-control" placeholder={Data.TextP28}
                    //  onChange={(event)=>
                    //     {
                    //     setInsurance(event.target.value);
                    //     }}
                    onChange={handleChange}
                    id='retirementInsurance'
                />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '1198px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP19}</h4>
                {/* Tax */}
                <input type="text" class="form-control" placeholder={Data.TextP29} value={Tax}
                    onChange={handleChange}
                    id='Tax'
                />
             </div>

             <div className='align' style={{ display: 'flex',  gap: '1196px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP25}</h4>
                {/* EPF */}
                <input type="text" class="form-control" placeholder={Data.TextP21} value={EPF}
                    onChange={handleChange}
                    id='EPF'
                />
             </div>


             <div className='align' style={{ display: 'flex',  gap: '1196px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP44}</h4>
                {/* ETF */}
                <input type="text" class="form-control" placeholder={Data.TextP21} value={ETF} 
                    onChange={handleChange}
                    id='ETF'
                />
             </div>
               

            </div>



        </div>

        <div className={css.row} style={{display:'flex'}}>

        <div className={css.col} style={{flex:1}}>

            <div className='align' style={{ display: 'flex',  gap: '70px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP30}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP26} value={TtlEarn}/>
                
             </div>  

        </div>

        <div className={css.col} style={{flex:1}}>

            <div className='align' style={{ display: 'flex',  gap: '70px' , marginTop:'15px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP31}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP27} value={TtlRed}/>
            </div>   

        </div>

        <div className={css.col} style={{flex:1}}>

        <div className='align'  style={{   marginTop:'10px' , marginLeft:'10px', marginBottom:'0px' }}  >
            {/* calculate */}
        <button type="submit" onClick={Calculation} className="btn" style={{ padding: '0px 20px 0px 20px', height:'30px',width:'100px',backgroundColor: '#AC9B7E', color: '#000000', border: '1px solid black', borderRadius: '10px 10px 10px 10px', 
            fontSize: '16px', marginTop: '0px', cursor: 'pointer'}}>{Data.TextP24}</button>
        <button type="submit" onClick={handleClick} className="btn" style={{ padding: '0px 20px 0px 20px', height:'30px',width:'100px',backgroundColor: '#AC9B7E', color: '#000000', border: '1px solid black', borderRadius: '10px 10px 10px 10px', 
            fontSize: '16px', marginTop: '0px', cursor: 'pointer'}}>Send</button>
        </div>  
        

        </div>
           {/*  <div className={css.col} style={{flex:1}}>
                <h4>{Data.TextP32}</h4>
                

            </div> */}


        </div>

         <div className={` ${css.sah} ${css.saals}`} style={{display:'flex'}}>
            <div className={css.col} style={{flex:1}}>

            {/* <div className='align' style={{ display: 'flex',  gap: '150px' , marginTop:'25px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP33}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP37} 
                 value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              
                /> 
                
            </div> */}

            {/* <div className='align' style={{ display: 'flex',  gap: '168px' , marginTop:'25px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP34}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP38}/>
            </div> */}

            {/* <div className='align' style={{ display: 'flex',  gap: '110px' , marginTop:'25px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP35}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP39}/>
            </div> */}

            {/* <div className='align' style={{ display: 'flex',  gap: '142px' , marginTop:'25px' , marginLeft:'10px', marginBottom:'10px'}}>
                <h4>{Data.TextP36}</h4>
                <input type="text" class="form-control" placeholder={Data.TextP40}/>
            </div> */}
            </div>
            <div className={css.col} style={{flex:1}}>

            <div className={`${css.row} ${css.fath}`}>
                <h2>{Data.TextP41}</h2>
 
            </div>

            <div className={`${css.row} ${css.sag}`}>
            
            <input type="text" class="form-control" placeholder={Data.TextP42} value={Nsal} /* style={{ backgroundColor: '#afa189' }} */
            
           /*  onChange={(event)=>
            {
                setNsalWord(event.target.value);
            }} */
            />
            </div>

          {/*   <div className={`${css.row} ${css.shm}`}>
            <div>
                <NumberToWords number={NsalWord} />
        </div>
 
            </div> */}

            </div>


        </div>

            
          {/*   <div className={css.col} style={{flex:1}}>
                <h4>{Data.TextP37}</h4>
                <h4>{Data.TextP38}</h4>
                <h4>{Data.TextP39}</h4>
                <h4>{Data.TextP40}</h4>

            </div> */}
            

             

    

      </div>
  )
}

export default Salary
