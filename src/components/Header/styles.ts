import styled from 'styled-components/native';

export const Container = styled.View``;

export const ContentHeader = styled.View`
  height: 130px;
  background: #181818;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentLogo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const LogoImg = styled.Image`
  width: 108px;
  height: 108px;
  margin-left: -10px;
`;

export const LogoText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #FFF;
  margin-left: -10px;
`;

export const TextBold = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #FFF;
`;

export const ContentData = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #FFF;
`;
