import React from 'react'
import Layout from '../components/Layout'

import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="Saiba um pouco mais sobre o desenvolvedor por trás deste website."/>
    <S.PostHeader>
      <S.PostTitle>Sobre mim</S.PostTitle>
    </S.PostHeader>
    <S.MainContent>
      <p>
        Olá, me chamo Bruno Luiz Albano, nasci em Joinville/SC e
        atualmente atuo como freelancer para projetos envolvendo desenvolvimento front-end.
      </p>

      <p>
        Já participei de projetos envolvendo empresas como Globo, Kavo, Premier
        e outras mais. Cursei Tecnologia em sistemas para internet na Unisociesc no
        ano de 2012.
      </p>

      <p>
        Estou sempre em busca de novos desafios e oportunidades. <br/>Gosto de tudo que envolve criatividade, design, música, web e interatividade.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Stylus, Sass, Less, PostCSS)</li>
        <li>Css Frameworks (Bootstrap, Foundation, Bulma)</li>
        <li>Javascript</li>
        <li>Vue / React</li>
        <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
        <li>Git</li>
        <li>Scrum and Kanban</li>
        <li>O que eu não sei, busco aprender =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
    </S.MainContent>
  </Layout>
)

export default AboutPage