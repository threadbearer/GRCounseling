import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { getAllPostIds, getPostData } from "@/utils/posts";
import Date from "@/utils/date";
import style from "../blogs.module.scss";
import generic from "@/styles/generic.module.scss";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return{
        props: {
            postData,
        },
    };
}


export default function Post({ postData }) {
    return ( 
        <>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <div className={style.page}>
            <Link href='/blogs'>Back to Blogs</Link>
            <h1>{postData.title}</h1>
            <p>{postData.author}</p>
            <Date dateString={postData.date} />
            <Image className={style.cover} width={300} height={200} alt='' src={postData.image}/>
            <div className={style.article} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
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

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
         paths,
         fallback: false,
    };   
}