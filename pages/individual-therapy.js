import style from './individual.module.scss';
import generic from '../styles/generic.module.scss'
export default function Individual(){
  return (
    <>
      <div className={style.hero}>
        <div>
          <h1>Individual Therapy</h1>
        </div>
      </div>
      <div className={style.page}>
        <p>
          I understand that taking the first step in seeking help can be
          difficult. I will meet you where you are at and help you work on where
          you would want to be. Oftentimes, painful emotions and difficult
          histories make it hard to cope the way we would prefer to.
          Relationships can suffer, our self-esteem dwindles and we end up
          feeling lonely and isolated. Together we can work on helping you feel
          fulfilled and like you are back on track.
        </p>

        <h2>My areas of specialization</h2>
        <ul>
          <li>Stress Management</li>
          <li>Self-Esteem</li>
          <li>Career Dissatisfaction</li>
          <li>Burnout</li>
          <li>Anxiety</li>
          <li>Depression</li>
          <li>Relationship Enrichment</li>
          <li>Dating</li>
          <li>Relationship Conflict</li>
          <li>Family Dynamics</li>
          <li>Attachment Wounds</li>
          <li>Codependency</li>
          <li>Emotional/Verbal Abuse</li>
          <li>Communication/Assertiveness Skills</li>
          <li>Coping Skills</li>
          <li>Cultural Issues</li>
          <li>Life Transitions</li>
          <li>Separation/Divorce</li>
          <li>Shame</li>
          <li>Grief</li>
        </ul>
        <div className={generic.blocks}>
          <a href="./appointment">
            <button className={generic.button}>schedule</button>
          </a>
          <a href="tel:555-555-5555">
            <button className={generic.button}>call</button>
          </a>
        </div>
      </div>
    </>
  );
}