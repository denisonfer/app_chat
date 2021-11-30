import React, {useCallback, useContext} from 'react';
import {AuthContext} from '../../contexts/authProvider';
import {WebsocketContext} from '../../contexts/websocketProvider';

import {Button, TextButton} from './styles';

const ButtonExit: React.FC = () => {
  const {setIsSigned, user} = useContext(AuthContext);
  const {socket, room} = useContext(WebsocketContext);

  const handleExit = useCallback(async () => {
    socket.emit('leave_chat', {
      userName: user,
      room,
    });
    setIsSigned(false);
  }, [room, setIsSigned, socket, user]);

  return (
    <Button onPress={handleExit}>
      <TextButton>Sair</TextButton>
    </Button>
  );
};

export default ButtonExit;
