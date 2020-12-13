import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/api'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
const Home = ({allPostsData }) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map((item,index) => (
            <div key={index}>
              <h1 className="title">
                Welcome to <Link as={`/posts/${item.id}`} href="/posts/[id]">{item.id}</Link>
              </h1>
              <li >
                <img src={item.img} />
                <br />
                {item.date}
                <br />
                {item.title}
                <br />
                {item.id}
              </li>
            </div>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
        img{
          width:500px;

        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
