import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center  ">
      <div className="d-flex align-center">
        <img width={50} height={55} src="/img/logo.svg"/>
        <div className="headerInfo">
        <h1>Financial calculator</h1>
        <p>
        Планируй свои доходы и расходы
        </p>
        {/* <h3> text</h3> */}
        </div>  
        </div>

        <ul className="headerRight">
          <li className="d-flex  ">
          <img width={30} height={30} src="/img/user2.svg"/>
          </li>
        </ul>


      </header>

      <div className="content">
        <Calculator/>
      
      </div>


      
      </div>
      
   
  );
}

export default App;
