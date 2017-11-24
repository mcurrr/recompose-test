import { createSelector } from 'reselect';

const root = state => state.user;

export const getStatus = createSelector(
    root,
    store => {
        console.log(`%c >> store.status`, 'color: red', store.status);
        return store.status;
    }
);
