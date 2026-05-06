import Link from "next/link";
import style from './dating.module.scss'
import generic from '../styles/generic.module.scss'

export default function Relationship(){
  return (
    <>
      <div className={style.hero}>
        <div>
          <h1>Dating Counseling</h1>
        </div>
      </div>
      <div className={style.page}>
        <div className={style.container}>
          <div>
            <h2>Do you find yourself asking, </h2>
            <p>
              What&apos;s wrong with me?
              <br />
              Why am I still single? <br />
              Why can&apos;t I find love?
              <br />
              Why do I always choose the wrong one?
              <br />
              Why is dating so hard?
            </p>
          </div>
          <div>
            <h2>Do you have any or all of these dating apps?</h2>
            <ul>
              <li>eHarmony.</li>
              <li>Match.</li>
              <li>Zoosk. </li>
              <li>FriendFinder.</li>
              <li>Bumble. </li>
              <li>Hinge. </li>
              <li>OkCupid.</li>
              <li>Dating</li>
              <li>The League.</li>
            </ul>
          </div>
        </div>
        <p>
          Do you find yourself using dating apps to find serious, meaningful,
          lasting relationships but find yourself feeling lost, heart broken or
          hopeless? Do you find yourself constantly gravitating to the same type
          of partner just to realize a couple dates, weeks or even months later
          that you aren&apos;t compatible? Or have you been out of the dating
          world for such a long time and don&apos;t know where to begin? If you
          are you sick and tired of the same dating cycle and want to find out
          why you choose who you choose and what is preventing you from changing
          it, try relationship counseling. Relationship counseling AKA “Dating
          Therapy” is a way to process and understand what lead you to this
          dating cycle and what is keeping you there. With the help of a
          therapist you are able to discover not only why you are single but
          what you truly need and want in order to find happiness.
        </p>
        <p>
          Are you ashamed to need help dating? Half of my clients come to me for
          dating-related issues. Dating is not how it used to be. As a
          specialized couples therapist, I see what works and what doesn&apos;t
          work daily. I base my psychotherapy on therapeutic approaches to
          promote longevity in relationships.
        </p>
        <p>
          There is no dating guidebook that applies to everyone because you have
          different needs, values, expectations, goals and morals than the
          person sitting next to you. Yes, at times you might agree with certain
          characteristics but why limit yourself by only looking at certain
          behaviors or characteristics? Within time someone&apos;s looks,
          career, hobbies etc. change but if you have the same shared meaning
          with your partner, you set a strong foundation creating a loving
          lasting relationship.
        </p>
        <p>
          My clients often find themselves feeling more energized, motivated,
          positive, secure, and having a higher self esteem after working with
          me.
        </p>
        <p>
          Discover a new way of dating, dating with a purpose! Feel free to
          schedule a session to begin your new chapter in your life.
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
  )
}