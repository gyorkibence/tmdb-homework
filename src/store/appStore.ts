import { makeAutoObservable } from 'mobx';

class AppStore {
  mockData = 'mockData';
  constructor() {
    makeAutoObservable(this);
  }
};

export default new AppStore();
