// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Component Partial
import Buttons from './Partials/Buttons';

const Note = ({ noteText, noteTitle, id }) => {
    return (
        <div className="ContentNote">
            <div className = "Buttons">
                <Buttons id={id}/>
            </div>
            <div className="noteContentText">
                <h3 className="noteTitle" >{noteTitle}</h3>
                     <Link to={`/note/${id}`}>
                        <p className="noteText">
                            {noteText}
                        </p>
                    </Link>
            </div>
        </div>
    );
};

Note.defaultPropTypes = {
    noteText : PropTypes.string,
    noteTitle : PropTypes.string,
    id : PropTypes.number,
};
export default Note;
