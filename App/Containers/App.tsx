import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux';
import RootContainer from './RootContainer/RootContainer';
import SplashScreen from './SplashScreen/SplashScreen';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
                <PaperProvider>
                    <RootContainer />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
