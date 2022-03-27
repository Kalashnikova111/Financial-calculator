import React from 'react';
 import styles from './Calculator.module.scss';
//  import input-name from "input";
//  import Calculator from "./index";

// import Calculator from "./Calculator";

const incomeSalary=document.getElementById('income-salary'),
      incomeExtra1=document.getElementById('income-extra-1'),
      incomeExtra2=document.getElementById('income-extra-2');

const costsFlat=document.getElementById('costs-flat'),
     constsHouseServices=document.getElementById('costs-house-services'),
     constsTransport=document.getElementById('costs-transport'),
      constsCredit=document.getElementById('consts-food');

const totalMonthInput=document.getElementById('total-month'),
      totalDayInput=document.getElementById('total-day'),
      totalYearInput=document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

const moneyBoxRange = document.getElementById('money-box-rabge'),
      accumulationInput = document.getElementById('accumulation'),
      span = document.getElementById('spend');

let accumulation=0;
let totalPrecents=0;


const inputs= document.querySelectorAll ('.input');
for( item of inputs) {

   //соб. обнов. проверка 
   item.addEventListener('input',()=>{
      // console.log('run');
      // countingAvailableMoney();
   })
}

// const countingAvailableMoney= ()=>{

// }



function Calculator() 
{
  
   return(
      
      <div className={styles.calculator}>
              <div className='d-flex'>
        <h6>Обязательные расходы</h6>
        </div>
        <lu >
           <li>
           <input type="number"placeholder="Аренда квартиры"id="costs-flat"
        class="input"
        />
      
        
        <input  type="number" placeholder="ЖКХ" id="costs-house-services"
        class="input"
        />
        
        
        <input type="number" placeholder="Транспорт"id="costs-transport"
class="input"
        />
        
       
        <input type="number"placeholder="Еда" id="costs-food"
        class="input"
        /> 
           </li>
        </lu>
        
          <form className=''>
          <h6>Доход в месяц</h6>
          <div className=''>
     
           {/* <input onChange={onChangeSearchInput} placeholder="Зарплата"/> */}
           <input  type="number"className="form-inline"placeholder="Зарплата"id="income-salary"
     class="input"
    />
            

     {/* <input name='freelance' type="number" className="form-inline" placeholder="Фриланс"id="income-freelance"
        
     /> */}
     
     <input name='extra-1'  type="number" placeholder="Доп.доход" id="income-extra-1"
        class="input"
        />
        
    
     <input type="number"placeholder="Доп.доход"id="income-extra-2"
        class="input"
        />

<div className=' '>
       <h6>Копилка (Сколько откладываем?) </h6>
       
       <div className='range-wrapper '>
          <input type="range" min="0" max="100" value="0" id="money-box-range"/>    
       </div>
       <div><span id="total-precents">0</span>%</div>
       

       <div className='range-block d-flex  align-center '>
    <div className='result-block'>
       <li>
       <h6>Копим:</h6>
       <input
       type="number"
       id="accumulation"
       value="0"
       readonly
       />
       </li>
     
       
    </div>
  
    </div>
   
   
  
    </div>   
     
              
        
<div className='d-flex  align-center  cu-p p-20'>
  
      <h6> Доступно в месяц(без копилки):</h6>

<input
type="number"
class="total"
id="total-month"
value="0"
readonly
/>

<h6 > Доступно в день:</h6>


 <input type="number" class="total"id="total-day"value="0"readonly
/>
  
 <h6> Накопим за год:</h6>

 <input type="number"class="total"id="total-year"value="0"readonly
/>

   </div>

       
          </div>



   
          
          </form>
        
        
         </div>
        
   
  
 
 );
   
   
}


export default Calculator ;