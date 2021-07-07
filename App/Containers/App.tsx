import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider, Box } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux';
import RootContainer from './RootContainer/RootContainer';
import SplashScreen from './SplashScreen/SplashScreen';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
                <NativeBaseProvider>
                    <RootContainer />
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
