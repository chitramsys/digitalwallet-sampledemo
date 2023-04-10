
import './App.css';
import react ,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  const [signupjson, setSignupjson] =useState({
    "username": "Paramesh123",
       "name": {
           "firstName": "kutty",
           "middleName": "elu",
           "lastName": "test"
       },
       "password": "newpassword3",
       "dateOfBirth": "1989-05-05",
       "address": {
           "address1": "chee",
           "address2": "cheeq",
           "city": "tn",
           "state": "tn",
           "country": "India",
           "zip": "600088"
       },
       "mobileNumber": "7777777347",
       "emailAddress": "msys3419@gmail.com"
});

  const handleChangeUsername =(e) =>{
    signupjson.username = e.target.value;
    setSignupjson(signupjson);
  }

  const handleChangeemail =(e) =>{
    signupjson.emailAddress = e.target.value;
    setSignupjson(signupjson);
  }

   const signup = (signupjson) => {
    const response = fetch(`http://3.232.225.73/digital-wallet/user/create`,  {
      headers:{
          'accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
          
      },
      method: "POST",
      body: JSON.stringify(signupjson),
  })
 console.log(response)
 if(response){
 let a =[]
 a.push(response)
 setSignupjson(a);
 }
  }

   useEffect(()=>{
    const responseTest = fetch(`http://3.232.225.73:80/test`,  {
      headers:{
          'accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
          
      },
      method: "Get"
  })
  console.log(responseTest)
      },[])
       
   
  return (
    <div className="App">
      <h1>Digital wallet Msys</h1>
      <br></br>

      <div class="signup">
        <div className="mb-3 form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input  type="text" 
              name="username"
              className="form-control"
              onChange={(e)=>handleChangeUsername(e)}
              id="username"  
              placeholder="Please enter username" required 
              noValidate
              />
               
          </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Email</label>
              <input  type="email" 
              name="email"
              className="form-control"
              onChange={(e)=>handleChangeemail(e)} id="password" 
              placeholder="Please enter email" required  noValidate/>
             
            </div> 
            </div>
      <button  class="btn btn-primary" onClick={(e)=>signup(signupjson)}> Signup</button>
<br></br>
      <div>SignupJson</div>




      
    </div>
  );
}

export default App;
