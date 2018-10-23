import { createAction } from 'redux-actions';
import { UPDATE_NOTES } from '../constants';
import { apiPut } from '../api';
import { urlNotes } from '../api/urls';

export const updateNote = createAction(UPDATE_NOTES,
    ( id, note ) => apiPut(urlNotes, id, note)());
