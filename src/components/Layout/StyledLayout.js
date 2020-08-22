import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: ". content";
`;

const Title = styled.section`
  margin: ${({ theme }) => theme.sizes.margin.standard} 0;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-weight: ${({ theme }) => theme.sizes.fontWeight.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.pageTitle};
  transition: ${({ theme }) => theme.transitions.changeTheme};
  text-transform: capitalize;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ clearTopPadding }) => (clearTopPadding ? 0 : 88)}px 0
    ${({ theme }) => theme.sizes.padding.lite};
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  transition: ${({ theme }) => theme.transitions.changeTheme};
`;

const Content = styled.div`
  padding: 0 ${({ theme }) => theme.sizes.padding.standard};
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  column-gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.laptopL} {
    grid-template-columns: 1fr 1fr;
  }
`;

const TitleContent = styled.div`
  max-width: 75%;
`;

export { Wrapper, Title, TitleWrapper, Content, ContentWrapper, TitleContent };
