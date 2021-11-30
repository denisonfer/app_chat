import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import Chat from '../screens/Chat';
import {AuthContext} from '../contexts/authProvider';
import ButtonExit from '../components/ButtonExit';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes: React.FC = () => {
  const {isSigned} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Navigator>
        {isSigned ? (
          <Screen
            name="Chat"
            component={Chat}
            options={{
              headerRight: () => <ButtonExit />,
            }}
          />
        ) : (
          <Screen name="SignIn" component={SignIn} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
