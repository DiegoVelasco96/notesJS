import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'material-ui';
import { required, maxLength15, validate } from '../../../../tools/validateForm.jsx';
import { setPropsAsInitial } from '../../../../redux/helpers/setPropsAsInitial';

class NoteForm extends Component {
  renderTextField = ({
    input,
    label,
    meta: { touched, error },
  }) => (
      <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
      />
    );

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div style={{ background: 'white' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="noteTitle"
              component={this.renderTextField}
              label="Title Note"
              validate={[maxLength15, required]}
            />
          </div>
          <div>
            <Field
              name="noteText"
              component={this.renderTextField}
              label="Notes"
              multiLine={true}
              rows={2}
            />
          </div>
          <hr />
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NoteForm.propTypes = {
  noteTitle: PropTypes.string,
  noteText: PropTypes.string,
};

const NoteEditForm = reduxForm({
  form: 'NoteForm',
  validate,
})(NoteForm);

export default setPropsAsInitial(NoteEditForm);
