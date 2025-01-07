/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CommonProvider from './src/context/common-provider';
const Main = ()=>{
    return (
        <CommonProvider>
            <App/>
        </CommonProvider>
    );
};
AppRegistry.registerComponent(appName, () => Main);
