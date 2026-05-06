import Image from "next/image";
import style from './about.module.scss'
import generic from '../styles/generic.module.scss'
import profile from 'public/gracePadilla.webp'
import linkedin from 'public/icons/linkedin.webp'
import instagram from 'public/icons/instagram.webp'
import psy from 'public/icons/psy.webp'
import bbs from 'public/icons/bbs.webp'
import gottman from 'public/icons/gottman.webp'


export default function About() {
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>About Jane Doe</h1>
      </div>
      <div className={style.split}>
        <div className={style.information}>
          <div className={style.profile}>
            <Image src={profile} alt="portrait of Jane Doe" fill />
          </div>
          <h3>
            <span className={generic["sr-only"]}>Links to other</span>Jane
            Doe <span className={generic["sr-only"]}>profile pages.</span>
          </h3>
          <div className={style.grid}>
            <a href="https://www.psychologytoday.com/">
              <Image alt="link to psychology today verification" src={psy} />
            </a>
            <a href="https://www.linkedin.com/">
              <Image
                alt="link to linkedIn profile"
                src={linkedin}
              />
            </a>
            <a href="https://search.dca.ca.gov/">
              <Image
                alt="link to california board of behavioral science license details"
                src={bbs}
              />
            </a>
            <a href="https://www.instagram.com/">
              <Image
                alt="link to instagram profile"
                src={instagram}
              />
            </a>
          </div>
          <div className={style.gottman}>
            <Image alt="" src={gottman} />
            <p>
              The Gottman Method brings evidence-based science and I am well
              versed in the method. I am able to provide my clients with a
              powerful online assessment that automatically scores a
              couple&apos;s strengths and challenges.
            </p>
            <a href="./gottman-assessment">
              <button className={generic.button}>
                Find out more about the assessment.
              </button>
            </a>
          </div>
          <div className={style.credentials}>
            <h2>My credentials and affiliations:</h2>
            <ul>
              <li>
                Mastes degree in Clinical Psychology <br /> Pepperdine University Malibu, CA
              </li>
              <li>
                Registered Associate Marriage and Family Therapist
                <br /># AMFT123456 CA Board of Behavioral Sciences
              </li>
              <li>
                Professor at Graduate School of Education and Psychology,
                <br />
                Pepperdine University, teach Marriage and Couples Counseling
              </li>
              <li>
                Certified Gottman Connect Therapist
                <br />
              </li>
              <li>
                Member of the California Association of Marriage and Family
                Therapists
              </li>
            </ul>
            <div>
              <a href="./appointment">
                <button className={generic.button}>Book an appt with me</button>
              </a>
            </div>
          </div>
          <p>
            Under the supervision of <br />
            Jane Smith (LMFT #123456)
          </p>
        </div>

        <div className={style.intro}>
          <h2>Does it feel like you are walking on eggshells?</h2>
          <p>
            You know you care for your partner but maybe you find yourself
            trying your hardest to prevent an argument? When you fight, does it
            feel like you have the same fight over and over again? Are you
            trying to move on from cheating and lying? You are not alone because
            these are the symptoms my clients come to me for.
          </p>
          <p>
            My name is Jane Doe, I am a Registered Associate Marriage and
            Family Therapist specializing in Relationship Counseling. I work to
            help my clients process what is causing them pain and how to change
            it. As a relationship therapist, family and couples therapy,
            professor at Pepperdine University, I treat my session similar to my
            classroom. I create a place that is both safe and stimulating for
            growth.
          </p>
          <p>
            I empower my clients with having a toolbox which we fill together to
            help them surpass this stage in their life. I believe my clients
            want more than just a sounding board out of their sessions. I
            implement a blend of Emotional Focused and Gottman Therapy that have
            been statistically proven to challenge my clients and instill
            growth.
          </p>
          <p>
            I know this can be a difficult time and provide my clients with the
            tools they need to start a new chapter in their life.
          </p>
        </div>
      </div>
    </div>
  );
}