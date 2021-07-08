import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider, Box } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux';
import RootContainer from './RootContainer/RootContainer';
import SplashScreen from './SplashScreen/SplashScreen';

const config = {
    dependencies: {
        // For Expo projects (Bare or managed workflow)
        // 'linear-gradient': require('expo-linear-gradient').LinearGradient,
        // For non expo projects
        'linear-gradient': require('react-native-linear-gradient').default,
    },
};

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
                <NativeBaseProvider config={config}>
                    <RootContainer />
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
