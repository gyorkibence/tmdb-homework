import React from 'react'
import rootStore from './rootStore';

export const useStore = () => React.useContext(rootStore);
