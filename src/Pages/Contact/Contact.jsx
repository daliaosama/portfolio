import "./contact.css";
import mail from "/assets/mail.png";
import phone from "/assets/phone.png";
import whatsup from "/assets/whatsup.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import emailjs from 'emailjs-com';
function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    testValidation();
    emailjs.send('service_qh001rg', 'template_glvneik', form, 'ZUL4Z-5YsqSFwt9ZY')
    .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
    });
};
  
  function handleChange(event) {
    var value = event.target.value;
    const key = event.target.name;
    setForm({
      ...form,
      [key]: value,
    });
    setErrors({ ...errors, [event.target.name]: '' });
  }
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const validateSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email("Invalid Email Address")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  async function testValidation() {
    try {
      await validateSchema.validate(form, { abortEarly: false });
      setErrors({});
      
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      setIsSubmitted(false); 
    }
  }
  return (
    <>
    <div className="contact">
      <div id="Contact">
        <h2  className="contactheader">Contact Me</h2>
        <div id="mail">
          <img src={mail} className="images" />
          <h2 className="contactheader">dalia_dz88@yahoo.com</h2>
        </div>
        <div id="phone">
          <img src={phone} className="images" />
          <h2 className="contactheader">01011301375</h2>
        </div>
        <div id="whatsup">
          <img src={whatsup} className="images" />
          <Link to="https://wa.me/0201011301375" target="_blank">
            <h2 className="contactheader"> Message me</h2>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div id="name">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            style={{
              borderColor: errors.name ? "red" : "#ccc",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div id="email">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            style={{
                borderColor: errors.email ? 'red' : '#ccc',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
          />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        </div>
        <div id="message">
          <label htmlFor="mesage">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            value={form.message}
            style={{
                borderColor: errors.message? 'red' : '#ccc',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
          ></textarea>
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}

        </div>
        <input type="submit" value="send message" id="submit" />
      </form>
    </div>
    {isSubmitted && <div className='submitted'>
        <label> Message sent successfully!</label>
        <label>Thanks for contacting me!</label></div>}
    </>
  );
}
export default Contact;
