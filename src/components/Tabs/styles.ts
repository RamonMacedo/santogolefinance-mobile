import styled from 'styled-components/native';

interface TabsProps{
  isTotal?: boolean;
}

export const Container = styled.View`
  height: 200px;
  margin-top: -120px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 10},
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 300px;
  height: 200px;
  background: ${({ isTotal }: TabsProps): string => (isTotal ? '#FFB115' : '#FFFFFF')};
  border-radius: 5px;
  margin-left: 20px;
  padding: 20px;
  justify-content: space-between;
`;

export const TabHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerText = styled.View``;

export const TabTextHeader = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${({ isTotal }: TabsProps): string => (isTotal ? '#FFFFFF' : '#292929')};

`;

export const TabTextValor = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 30px;
  color: ${({ isTotal }: TabsProps): string => (isTotal ? '#FFFFFF' : '#292929')};
`;

export const TabTextBold = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 30px;
  color: ${({ isTotal }: TabsProps): string => (isTotal ? '#FFFFFF' : '#292929')};
`;

export const TabLastEntry = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: ${({ isTotal }: TabsProps): string => (isTotal ? '#FFFFFF' : '#959595')};
`;
