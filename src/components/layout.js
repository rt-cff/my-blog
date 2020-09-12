import React from 'react';
import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';

const StyledLayout = styled(AntLayout)`
  width: 60%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
};

Layout.Header = AntLayout.Header;
Layout.Sider = AntLayout.Sider;
Layout.Content = AntLayout.Content;
Layout.Footer = AntLayout.Footer;

export { Layout };
