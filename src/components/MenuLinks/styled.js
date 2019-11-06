import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(-100%);
    transition: 300ms all;
    z-index: 1000;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.8rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  font-weight: bold;
  &:hover {
    color: var(--highlight);
  }
`