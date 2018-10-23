// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Route } from 'react-router-dom';
// Presentationals
import AppFrame from '../Presentationals/AppFrame';
// import NoteEdit from '../Presentationals/NoteEdit';
import NoteForm from '../Presentationals/AddNotes/NoteForm.jsx';
import NoteData from '../Presentationals/NoteData';
// Common Component
import Nav from '../Presentationals/Common/Nav';
// Actions
import { fetchNotes } from '../../../redux/actions/fetchNotes';
import { updateNote } from '../../../redux/actions/updateNote';
import { deleteNote } from '../../../redux/actions/deleteNote';
// Selector
import { getCustomerByIdNote } from '../../../redux/selectors/notes';

class CustomerNoteContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    handleSubmit = values => {
        const { id } = values;
        return this.props.updateNote(id, values).then(r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    };

    handleDelete = id => {
        this.props.deleteNote(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderNoteControl = match => {
        if (this.props.note) {
            const NoteControl = match ? NoteForm : NoteData;
            return <NoteControl onSubmit={this.handleSubmit} onDelete={this.handleDelete} {...this.props.note} />;
        }
        return null;
    }

    renderBody = () => {
        return (
            <Route
                path="/note/:id/edit"
                children={
                    ({ match }) => (
                        this.renderNoteControl(match)
                    )
                }
            />
        );
    };

    renderNav = () => {
        const { note } = this.props;
        if (note !== undefined) {
            return (
                <Nav {...note} />
            );
        }
    };

    render() {
        return (
            <AppFrame
                body={this.renderBody()}
                nav={this.renderNav()}
            />
        );
    }
}

CustomerNoteContainer.propTypes = {
    id: PropTypes.string,
    fetchNotes: PropTypes.func,
    note: PropTypes.object,
};
CustomerNoteContainer.defaultProps = {
    note: {},
};
const mapDispatchToProps = {
    fetchNotes,
    updateNote,
    deleteNote,
};

const mapStateToProps = (state, props) => ({
    note: getCustomerByIdNote(state, props),
});

const EditNoteConect = connect(mapStateToProps, mapDispatchToProps)(CustomerNoteContainer);

export default withRouter(EditNoteConect);
