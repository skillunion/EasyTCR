import { apply, takeEvery, put, call, select } from 'redux-saga/effects';
import { Registry } from 'ethereum-tcr-api';
import { challengeListing as getChallengeListingTx } from '../transactions';

export function * challengeListing (action) {
  // TODO: спрятать это все за tcr-api
  let registry = new Registry(window.contracts.registry, window.Web3);

  let { minDeposit } = (yield select()).parameterizer;
  let queue = yield call(getChallengeListingTx, action.listing, minDeposit);

  console.log({ type: 'SHOW_TX_QUEUE', queue });
  yield put({ type: 'CHALLENGE_SHOW_TX_QUEUE', queue });
}

export default function * flow () {
  yield takeEvery('CHALLENGE_START', challengeListing);
};
