import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { parse } from "yaml";
import styles from "../styles/Home.module.css";

type Project = {
  name: string;
  description: string;
  category: string;
  tags: string[];
  href: string;
};

type Article = Project;

type Content = {
  projects: Project[];
  articles: Article[];
};

const uniq = (arr: any[]) => Array.from(new Set(arr));

const Card = ({
  href,
  title,
  description,
  tags,
}: {
  href: string;
  title: string;
  description: string;
  tags?: string[];
}) => (
  <a href={href} className={styles.card}>
    <h3>{title} &rarr;</h3>
    <p>{description}</p>
    {tags && (
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    )}
  </a>
);

const Home: NextPage<{ content: Content }> = ({
  content,
}: {
  content: Content;
}) => {
  const categories = uniq(content.projects.map((p) => p.category)).sort(
    (a, b) => {
      const aCount = content.projects.filter((p) => p.category === a).length;
      const bCount = content.projects.filter((p) => p.category === b).length;
      return bCount - aCount;
    }
  );
  const articles = content.articles;
  return (
    <div className={styles.container}>
      <Head>
        <title>SocialGouv - open source</title>
        <meta name="description" content="SocialGouv - open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img
            alt="Logo SocialGouv"
            src="/socialgroove-100.jpg"
            width={70}
            style={{ verticalAlign: "top", marginRight: 20 }}
          />
          <a href="https://github.com/SocialGouv">SocialGouv</a> open source
        </h1>
        <p className={styles.description}>
          Composants publiés en open-source par la{" "}
          <a href="https://www.fabrique.social.gouv.fr">
            fabrique des ministères sociaux
          </a>
        </p>
        {categories.map((category) => {
          const projects = content.projects
            .filter((p) => p.category === category)
            .sort((a, b) => a.name.localeCompare(b.name));

          return (
            <div key={category}>
              <h2 style={{ textAlign: "center" }}>{category}</h2>
              <div className={styles.grid}>
                {projects.map((project) => (
                  <Card
                    key={project.name}
                    href={`https://github.com/SocialGouv/${project.name}`}
                    title={project.name}
                    description={project.description}
                    tags={project.tags}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <br />
        <br />
        <br />
        <hr className={styles.hr} />
        <p className={styles.description}>
          Retrouvez tous nos travaux open-source sur{" "}
          <a href="https://github.com/SocialGouv">GitHub/SocialGouv</a>
          <br />
          <br />
          Voir également la{" "}
          <a href="https://www.numerique.gouv.fr/publications/politique-logiciel-libre/">
            Politique de contribution aux logiciels libres de l’État
          </a>{" "}
          et <a href="https://code.gouv.fr">code.gouv.fr</a>
        </p>{" "}
        <hr className={styles.hr} />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}>Lectures recommandées</h2>
        <div className={styles.grid}>
          {articles.map((article) => (
            <Card
              key={article.name}
              href={article.href}
              title={article.name}
              description={article.description}
              tags={article.tags}
            />
          ))}
        </div>
        <br />
        <br />
        <hr className={styles.hr} />
        <br />
        <br />
        <img src="/cat-800.jpg" alt="Beautifool cat" />
        <br />
        <img src="/joke-focus.png" alt="XKCD on focus and context" />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const yamlData = fs
    .readFileSync(path.join(__dirname, "..", "..", "..", "content.yaml"))
    .toString();
  const content = parse(yamlData);
  return { props: { content, pop: 2 } };
};
