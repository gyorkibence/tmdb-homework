import React from 'react'
import AppStore from './appStore';

const rootStore = React.createContext({
  app: AppStore,
});

export default rootStore;
