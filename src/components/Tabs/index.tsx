import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, TabsContainer, TabItem, TabHeader, TabTextHeader, ContainerText, TabTextValor, TabTextBold, TabLastEntry } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <TabHeader>
            <TabTextHeader>Entradas</TabTextHeader>
            <Icon name="arrow-up-circle" size={40} color="#12A454" />
          </TabHeader>
          <ContainerText>
            <TabTextValor>R$ <TabTextBold>17.400</TabTextBold>,00</TabTextValor>
            <TabLastEntry>Última entrada dia 27 de maio</TabLastEntry>
          </ContainerText>
        </TabItem>

        <TabItem>
          <TabHeader>
            <TabTextHeader>Saidas</TabTextHeader>
            <Icon name="arrow-down-circle" size={40} color="#E83F5B" />
          </TabHeader>
          <ContainerText>
          <TabTextValor>R$ <TabTextBold>1.259</TabTextBold>,00</TabTextValor>
            <TabLastEntry>Última entrada dia 27 de maio</TabLastEntry>
          </ContainerText>
        </TabItem>

        <TabItem isTotal>
          <TabHeader>
            <TabTextHeader isTotal>Saidas</TabTextHeader>
            <Icon name="dollar-sign" size={40} color="#FFFFFF" />
          </TabHeader>
          <ContainerText>
            <TabTextValor isTotal>R$ <TabTextBold isTotal>16.141</TabTextBold>,00</TabTextValor>
            <TabLastEntry isTotal>01 à 27 de maio</TabLastEntry>
          </ContainerText>
        </TabItem>
      </TabsContainer>
    </Container>
  )
}

export default Tabs;
