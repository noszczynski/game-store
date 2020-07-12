import styled from "styled-components";
import sizes from "../../utils/sizes";
import colors from "../../utils/colors";

const common = `
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const TitlePrimary = styled.div`
  ${common};
  padding: ${sizes.padding.lite} 0 0;
  background-color: ${colors.gray100};
  color: ${colors.dark};
  transition: transform 0.3s ease;
  font-weight: 500;
`;

const TitleSecondary = styled.div`
  ${common};
  padding: 0.5rem ${sizes.padding.lite};
  background-color: rgba(0, 0, 0, 0.3); // TODO to variable
  color: ${colors.light};
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

export { TitlePrimary, TitleSecondary };
