import React, {useState, useEffect} from 'react';
import miniAppSDK from 'mini-app-sdk';

import App from './App';

import {CLIENT_KEY, CLIENT_SECRET} from './constants/Client';
// import {MiniAppId} from './constants/MiniAppId';

import packageJSON from './package.json';

export default () => {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await miniAppSDK.initialize({
          clientKey: CLIENT_KEY,
          clientSecret: CLIENT_SECRET,
          reactBundleVersion: packageJSON.version,
          isDevelopment: true,
        });
        // await miniAppSDK.install(MiniAppId);
      } catch (error) {
        console.error(error);
      } finally {
        setInitializing(false);
      }
    };
    initialize();
  }, []);

  if (initializing) {
    return null;
  }

  return <App />;
};
