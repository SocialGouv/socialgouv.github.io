import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { parse } from "yaml";
import styles from "../styles/Home.module.css";

type Content = {
  projects: {
    name: string;
    description: string;
    category: string;
    tags: string[];
  }[];
};

const uniq = (arr: any[]) => Array.from(new Set(arr));

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
  return (
    <div className={styles.container}>
      <Head>
        <title>SocialGouv - open source</title>
        <meta name="description" content="SocialGouv - open source" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
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
                  <a
                    href={`https://github.com/SocialGouv/${project.name}`}
                    className={styles.card}
                    key={project.name}
                  >
                    <h3>{project.name} &rarr;</h3>
                    <p>{project.description}</p>
                    {project.tags && (
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span className={styles.tag} key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
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
        <img src="/cat-800.jpg" alt="Beautifool cat" />
        <br />
        <img src="/joke-focus.png" alt="XKCD on focus and context" />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const yamlData = fs
    .readFileSync(path.join(__dirname, "..", "..", "..", "content.yaml"))
    .toString();
  const content = parse(yamlData);
  return { props: { content, pop: 2 } };
};
