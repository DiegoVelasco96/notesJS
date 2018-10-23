import { createSelector } from 'reselect';

const getNotes = state => [...state.notes];

const getCustomerByIdNote = createSelector(
    (state, props) =>  state.notes.find(note => note.id === props.id),
    note => note
);

export {
    getNotes,
    getCustomerByIdNote,
};
