import { createAction } from 'redux-actions';
import { DELETE_NOTE } from '../constants';
import { apiDelete } from '../api';
import { urlNotes } from '../api/urls';

export const deleteNote = createAction(DELETE_NOTE,
    (id) => apiDelete(urlNotes, id)());
