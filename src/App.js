import './App.css';

function App() {
  return (
  <div className='container'>
    <div className='login-register-container'>
      <div className='login-register-form'>
        <h2>Great to have you back!</h2> 
        <br></br>
          <form className='form'>
              <h4>Username or email</h4>
              <input className='input-field'></input>
              <br></br>
              <h4>Password</h4>
              <input className='input-field'></input>
          </form>
          <button className='sign-in'>SIGN IN TO YOUR ACCOUNT</button>
          <br></br>
          <h4>New here? Create an account</h4>
      </div>
    </div>
  </div>
  );
}

export default App;
