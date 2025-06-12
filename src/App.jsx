import { useState } from "react";
import "./App.css";


function App() {
  const[values, setValues] = useState(
    {
      firstname:'', 
      lastname: '',
      email:'',
      contact:'',
      gender:'',
      date:''

    })
    const handleChanges =(e) =>
    {
      setValues({...values, [e.target.name]:[e.target.value]})
    }
  return (
    <div className = "container">
      <h1>User Registration form</h1>
      <form >
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder="Enter first name" name = "firstname" 
        onChange={(e) => handleChanges(e)}/>

        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder="Enter Last name" name = "lastname" 
        onChange={(e) => handleChanges(e)}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter valid email" name = "email"
        onChange={(e) => handleChanges(e)} />

       <label htmlFor="contact">Phone no.</label>
       <input type="text" placeholder="Enter Phone no." name = "contact" 
       onChange={(e) => handleChanges(e)}/>

      <label htmlFor="gender">Gender</label>
      <input type="radio" name = "gender" 
      onChange={(e) => handleChanges(e)}/> Male
      <input type="radio" name = "gender" 
      onChange={(e) => handleChanges(e)}/> Female
          
      <label htmlFor="date">Date of Birth</label>
      <input type="numbers" placeholder="Enter Date of Birth" name = "numbers"
      onChange={(e) => handleChanges(e)} />

      <div class="button-container">
     <button type="submit" class="submit-btn">Submit</button>
     <button type="reset" class="reset-btn">Reset</button>
      </div>

      
      </form>
      
    </div>
  );
}

export default App;

