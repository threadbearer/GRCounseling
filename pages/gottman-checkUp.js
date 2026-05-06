import style from './gottman.module.scss'
import generic from '../styles/generic.module.scss'

export default function Gottman(){
  return (
    <div className={style.page}>
      <div className={style.hero}>
        <h1 className={generic["sr-only"]}>Gottman Relationship checkup</h1>
      </div>
      <div>
        <h2>How it works:</h2>
        <div className={style.container}>
          <div>
            <h3>1. Accept your invitation</h3>
            <p>
              I will send each of you a separate email inviting you to The
              Enhanced Gottman Relationship Checkup. Please click on the link
              below to schedule an appt:
            </p>
            <a href="./appointment">
              <button className={style.button}>
                schedule an assessment
              </button>
            </a>
          </div>
          <div>
            <h3>2. Create a private profile</h3>
            <p>
              Once you have accepted the email invitation to join The Enhanced
              Gottman Relationship Checkup, you and your partner will each
              create individual, separate profiles.
            </p>
          </div>
          <div>
            <h3>3. Complete the questionnaire</h3>
            <p>
              You and your partner will each complete your own questionnaire at
              your convenience. Stop and start at any time. Neither partner will
              be able to access the other&apos;s information at any point in
              the process. In order to preserve the integrity and accuracy of
              the tool, you are encouraged not to share your responses with each
              other or log in to your partner&apos;s account. The actual time
              it takes to complete each assessment varies, but it will take, on
              average, about two hours.
            </p>
          </div>
          <div>
            <h3>4. Get your results</h3>
            <p>
              When you have both completed your individual questionnaires, your
              therapist will be notified and will be able to securely log in to
              review your scores and the analysis of your relationship. Your
              therapist will be able to discuss the results with you and suggest
              a treatment plan for improving and strengthening your
              relationship.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>
          This clinical tool consists of 337 questions about friendship,
          intimacy, how well you know your partner, how you manage emotions and
          conflict, how you share your values and goals, and what gives meaning
          to your lives. There are additional questions about parenting,
          housework, finances, trust, and individual areas of concern. The
          questionnaire is completely confidential, fully HIPAA compliant, and
          your therapist will be the only person to see your responses.
        </p>
        <p>
          The Enhanced Gottman Relationship Checkup is a breakthrough in
          couple&apos;s therapy as it allows for a confidential, efficient way
          for your clinician to complete the evaluation process. By using this
          new technology, your assessment can be done at any time and in the
          setting of your choice! Upon completion, it automatically provides
          valuable clinical information by pinpointing specific strengths and
          challenges in your relationship, while also suggesting actionable,
          research-based recommendations for therapy.
        </p>
        <p>
          You can feel confident in your results. Drs. John and Julie Gottman
          created this research-based assessment in collaboration with The
          Gottman Institute to help couples build a personalized treatment plan
          with their therapist. Dr. John Gottman is a clinical psychologist who
          has completed more than 40 years of research on couple relationships,
          and is recognized as one of the top 10 most influential therapists of
          the last quarter century. Dr. Julie Gottman is a highly respected
          clinical psychologist who is sought internationally by the media and
          clinical organizations as an expert advisor on relationships.
          Together, they have dedicated their lives to helping couples, and The
          Enhanced Gottman Relationship Checkup is the result of this life work.
        </p>
      </div>
    </div>
  );
}