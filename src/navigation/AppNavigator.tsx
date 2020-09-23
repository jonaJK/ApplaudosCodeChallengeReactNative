import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@app/screens/Home';
import Detail from '@app/screens/Detail';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;