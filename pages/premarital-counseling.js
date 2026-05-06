import style from './premarital.module.scss'
import generic from '../styles/generic.module.scss'

export default function Premarital(){
  return (
    <>
      <div className={style.hero}>
        <div>
          <h1>Premarital Counseling</h1>
        </div>
      </div>
      <div className={style.page}>
        <div className={style.container}>
          <div>
            <h2>
              Common topics spoken during sessions:
            </h2>
            <ul>
              <li>Finances and money management</li>
              <li>Intimacy, affection and sex</li>
              <li>Expectations, beliefs and values</li>
              <li>Decision making and conflict resolution</li>
              <li>Dealing with anger and emotions</li>
              <li>Roles in marriage</li>
              <li>Children and parenting</li>
            </ul>
          </div>
        </div>
        <h2>
          When the word engagement comes up, the first thing that comes up is
          “When&apos;s the wedding?”
        </h2>
        <p>
          Couples get so absorbed in planning the perfect wedding, that they
          fail to acknowledge potential issues that would serve as a strong
          foundation for their marriage later on. When couples actively think
          about what their expectations, values, meaning, goals are in their
          relationship and discuss them before marriage, they limit the amount
          of time they can possibly take arguing about them later on.
        </p>
        <p>
          Premarital counseling helps couples better prepare for the demands of
          marriage and develop conflict resolution skills needed for longevity
          in their relationship. Within the context of a supportive environment,
          you will learn to communicate with your spouse more effectively. Our
          sessions would allow you the chance to explore topics you find
          difficult to discuss. A greater chance of enjoying a stable as well as
          satisfying marriage is the fundamental reason I provide Premarital
          Counseling.
        </p>

        <div>
          <p>
            Give your marriage the tools it needs to succeed, contact me today
            to learn more about how this 8- week Strengthening Premarital
            Counseling course can help flourish longevity in your relationship
            and build a healthy foundation for marriage.
          </p>
          <div className={generic.blocks}>
            <a href="./appointment">
              <button className={generic.button}>schedule</button>
            </a>
            <a href="tel:555-555-5555">
              
              <button className={generic.button}>call</button>
            </a>
          </div>
          <p>*(Also suitable for couples in their first year of marriage)</p>
        </div>
      </div>
    </>
  )
}