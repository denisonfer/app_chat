import React, {useCallback, useContext, useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {AuthContext} from '../../contexts/authProvider';
import {WebsocketContext} from '../../contexts/websocketProvider';

import {
  BubbleUser,
  ButtonSend,
  Container,
  ContainerInput,
  InputMessage,
  MessageText,
  TextButton,
} from './styles';

interface IMessageDTO {
  userName: string;
  room: number;
  message: string;
  createdAt: Date;
  read: boolean;
  delivered: boolean;
  fromMe: boolean;
}

const Chat: React.FC = () => {
  const scrollViewRef = useRef();

  const {socket, room, message, setMessage} = useContext(WebsocketContext);
  const {user} = useContext(AuthContext);

  const [listMessages, setListMessages] = useState<IMessageDTO[]>([]);
  const [userJoined, setUserJoined] = useState('');

  socket.on('message', data => {
    const arr = [...listMessages];
    arr.push(data);
    const messagesReceived = [...new Set(arr)];

    setListMessages(
      messagesReceived.map(data => ({
        ...data,
        fromMe: data.userName === user ? true : false,
      })),
    );
  });

  socket.on('user_joined', (userName: string) => {
    console.tron.log('userName', userName);
    setUserJoined(userName);
  });

  const handleSendMessage = useCallback(() => {
    const data = {
      userName: user,
      room,
      message,
    };
    socket.emit('message', data);
    setMessage('');
  }, [message, room, setMessage, socket, user]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={64}>
      <Container>
        {userJoined !== '' && (
          <MessageText>{userJoined} - Acabou de entrar!</MessageText>
        )}

        <ScrollView
          contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {listMessages.map(messageData => (
            <BubbleUser key={messageData.message} fromMe={messageData.fromMe}>
              <MessageText fromMe={messageData.fromMe}>
                {messageData.message}
              </MessageText>
            </BubbleUser>
          ))}
        </ScrollView>

        <ContainerInput>
          <InputMessage
            placeholder="Digite sua mensagem"
            value={message}
            onChangeText={(text: string) => setMessage(text)}
            multiline
          />
          <ButtonSend onPress={handleSendMessage}>
            <TextButton>Enviar</TextButton>
          </ButtonSend>
        </ContainerInput>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Chat;
