import { useState, useEffect } from 'react';
//import helper to validate email
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
   //get the name and value of the input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else {
      return;
    }
  };

const handleIncorrectEmail = (e) => {
  //if there is a name and email but no message, send the error message below
     if (name ==='') {
       return;
     }if (email ==='') {
        return;
      }if (!validateEmail(email)) {
        setErrorMessage(`Please enter a valid email`);
         return;
      }if (validateEmail(email)) {
        setErrorMessage(``);
     } else {
      setErrorMessage('')
       return
     }
   };

   const handleNoMessage = (e) => {
    //if there is a name and email but no message, send the error message below
       if (name ==='') {
         return;
       }if (email ==='') {
          return;
        }if (!validateEmail(email)) {
           return;
       } if (message === '') {
         setErrorMessage('Input field required')
         return
       } else {
        setErrorMessage('')
         return
       }
     };
 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Please enter a name');
      return;
    }
    else if (!validateEmail(email)) {
      setErrorMessage(`Please enter a valid email`);
      return;
    }
    if (!message) {
      setErrorMessage(`Field is required`);
      return;
    }
    alert(`Thanks for the message ${name}`);
    setName('');
    setEmail('');
    setMessage('');
}

    return (
      <section id="contactContainer">
        <form class="card" id="contactCard" onSubmit={handleFormSubmit}>
          <header class="card-header" id="cardHeader">
            <p class="card-header-title is-centered" id="titleText">Contact Me</p>
          </header>
          <div class="card-content"> 
            <div class="field">
              <label class="label" id="labels">Name</label>
                <input class="input" placeholder="name" name="name" onChange={handleInputChange} value={name} id="inputField"></input>
            </div>
            <div class="field">
              <label class="label" id="labels">Email</label>
                <input class="input" placeholder="email" name="email" onChange={handleInputChange} onMouseLeave={handleIncorrectEmail} value={email}  id="inputField"></input>
            </div>
            <div id="textareaContainer">
              <label class="label" id="labels">Message</label>
                <div class="control">
                  <input class="input" id="textInput" placeholder="send me a message" type="textarea" name="message" onChange={handleInputChange} onMouseLeave={handleNoMessage} value={message}></input>
                </div>
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
              )}
            <div class="field">
            <button id="submitButton" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }