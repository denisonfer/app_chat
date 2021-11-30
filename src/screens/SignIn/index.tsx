import React, {useCallback, useContext, useState} from 'react';
import {AuthContext} from '../../contexts/authProvider';
import {WebsocketContext} from '../../contexts/websocketProvider';

import {
  ButtonAnonymousSignIn,
  ButtonSignIn,
  Container,
  Input,
  Label,
  TextButton,
} from './styles';

const SignIn: React.FC = () => {
  const [userName, setUserName] = useState('');

  const {setIsSigned, setUser} = useContext(AuthContext);
  const {socket, setRoom} = useContext(WebsocketContext);

  const handleEnterTheChat = useCallback(() => {
    const roomInSocket = 1;
    const username = userName
      ? userName
      : `anonymous_${Math.round(Math.random())}`;

    socket.emit('join_chat', {
      userName: username,
      room: roomInSocket,
    });

    setUser(username);
    setRoom(roomInSocket);
    setIsSigned(true);
  }, [userName, socket, setUser, setRoom, setIsSigned]);

  return (
    <Container>
      <Label>Nome de exibição</Label>
      <Input
        value={userName}
        onChangeText={(name: string) => setUserName(name)}
      />

      <ButtonSignIn onPress={handleEnterTheChat}>
        <TextButton>Acessar com nome de exibição</TextButton>
      </ButtonSignIn>

      <ButtonAnonymousSignIn onPress={handleEnterTheChat}>
        <TextButton>Acessar como anonimo</TextButton>
      </ButtonAnonymousSignIn>
    </Container>
  );
};

export default SignIn;
