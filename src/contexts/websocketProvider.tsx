import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import io, {Socket} from 'socket.io-client';

interface IWebsocket {
  socket: Socket;
  room: number;
  setRoom: Dispatch<SetStateAction<number>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
export const WebsocketContext = createContext<IWebsocket>({} as IWebsocket);

const WebsocketProvider: React.FC = ({children}) => {
  const [room, setRoom] = useState(0);
  const [socket, setSocket] = useState<Socket>();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ioConnection = io('http://192.168.1.5:3000');
    setSocket(ioConnection);
  }, []);

  return (
    <WebsocketContext.Provider
      value={{socket, room, message, setMessage, setRoom}}>
      {children}
    </WebsocketContext.Provider>
  );
};

export default WebsocketProvider;
