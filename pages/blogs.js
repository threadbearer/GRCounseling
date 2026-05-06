import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from "@/utils/posts";
import style from "./blogs.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData,
    },
  }
}

export default function Blogs({ allPostsData }) {

  return(
    <div className={style.page}>
      <h2>Blogs</h2>
      <ul>
        {allPostsData.map(({ id, date, title, image }) => (
          <li key={id} >
            <Link href={`/blogs/${id}`}  className={style['blog-link']}>
              <Image width={300} height={200} alt='' src={image}/>
              <div>
                <p>{date}</p>
                <h3>{title}</h3>
              </div>
            </Link>
          </li>
          ))}
      </ul>
    </div>
  )
}