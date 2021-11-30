import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: white;
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
  border: 1px solid black;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
`;
export const ButtonSignIn = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 6px;
  background: darkviolet;
  align-items: center;
  justify-content: center;
`;

export const ButtonAnonymousSignIn = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 6px;
  background: darkorange;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
`;
