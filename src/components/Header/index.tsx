import React from 'react';

import logopng from '../../assets/santogole.png';

import { Container, ContentHeader, ContentLogo, LogoImg, LogoText, TextBold, ContentData } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ContentHeader>
        <ContentLogo>
          <LogoImg source={logopng} />
          <LogoText>SG<TextBold>Finance</TextBold></LogoText>
        </ContentLogo>
        <ContentData>31 de maio</ContentData>
      </ContentHeader>
    </ Container>
  )
}

export default Header;
