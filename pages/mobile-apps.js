import Image from "next/image";
import habitshare from 'public/habitshare.webp'
import moodjournal from '/public/moodjournal.webp'
import style from './mobile.module.scss'


export default function MobileApps(){
  return (
    <div className={style.page}>
      <div className={style.title}>
        <h1>Helpful Apps</h1>
      </div>
      <div className={style.app}>
        <div>
          <h2>Mood App: Journal</h2>
          <h3>Tracker journal for your emotions </h3>
          <p>
            &quot;With trained Helpers, Guides and Coaches, we harness the
            power of peer to peer support by connecting people with similar
            life circumstances. Sup is an extraordinary community that is
            available to support, listen, share resources & give/take advice
            24/7.&quot;
          </p>
        </div>
        <div>
          <a
            target={"blank"}
            href="https://apps.apple.com/us/app/mood-app-journal/id1241839696/"
            >
            <Image
            alt="link to habit share in the appstore"
            src={moodjournal}
            fill
            />
          </a>
        </div>
      </div>
      <div className={style.app}>
        <div>
          <h2>HabitShare App</h2>
          <h3>Social habit tracker with friends</h3>
          <p>
            &quot;HabitShare is a social habit tracker that allows you to track
            habits with friends for extra accountability. You can use HabitShare
            alone, but it works best when you add friends. With HabitShare, you
            have total control over privacy. Want to share your exercise habits
            with your running club and other habits with your family? No
            problem! You can even keep a habit 100% private.&quot;
          </p>
        </div>
        <div>
          <a
            target="blank"
            rel="noreferrer"
            href="https://habitshareapp.com//#"
            >
            <Image
              alt="habit share app preview"
              src={habitshare}
              fill
              />
          </a>
        </div>
      </div>
    </div>
  )
}