import React from 'react';
import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';
import { Bio } from './';

import 'antd/dist/antd.css';

const StyledLayout = styled(AntLayout)`
  width: 60%;
  margin: 0 auto;
`;

const StyledSider = styled(AntLayout.Sider)`
  background: #fff;
  height: 100vh;
  padding: 30px 25px;
`;

const StyledContent = styled(AntLayout.Content)`
  background: #fff;
  height: 100vh;
  padding: 30px 20px;
`;

const Layout = ({ children, showSider = true }) => {
  return (
    <StyledLayout>
      {showSider && <StyledSider width={400}>
        <Bio />
      </StyledSider>}
      <StyledContent>
        {children}
      </StyledContent>
    </StyledLayout>
  );
};

Layout.Header = AntLayout.Header;
Layout.Sider = StyledSider;
Layout.Content = StyledContent;
Layout.Footer = AntLayout.Footer;

export { Layout };
