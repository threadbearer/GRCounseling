import {useState, useRef} from 'react';
import { BsCalendarWeek } from "react-icons/bs";
import HandleFormSubmit from "../utils/submit";
import style from './appointment.module.scss';
import generic from '../styles/generic.module.scss';

export default function Appointment() {
  const form = useRef(null)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    HandleFormSubmit(e)
  }

  return (
    <main>
      <div className={style.hero}>
        <div>
          <BsCalendarWeek size={190} style={{ padding: "2rem" }} />
          <h1>Schedule a free consultation. <span className={generic['sr-only']}>with the form below</span></h1>
        </div>
      </div>
      <div className={style.information}>
        <p>
          Please Note: Any information you send to me via email or form
          submission cannot be secured. Do not send highly sensitive
          information in this manner of communication.
        </p>
        <p>
          If you are in an emergency situation, please do not wait for a
          response.
          Please visit your nearest emergency room or call 911.
        </p>
      </div>
      <form
        className={style.form}
        ref={form}
        action="https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec"
        name="google-sheet"
        onSubmit={handleSubmit}>
        <div className="form-elements" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>
            We look forward to connecting with you!
          </h2>
          <div className={style.grid}>
            <label htmlFor="name">
              What may I call you?
              <input type="text" id="name" name="name" placeholder="name" required />
            </label>
            <label htmlFor="email">
              Can I have your Email?
              <input type="email" id="email" name="email" placeholder="e-mail" required />
            </label>
            <label htmlFor="phone">
              Or a Phone Number?
              <input type="tel" id="phone" name="phone" placeholder="(000) 000-0000" />
            </label>
            <label htmlFor="message">
              Would you like to leave a short message for me?
              <textarea
                maxLength="300"
                id="message"
                name="message"
                placeholder="message">
              </textarea>
            </label>
          </div>
          <fieldset>
            <legend>
              <p>Counseling Preference:</p>
            </legend>
            <label htmlFor="type--notsure" style={{ flexDirection: "row", alignItems: "center", gap: "0.5rem" }}>
              <input
                id="type--notsure"
                type="radio"
                name="type"
                value="not sure"
                defaultChecked
              /> 
              I&apos;m not sure.
            </label>
            <label htmlFor="type--individual" style={{ flexDirection: "row", alignItems: "center", gap: "0.5rem" }}> 
              <input
                id="type--individual"
                type="radio"
                name="type"
                value="individual"
              /> 
              Individual
            </label>
            <label htmlFor="type--couplescounseling" style={{ flexDirection: "row", alignItems: "center", gap: "0.5rem" }}>
              <input
                id="type--couplescounseling"
                type="radio"
                name="type"
                value="couples"
              />
              Couples Counseling
            </label>
          </fieldset>
          <button
            className={generic.button}
            style={{ marginTop: "2rem" }}
          >
            {loading ? "Sent!" : "Send Message"}
          </button>
        </div>
        <div className="thankyou_message" style={{ display: "none", textAlign: "center", padding: "2rem" }}>
          <h2>Thank You!</h2>
          <p>Your message has been submitted successfully. We look forward to speaking with you!</p>
        </div>
      </form>
    </main>
  )
}
