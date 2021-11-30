import styled, {css} from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

interface IBubbleProps {
  fromMe?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const ContainerInput = styled.View`
  background: #ffffff;
  flex-direction: row;
  padding-bottom: ${getBottomSpace()}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
`;

export const InputMessage = styled.TextInput`
  background: #f6f7fb;
  border-radius: 10px;
  padding: 16px;
  flex: 2;
  justify-content: center;
`;

export const ButtonSend = styled.TouchableOpacity`
  background: #3ba58a;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 45px;
  margin-left: 16px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const BubbleUser = styled.View<IBubbleProps>`
  margin: 10px;
  min-width: 100px;

  ${props =>
    props.fromMe
      ? css`
          background: #4e436d;
          align-self: flex-end;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 20px;
          padding: 8px 25px;
          text-align: left;
        `
      : css`
          background: #f6f7fb;
          align-self: flex-start;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          border-top-left-radius: 20px;
          padding: 8px 25px;
          text-align: right;
        `}
`;

export const MessageText = styled.Text<IBubbleProps>`
  font-size: 16px;
  ${props =>
    props.fromMe
      ? css`
          color: white;
        `
      : css`
          color: #5d5c60;
        `}
`;
