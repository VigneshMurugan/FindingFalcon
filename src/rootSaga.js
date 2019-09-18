import { all, call } from 'redux-saga/effects';

import homeSaga from './pages/Home/saga.ts';


export default function* rootSaga() {
    yield all([
        call(homeSaga)
    ])
}