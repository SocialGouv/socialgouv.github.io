import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { Hero, Layout, Section } from "../src/composants";

// Demo styles, see 'Styles' section below for some notes on use.
//import 'react-accessible-accordion/dist/fancy-example.css';
//import '../node_modules/react-accessible-accordion/dist/minimal-example.css';

const Faq = () => (
  <Layout>
    <Hero
      style={{ backgroundImage: `url(/images/faq.jpg)` }}
      title="FAQ"
      tagline="Les questions le plus fréquemment posées"
    />

    <Section className="section-white" title="" subTitle="">
      <Accordion allowMultipleExpanded="true">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Qu&apos;est-ce qu&apos;une fabrique de services numériques ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Une fabrique numérique est une structure légère qui permet
              d&apos;accueillir des porteurs d&apos;idées internes, les «
              intrapreneurs », et de leur fournir le cadre et les outils
              nécessaires pour pouvoir créer leur produit numérique en mode «
              startup d&apos;état » pendant 6 mois.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Qu&apos;est-ce qu&apos;une Startup d&apos;Etat ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {" "}
              ◦ Une Startup d&apos;Etat permet le développement rapide de
              produits et services numériques, en cycles courts de
              développement. Elle est agencée selon le modèle de la fabrique
              numérique interministériel portée par la DINSIC. Elle est composée
              d&apos;une équipe autonome, et a pour objectif de produire un
              service numérique qui résout un irritant vécu par les usagers ou
              les agents, et dont les premiers impacts peuvent être mesurés dans
              les 6 mois.
              <br />
              <a href="https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html">
                https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html
              </a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Pourquoi une fabrique numérique dans les ministères sociaux ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Car le numérique transforme en profondeur notre environnement et
              apporte des opportunités nouvelles. Les ministères sociaux ont un
              rôle à jouer dans le domaine du numérique, en tant que porteurs de
              valeurs et de services pour l&apos;ensemble des citoyens. Les
              attentes des usagers sont particulièrement fortes dans le domaine
              social, dans toutes ses composantes, qui ont un impact direct sur
              la vie quotidienne de chacun.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Y a-t-il d&apos;autres fabriques numériques ministérielles ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              ◦ Au niveau interministériel, BetaGouv, la fabrique des services
              numériques de la DINSIC Fabrique de services publics numériques —{" "}
              <a href="beta.gouv.fr">beta.gouv.fr</a>
              <br />◦ Au niveau ministériel, le ministère de l&apos;écologie, le
              ministère de l&apos;Intérieur
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Qui est chargé fonctionnellement de l&apos;animation de la mission
              «Fabrique numérique des ministères sociaux » ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              La direction des systèmes d&apos;information (DSI) est chargée de
              l&apos;animation fonctionnelle de la mission « fabrique numérique
              des ministères sociaux ». Elle est composée d&apos;un chef de la
              mission, d&apos;un Techlead, d&apos;un Product Manager. Les
              intrapreneurs sont également aidés de coachs et de développeurs
              (experts du secteur numérique Numa, coachs et développeurs de la
              DINSIC).
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Quels ont été les résultats du premier appel à candidatures en
              2017 ?<div className="accordion__arrow" role="presentation" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Un total de 138 idées a été déposé par les agents de
              l&apos;administration centrale, des DIRECCTE, des DR(D)JSCS) et
              des ARS pour la fabrique numérique des ministères sociaux, dont 41
              dossiers pour les DIRECCTE (30 %), 35 dossiers pour la DGS (25%),
              22 dossiers pour les DRJSCS (16%) et 19 dossiers pour les
              directions du SG (14 %). Parmi ces 138 candidatures, 19 ont été
              pré-sélectionnées pour la sélection finale effectuée par un jury
              composé d&apos;institutionnels et d&apos;experts issus du
              numérique.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Quelles qualités doivent avoir un porteur d&apos;idées ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Il doit avoir les qualités d&apos;un « intrapreneur » souhaitant
              s&apos;engager et étant en capacité de se rendre disponible.
              C&apos;est une personne engagée, avec des compétences et une
              expertise propres, qui a la posture nécessaire pour porter une
              Startup d&apos;Etat. Il est accompagné par des coachs et des
              développeurs pour présenter un premier produit au bout de six
              mois.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Travaille-t-on différemment au sein de la fabrique numérique ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Le fonctionnement de la fabrique numérique est basé sur le
              principe innovant du développement agile itératif. L&apos;objectif
              est de mettre en production un service rapidement, puis de
              l&apos;améliorer en continue, avec les utilisateurs. Confrontation
              au terrain très tôt, droit à l&apos;erreur, travail par
              itérations, auto-organisation,… sont des principes liés aux
              méthodes dites « agiles ». Celles-ci découpent, séquencent les
              réalisations en briques plus rapides à déployer et plus proches
              des attentes réelles des utilisateurs.
              <br />◦{" "}
              <a href="https://beta.gouv.fr/2016/11/28/equipes-autonomes.html">
                https://beta.gouv.fr/2016/11/28/equipes-autonomes.html
              </a>
              ◦{" "}
              <a href="https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html">
                https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html
              </a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Où se situe la fabrique numérique des ministères sociaux ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              La fabrique numérique se situe dans les locaux de la DSI, au 8è
              étage de la tour Mirabeau à Paris.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Y aura-t-il d&apos;autres appels à candidatures auprès des agents
              ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Oui, tous les ans mais rien n&apos;est figé… L&apos;appel à idées
              pour la saison 2 est en cours !
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              J&apos;ai encore des questions… Qui contacter ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              L&apos;équipe de DSI Fabrique Numérique :{" "}
              <a href="mailto:DSI-incubateur@sg.social.gouv.fr">
                DSI-incubateur@sg.social.gouv.fr
              </a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Section>
  </Layout>
);

export default Faq;
