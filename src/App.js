import './App.scss';
import lightLogo from './assets/emails-amico-light.png';
import React from 'react';


function App() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });

      

      if (res.status === 200) {
        setEmail("");
        setMessage("Subscribed Successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <body>
      <div className='newsl'>
        <div className='newsl__img'>
          <img className='newsl__img--light' src={lightLogo} alt=""/>
        </div>

        <div className='newsl__content'>
          <h2 className='newsl__title'>Subscribe to the letterdog newsletter!</h2>
          <p className='newsl__text'>We'll send you the best content every week!!</p>

          <form onSubmit={handleSubmit}>
              <input className="newsl__input" value={email} type="email" onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Enter e-mail"/>
              <button className="newsl__btn" type="submit">Subscribe</button>
              <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;
