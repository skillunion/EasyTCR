import { all, fork } from 'redux-saga/effects';

import publisher from './publisher';
import advertiser from './advertiser';
import app from './app';
import parameterizer from './parameterizer';
import challenge from './challenge';
import commit from './commit';
import reveal from './reveal';
import refreshStatus from './refreshStatus';

const sagas = [
  app,
  publisher,
  advertiser,
  parameterizer,
  challenge,
  commit,
  reveal,
  refreshStatus,
];

export default function * root () {
  yield all(sagas.map(fork));
}
