import Head from 'next/head'
import Header from "../components/Header"
import axios from "axios"
import Link from "next/link"
export default function Home({posts}) {
  return (
    <div >
      <Head>
        <title>My app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
          <Header />
          {posts.map(post=>(
              <li key={post.userId}>
                <Link href={`/page?id=${post.id}`}><a>{post.title}</a></Link>
                </li>
          ))}
       </main>   
    </div>
  )
}
Home.getInitialProps = async (ctx) => {
          const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
          const {data} = res
          return {posts:data}
  }
      