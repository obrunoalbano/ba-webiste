import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 4.5rem 0 30rem;
  transition: background, color 0.5s;
  width: 100%;

  ${media.lessThan("large")`
    padding: 7rem 0 3rem 0;
  `}

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`