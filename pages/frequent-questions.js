import style from './frequent-questions.module.scss'
import generic from '../styles/generic.module.scss'

export default function FAQs() {
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={style.cards}>
        <div>
          <h2>
            What type of Therapist are you? Psychotherapist, Therapist,
            Counselor and Mental Health Therapist?
          </h2>
          <p>
            I am all of the above. These are just different titles
            therapists can use to identify their work. Due to my particular
            license as an Associate Marriage and Family Therapist under the
            supervision of Jane Smith (LMFT #123456); I approach
            treatment from a relational/family systems lens. I identify
            myself as a psychotherapist, counselor, therapist and mental
            health therapist.
          </p>
        </div>
        <div>
          <h2>Do you accept Insurance?</h2>
          <p>
            No, I do not bill insurance companies directly. However I am happy
            to provide a SuperBill (every month/free of charge) to individuals
            desiring to be reimbursed for their services by their insurance.
            Please inform me if you plan on doing this.
          </p>
        </div>

        <div>
          <h2 >When do you offer appointments?</h2>
          <p >
            offer appointments in the afternoons/evening hours at this time.
            This varies on Monday-Saturday. I do not offer Sunday
            appointments.
          </p>
        </div>
        <div>
          <h2>
            What can I expect in my first session?
          </h2>
          <p>
            The majority of the first session will be an orientation to
            therapy, paperwork, providing information about your reasons for
            starting therapy now and to see if I would be a good fit for you.
            You can come prepared by spending a few minutes identifying your
            motivation for therapy and reporting important events in your
            life.
          </p>
        </div>
      </div>
        <div className={generic.blocks}>
          <a href="./appointment">
            <button className={generic.button}>schedule</button>
          </a>
          <a href="tel:555-555-5555">
            <button className={generic.button}>call</button>
          </a>
        </div>
    </div>
  );
}