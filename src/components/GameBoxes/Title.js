import styled from "styled-components";

const common = `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const TitlePrimary = styled.div`
  ${common};
  padding: ${({ theme }) => theme.sizes.padding.lite} 0 0;
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  transition: transform 0.3s ease;
  font-weight: ${({ theme }) => theme.sizes.fontWeight.medium};
`;

const TitleSecondary = styled.div`
  ${common};
  padding: 0.5rem ${({ theme }) => theme.sizes.padding.lite};
  background-color: rgba(0, 0, 0, 0.3); // TODO to variable
  color: ${({ theme }) => theme.colors.light};
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

export { TitlePrimary, TitleSecondary };
