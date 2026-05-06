import style from './fees.module.scss'
import generic from '../styles/generic.module.scss'

export default function Fees(){
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>Fees</h1>
      </div>
      <div>
        <div>
          <div className={style.top}>
            <div>
              <h2>Free consultation:</h2>
              <p>
                I understand and value the importance of feeling comfortable
                with your therapist. I provide complimentary 20-minute phone
                consultations to discuss your wants and needs, in addition to
                getting to know what you are looking for in a therapeutic
                relationship.
              </p>
            </div>
            <div>
              <h2>Common Services</h2>
                <h3>Individual Therapy</h3>
                <p> $150 - 50 Minute Session</p>
                <h3>Premarital | Couples | Relationship Therapy</h3>
                <p>$200 - 50 Minute Session</p>
            </div>
          </div>
          <div>
            <h2>Payment Methods:</h2>
            <p>
              Flexible Spending Accounts, Medical Savings Account, and Health
              Savings Accounts plans don&apos;t usually require a diagnosis
              and can be used to pay for services.
            </p>
            <h2>Insurance:</h2>
            <p>
              Our practice is private pay, which means we
              don&apos;t accept insurance.
            </p>
            <p>
              However, your plan may include out-of-network benefits that
              partially reimburse fees for my services. I suggest contacting
              your insurance company to confirm the benefits that you may be
              eligible to receive.
            </p>
            <p>
              Keep in mind that all insurance companies will require a mental
              health diagnosis in order to process your claim.
            </p>
            <h3>When inquiring, refer to these Procedure Codes:</h3>
            <h4>For Individuals:</h4>
            <p>Procedure Code 90834 – “Individual Psychotherapy”</p>
            <h4>For Couples: </h4>
            <p>Procedure Code 90847 – “Family Psychotherapy”</p>
            <h2>Cancellation Policy:</h2>
            <p>
              If you are unable to attend a session, please make sure you cancel
              at least 24 hours beforehand. Otherwise you may be charged for the
              full rate of the session.
            </p>
            <p>
              Any Other Questions: Please don&apos;t hesitate to contact me for any
              additional questions you may have.
            </p>
          </div>
        </div>
        <div className={style.aside}>
          <a href="./appointment" >
            <button className={generic.button}>Schedule an appointment</button>
          </a>
          <h2>Teletherapy:</h2>
          <p>
            Telehealth therapy is an easy and convenient solution to receive
            therapy without having to make an in-office visit. It is a HIPPA
            compliant and confidential platform that allows for virtual
            therapy sessions via your desktop, laptop, tablet or smartphone. I
            now offer Telehealth service for clients residing in California at
            this time.
          </p>
          <h2>Good Faith Estimate:</h2>
          <p>
            You have the right to receive a “Good Faith Estimate” explaining
            how much your medical and mental health care will cost. Under the
            law, health care providers need to give patients who don&apos;t have
            insurance or who are not using insurance an estimate of the
            expected charges for medical services, including psychotherapy
            services. You have the right to receive a Good Faith Estimate for
            the total expected cost of any non-emergency healthcare services,
            including psychotherapy services. You can ask your health care
            provider, and any other provider you choose, for a Good Faith
            Estimate before you schedule a service. If you receive a bill that
            is at least $400 more than your Good Faith Estimate, you can
            dispute the bill. Make sure to save a copy or picture of your Good
            Faith Estimate. For questions or more information about your right
            to a Good Faith Estimate, visit www.cms.gov/nosurprises.
          </p>
        </div>
      </div>
    </div>
  )
}