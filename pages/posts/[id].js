import { getAllPostIds, getPostData } from '../../lib/api'

const Blogger = ({ postData }) => {
  console.log(postData)
  return (
    <div>
      <section>
        <ul>
          <div>
            <h1 className="title">
              {postData.id}
            </h1>
            <li >
              <img src={postData.img} />
              <br />
              {postData.date}
              <br />
              {postData.title}
              <br />
              {postData.id}
            </li>
          </div>
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

export default Blogger

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}