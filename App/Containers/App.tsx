import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../Redux';
import StackNavigator from '../Navigation/StackNavigator';

const App = () => {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
};

export default App;
