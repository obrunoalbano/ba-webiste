import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
`
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 4.5rem 0 30rem;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
`