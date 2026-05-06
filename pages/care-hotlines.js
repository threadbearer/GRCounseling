import style from './care-hotlines.module.scss'
import generic from '../styles/generic.module.scss'

export default function Hotlines(){
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>Care Hotline Numbers</h1>
      </div>
      <div className={style.cards}>
        <div>
          <h2>
            Community Resources
            <br />
            Phone: 211
            <br /> (24/7)
          </h2>
          <p>
            211 connects you to a community resource advisor assisting with
            housing, food, work, and more...
          </p>
          <a href="https://www.211la.org/" className={generic.link}>
            Visit 211la.org
          </a>
        </div>
        <div>
          <h2>
            Non-emergency Emotional Support
            <br />
            1-855-845-7415
            <br />
            M-F: 7am-11pm <br />
            Sat: 7am-3pm <br />
            Sun: 7am-9pm <br />
          </h2>
          <p>
            California Peer-Run Warm Line for non-emergency emotional support
            and referrals to anyone in the state needing mental health help
          </p>
        </div>
        <div>
          <h2>
            National Suicide Lifeline
            <br /> 1-800-273-8255
            <br /> (24/7)
          </h2>
          <p>
            The National Suicide Lifeline provides free and confidential support
            for people in distress and prevention & crisis resources
          </p>
          <a href="https://suicidepreventionlifeline.org/" className={generic.link}>
            Visit suicidepreventionlifeline.org
          </a>
        </div>
        <div>
          <h2>
            Teen & Youth Help Hotline
            <br /> 1-310-855-4673
            <br />
            Daily: 6pm-10pm
          </h2>
          <p>
            Teen & Youth Help Hotline can support Teens via call, text, email,
            app, message board and through additional resources. For after hour
            contact your call is directed to Didi Hirsch&apos;s Suicide
            Prevention Center.
          </p>
          <a href="https://teenlineonline.org/talk-now/" className={generic.link}>
            Visit teenlineonline.org
          </a>
        </div>
      </div>
    </div>
  );
}