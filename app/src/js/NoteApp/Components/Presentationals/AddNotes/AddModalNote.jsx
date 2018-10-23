import React, { Component } from 'react';
import { FlatButton, Dialog } from 'material-ui';
import NoteForm from './NoteForm.jsx';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// Actions
// import { insertNotes } from '../../../../redux/actions/insertNotes';
import { insertNotes } from '../../../../redux/actions/insertNotes';
// Selector
import { getNotes } from '../../../../redux/selectors/notes';

class AddModalNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        };
    }

    handleSubmit = values => {
        const totaNotes = this.props.notes.length;
        const valuesAux = { ...values, id: 'n' + (totaNotes + 1) };
        return this.props.insertNotes(valuesAux).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    };

    render() {
        const { handleClose } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                keyboardFocused={true}
                onClick={handleClose}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Create New Note"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={handleClose}
                >
                    Create a new note<br />
                    {/*FORMULARIO !!!  */}
                    <NoteForm onSubmit={this.handleSubmit} />
                </Dialog>
            </div>
        );
    }
}

AddModalNote.propTypes = {
    insertNotes: PropTypes.func,
    fetchNotes: PropTypes.func,
    notes: PropTypes.array,
};

const mapStateToProps = (state) => ({
    notes: getNotes(state),
});
const AddModalNoteConect = connect(mapStateToProps, { insertNotes })(AddModalNote);
export default AddModalNoteConect;
// Componente modal para agregar notas.
