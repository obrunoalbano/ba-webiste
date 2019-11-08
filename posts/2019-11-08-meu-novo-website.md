---
date: 2019-11-08 16:54:23
title: Meu novo website
description: Neste post explico um pouco sobre a stack que utilizei para o desenvolvimento deste website.
category: ME
background: "#61728f"
image: /assets/img/layout.png
# background: "#d6ba32" "#23809e"
---

# Introdução

Fala pessoal, no post de hoje, vou apresentar um pouco sobre a stack que utilizei para o desenvolvimento deste website. Claro que vale lembrar que esse projeto segue referencia ao [curso](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/) ministrado pelo Willian Justen na qual eu pude concluir.

# Visual

![Layout do novo website](/assets/img/layout.png)

A estrutura do site foi dividida em sidebar, main content e uma menubar.

## Sidebar

Na sidebar foi adicionado os seguintes componentes:

- Avatar 
- Profile
- SocialLinks
- MenuLinks 

## Main Content

Na main content é chamado a parte para visualizar todo conteudo dinâmico do website tais como a lista dos posts, conteudo dos posts e pages.

Nesta area também foi adicionado o componente de paginação ( Pagination ) para a lista dos posts.


## MenuBar

Para facilitar a navegação do usuário no menubar foram adicionados:

- link para home
- link para a página de busca
- toggle para mudar a cor do tema para "dark"(default) ou "light"
- toggle para mudar o estilo de visualização dos posts "list"(default) ou "grid"
- scroll to top

# Gatsby

Há tempos queria atualizar meu website e estava procurando na comunidade libs atuais que estavam em crescente desenvolvimento. Foi quando encontrei o Gatsby que nada mais é que um gerador de sites estáticos feito em React e alimentado com GraphQL.

Bom mais eu nunca tinha desenvolvido nada em React e muito menos usado GraphQL e agora ? Qual seria o foco inicial de estudos? Simples uma pequena busca na internet e encontrei o [curso](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/) do Willian Justen.

Posso dizer que aprendi bastante no curso e achei o Gatsby uma ferramenta incrível! com uma documentação muito detalhada e uma comunidade em crescente expansão. Eu consigo fazer um site se tornar uma PWA com somente uma linha!

# Styled Components

Para estilos eu sempre costumava usar SASS com BEM, numa estrutura padrão que eu tinha no meu boilerplate. Porém como o foco deste novo website era aprender coisas novas, resolvi me atualizar e usar [CSS-in-JS](https://cssinjs.org/).

Como o Gatsby é feito usando React minha escolha foi o [styled-components](https://www.styled-components.com/), que é super leve e simples de usar. Você cria os estilos diretamente para o componente e também os estilos globais para todas as páginas.

Para o responsivo eu utilizei o [styled-media-query](https://github.com/morajabi/styled-media-query)

Segue abaixo um exemplo da estrutura:

```bash
├── components
│   ├── Avatar
│   │   ├── index.js
│   │   └── styled.js
│   ├── Layout
│   │   ├── index.js
│   │   └── styled.js
│   ├── MenuBar
│   │   ├── index.js
│   │   ├── styled.js
│   │   └── trackers.js
│   ├── MenuLinks
│   │   ├── content.js
│   │   ├── index.js
│   │   └── styled.js
...
```

Repare na estrutura acima que crio uma pasta para cada componente seguido de um `index.js` que é aonde fica a parte da lógica e um `styled.js` que é aonde ficam os estilos. 

Segue abaixo um trecho do código:

```js
// components/Layout/styled.js

import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-top: 4.125rem;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  transition: background 0.5s, color 0.5s;
  width: 100%;

  ${media.lessThan('large')`
    padding: 0 0 3rem 0;
  `}
`
```

Nesse arquivo, eu crio e exporto minhas classes e então para utilizar, faço assim:

```jsx
// components/Layout/index.js

import * as S from './styled'

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <TransitionPortal level="top">
      <Sidebar site={site.siteMetadata} />
    </TransitionPortal>
    <S.LayoutMain>{children}</S.LayoutMain>
    <TransitionPortal level="top">
      <MenuBar />
    </TransitionPortal>
  </S.LayoutWrapper>
)
```

Perceba que eu faço um import de tudo que tem em `./styled` como `S`. Assim os componentes que iniciam por `<S`. eu sei que são referentes a estilo e não a outros componentes externos.

Achei essa organização (que aprendi no curso citado acima) muito interessante pois ganha-se legibilidade separando os arquivos e facilidade de identificação do que é estilo e do que não é.

# Markdown + Graphql = Remark

Confesso que conhecia pouco sobre [Markdown](https://daringfireball.net/projects/markdown/) usava mais para escrever Pull Request no github/bitbucket nada tão afundo.

Mais no curso pude conhecer o poder deste formato. Com o [Markdown](https://daringfireball.net/projects/markdown/) ao invés de escrever tags, eu simplesmente coloco símbolos onde eu quero que o mesmo converte de texto simples para html. As vezes, como é o caso dos parágrafos, é só pular uma linha e ele entende a quebra.

Mas como fazer isso funcionar no Gatsby? Usando o [Gatsby Transformer Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), que pega os meus posts em Markdown, faz algumas mágicas e libera os dados via GraphQL para eu poder usar no Gatsby sem problemas!

Depois de instalar o plugin e configurar no arquivo `gatsby-config.js` (que é o arquivo onde todos os plugins e configurações são feitas), bastou subir o servidor e eu podia ver todos os dados lá no `http://localhost:8000/___graphql`. 

Abaixo um exemplo:

![Screenshot da interface do GraphQLi, onde eu tenho uma query buscando por vários dados de todos os posts](/assets/gatsby-graphql-remark.png)

# Algolia

Para o busca do website eu segui o que foi usado no curso. O [Algolia](https://www.algolia.com/) é um sistema de busca extremamente rápido e inteligente.

Ele possui vários planos, e o que eu uso é o Community, que é gratuito e já me permite 50 mil operações por mês, o que é bem suficiente para o tamanho do meu website/blog.Além disso, ele me dá alguns dados relacionados a que tipos de buscas foram feitas no website.

Abaixo segue um screenshot sobre essa parte dos analytics:

![Imagem mostrando o analytics do algolia](/assets/algolia-search.png)

Um detalhe **não menos importante**, é que o plugin oficial do Algolia não trabalha com cache e partial updates, então toda vez que você faz um build, ele apaga todos os índices e refaz. Isso é ruim, pois como citado acima o [Algolia](https://www.algolia.com/) só permite 50 mil operações por mês então, se eu num fiz nada novo, num faz sentido refazer. O legal é que existe um fork desse plugin que faz exatamente o que queremos, o plugin é o [gatsby-plugin-algolia-search](https://www.npmjs.com/package/gatsby-plugin-algolia-search), ele não muda em nada na configuração, somente essa parte de partial updates.


# Disqus

Para a parte de comentários do blog eu segui a dica do curso e utilizei o [Disqus](https://disqus.com/). Para integração com o Gatsby eu utilizei o pacote [react-disqus-comments](https://www.npmjs.com/package/react-disqus-comments).

# Extras

Abaixo listo os outros itens que foram utilizados no website:

## Transições

Para fazer essas transições, eu utilizei o [gatsby-plugin-transition-link](https://transitionlink.tylerbarnes.ca/docs/).

```jsx
<AniLink cover to="/" direction="left" duration={3} bg="white">
  Home
</AniLink>
```

Basta você passar qual tipo de animação que deseja (`fade`, `swipe`, `cover`, `paintDrip`) e alguns outros parâmetros como `direction` e `duration`.

## Highlight Code

Para mostrar o código de um jeito mais estilizado, eu utilizo o [PrismJS](https://prismjs.com/). E no Gatsby utilizo o plugin [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/), que faz o parser do código que tá no Markdown e já estiliza para mim.

## Lazy loading e otimização de imagem

As imagens dos posts, são carregadas só quando você se aproxima e além disso, para não ficar um espaço vazio e criar "pulos", também carrego um thumb bem pequeno e com o tamanho final definido, isso dá aquele efeito de blur, comum no Medium e outros sites. Outra coisa que também é feito, é que eu carrego diferentes tamanhos de imagem de acordo com a tela, melhorando muito a performance do website.

Para fazer todas essas otimizações, eu utilizo o [Gatsby Image](https://using-gatsby-image.gatsbyjs.org/), que usa o Sharp por debaixo dos panos para gerar as imagens para nós.

## PWA

Para fazer meu website virar um PWA foi muito muito simples. Eu usei 2 plugins, um para criar o manifest, que é o [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/) e o outro para fazer a criação do Service Worker e salvar minhas páginas, que é o [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/). Esses dois pacotes são oficiais do Gatsby e já vem inclusos em alguns starters.

# Performance

O Gatsby faz várias otimizações no momento do build do site. Ele minifica tudo, separa o css para ter critical inline, faz renderização assíncrona, além de fazer preload dos links, para ter uma sensação de abertura instantânea quando clicamos.

# Conclusão

Bom, esse foi um review sobre meu novo website, vale lembrar novamente que segui os passos do [curso](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/) do Willian Justen no qual aprendi muito sobre o Gatsby e todas as ferramentas utilizadas. Recomendo muito o mesmo e espero cada dia aprender mais sobre essa e demais libs javascript. =)