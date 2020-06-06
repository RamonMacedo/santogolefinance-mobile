import React from 'react';

import Tabs from '../../components/Tabs';
import Header from '../../components/Header';

import { Container, LongHeader } from './styles';

const Dashboard: React.FC = () => {

  // function formatDate(date: Date): string {
  //   return String(new Date(date).toLocaleDateString());
  // }

  return (
    <>
    <Container>
      <Header />
      <LongHeader />
      <Tabs />
    </Container>
    </>
  );
};

export default Dashboard;
