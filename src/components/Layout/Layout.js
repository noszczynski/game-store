import React from "react";
import PropTypes from "prop-types";
import SideMenu from "../SideMenu/SideMenu";
import TopBar from "./TopBar";
import ThemeProviderWrapper from "../ThemeProviderWrapper";
import Description from "./Description";
import TitlePicture from "./TitlePicture";
import {
  Content,
  ContentWrapper,
  Title,
  TitleContent,
  TitleWrapper,
  Wrapper,
} from "./StyledLayout";
import { apiUrl } from "../../api/api";

const Layout = ({
  site,
  data,
  setFilteredData,
  removeTopPadding,
  removeSidePadding,
  setTheme,
  children,
}) => {
  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper clearTopPadding={removeTopPadding}>
        <TopBar items={data} setter={setFilteredData} setTheme={setTheme} />
        <Content removeSidePadding>
          <TitleWrapper>
            <TitleContent>
              <Title>{site && site.title}</Title>
              <Description>{site && site.description}</Description>
            </TitleContent>
            {site && site.cover ? (
              <TitlePicture source={`${apiUrl}${site.cover.url}`} />
            ) : null}
          </TitleWrapper>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

Layout.propTypes = {
  site: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.object,
  }),
  data: PropTypes.arrayOf(PropTypes.object),
  setFilteredData: PropTypes.func,
  setTheme: PropTypes.func,
  children: PropTypes.node,
  removeTopPadding: PropTypes.bool,
  removeSidePadding: PropTypes.bool,
};

Layout.defaultProps = {
  site: {
    title: "",
    description: "",
    cover: null,
  },
  data: null,
  setFilteredData: undefined,
  removeTopPadding: false,
  removeSidePadding: false,
};

export default ThemeProviderWrapper(Layout);
