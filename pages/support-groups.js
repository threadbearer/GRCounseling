import style from './support.module.scss'
import generic from '../styles/generic.module.scss'

export default function SupportGroups() {
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>Find Support Groups</h1>
      </div>
      <div className={style.cards}>
        <div>
          <h2>Mental Health</h2>
          <p>
            Peer Support Groups for Anxiety, Depression, Bipolar, OCD, ADHD &
            Eatting Disorders
          </p>
          <a href="https://findtreatment.gov/" className={generic.link}>
            Visit findtreatment.org
          </a>
        </div>
        <div>
          <h2>Christian Based Groups</h2>
          <p>Support Groups for Divorce, Single Moms & Chronic Illness</p>
          <a href="https://www.lakeave.org/ministries/support-groups" className={generic.link}>
            Visit lakeave.org
          </a>
        </div>
        <div>
          <h2>Addiction</h2>
          <p>Alcoholics Anonymous</p>
          <a href="https://lacoaa.org/meetings.php?tsml-day=0&tsml-mode=me/" className={generic.link}>
            Visit lacoaa.org
          </a>
          <p>Narcotic Anonymous</p>
          <a href="https://sgvna.com/meeting-finder/" className={generic.link}>
            Visit sgvna.com
          </a>
          <p>Co-dependents Anonymous</p>
          <a href="https://coda.org/" className={generic.link}>
            Visit cada.org
          </a>
        </div>
      </div>
    </div>
  );
}