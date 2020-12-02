import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
/*import { getSortedPostsData } from "../lib/posts";*/
import Link from "next/link";
import Date from "../components/date";

/*export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}*/

export async function getServerSideProps() {
  const res = await fetch(
    "https://sissa-cotizador.herokuapp.com/recetas?page=0&offset=10&idReceta=1",
    {
      crossDomain: true,
      method: "GET",
    }
  );
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  /* return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [Hello, I'm Fernando. I'm a musician that needs money in order to
          live. I love you guys.]
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}*/
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:description" content={data.recetas[0].receta} />
        <meta
          property="og:image"
          content="https://nrc.org.co/wp-content/uploads/2017/08/BPRM-1.png"
        />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{data.recetas[0].receta}</h2>
        {/*(<ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          </ul>)*/}
      </section>
    </Layout>
  );
}
