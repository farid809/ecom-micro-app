import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 14429,
  login: 'YfSDiJ@d6\\a2tXR78\\Vi5qSy\\cgN4qGk\\~0h\\[pFrB5',
};

export const sampleWithPartialData: IUser = {
  id: 14784,
  login: 's@',
};

export const sampleWithFullData: IUser = {
  id: 30365,
  login: 'wjdvb',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
