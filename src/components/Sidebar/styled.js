import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 30rem;
  justify-content: space-between;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1.6rem 2rem;
    width: 100%;

    &.-isnav {
      .links-wrapper {
        transform: translateX(0);
      }
    }
  `}
`

export const SidebarNav = styled.div`

  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  top: 18px;
  right: 10px;
  color: var(--texts);
  z-index: 2000;

  svg {
    max-width: 100%;
    max-height: 100%;
  }

  ${media.greaterThan("large")`
    display: none;
  `}
`

export const SidebarBottom = styled.section`
  width: 100%;
`