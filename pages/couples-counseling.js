import Link from "next/link";
import style from './couples.module.scss'
import generic from '../styles/generic.module.scss'

export default function Marriage(){
  return (
    <>
      <div className={style.hero}>
        <div>
          <h1>Couples Counseling</h1>
        </div>
      </div>
      <div className={style.page}>
        <div className={style.container}>
          <div>
            <h2>Here is a list of commonly explored topics:</h2>
            <ul>
              <li>Live Happier and More Satisfied</li>
              <li>Improve Communication</li>
              <li>Reduce Intensity of Arguments</li>
              <li>Relieve Emotional Suffering</li>
              <li>Strengthen Relationships</li>
              <li>Talk about Sex, Money, Parenting</li>
              <li>Reduce Conflict</li>
              <li>Stop Old Patterns and Cycles</li>
              <li>Make Positive Change</li>
              <li>Break Unhealthy Habits</li>
              <li>Develop Appropriate Boundaries</li>
              <li>Divorce or Separation</li>
            </ul>
          </div>
        </div>
        <p>
          I Implement a blend of the Gottman Method and Emotional Focused
          Therapeutic Approach to help create longevity and flourish the
          relationship you have. Being in a romantic relationship requires work.
          Couples come to therapy for any number of reasons. Common couples
          therapy issues include communication, intimacy, financial , and major
          life changes such as getting married, starting a family, or
          infidelity. Couples therapy is also a good idea if someone in the
          relationship is coping with an issue that might be affecting the unit
          or simply if you&apos;re feeling stuck and stagnant in your
          relationship. Therapy can be a critical factor when helping a couple
          navigate the immense amount of emotions that they experience as their
          relationship changes and grows. I work with my clients to create
          clarity, safety, and vulnerability. Counseling is provided with the
          aim of helping couples have strong and healthy relationships,
          therefore giving them a greater chance of enjoying a stable as well as
          satisfying marriage.
        </p>
        <p>
          If relationship counseling seems like it could benefit you and your
          partner, feel free to schedule a free 20-minute consultation. I look
          forward to meeting with you.
        </p>
        <div className={generic.blocks}>
          <Link href="/appointment" className={generic.button}>
            schedule
          </Link>
          <a href="tel:555-555-5555" className={generic.button}>
            call
          </a>
        </div>
      </div>
    </>
  );
}