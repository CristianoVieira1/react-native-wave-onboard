import styled from 'styled-components/native';

export const Container = styled.View`
  z-index: 10;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
