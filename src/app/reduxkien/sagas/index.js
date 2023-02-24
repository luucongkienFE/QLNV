import { all } from "redux-saga/effects";
import { watchEmployeesAsync } from "./employee";

export function* rootSaga() {
    yield all([
        watchEmployeesAsync()
    ])
}