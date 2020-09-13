import React from 'react';
import styled from 'styled-components';
import { Avatar, Menu, Button } from 'antd';
import { Mail as MailIcon, GitHub as GitHubIcon } from 'react-feather';

const StyledDiv = styled.div`
  h1 {
    margin: 15px 0px;
  }

  .ant-menu .ant-menu-item {
    background: unset;
    height: 25px;
    line-height: 25px;
    margin-bottom: 8px;
    color: black;
    font-size: 16px;
    padding-left: 8px;
  }

  .ant-menu-item.ant-menu-item-selected {
    text-decoration: underline;
  }

  .footer-btns {
    margin: 40px 0px;

    a {
      background: #ebebeb;
      padding: 1px;
    }

    a ~ a {
      margin-left: 5px;
    }
  }
`

export const Bio = () => {

  return (
    <StyledDiv>
      <Avatar size={80} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <h1>Raymond Tam</h1>
      <p>
        Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
      </p>
      <Menu>
        <Menu.Item><a href="/">Home</a></Menu.Item>
        <Menu.Item><a href="/about-me">About Me</a></Menu.Item>
      </Menu>
      <div className = 'footer-btns'> 
        <Button type='link' size='small' icon={<MailIcon size={20}/>} href="mailto:raymondtamtwtp@gmail.com"/>
        <Button type='link' size='small' icon={<GitHubIcon size={20}/>} href="https://github.com/rt-cff"/>
      </div>
    </StyledDiv>
  );
};
