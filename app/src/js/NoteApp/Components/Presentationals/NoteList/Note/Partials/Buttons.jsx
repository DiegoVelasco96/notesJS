import React from 'react';
import ContentDelete from 'material-ui/svg-icons/action/delete';
import ContentUpdate from 'material-ui/svg-icons/action/update';
import { Link } from 'react-router-dom';
import { FloatingActionButton } from 'material-ui';

const style = {
    marginRight: 20,
};

const Buttons = ({ id, history }) => {
    return (
        <div>
            <Link to={`note/${id}/edit`}>
                <FloatingActionButton mini={true} style={style} backgroundColor="#34495E" >
                    <ContentUpdate />
                </FloatingActionButton>
            </Link>
            <Link to={`note/${id}/delete`}>
                <FloatingActionButton mini={true} style={style} backgroundColor="#2ECC71">
                    <ContentDelete />
                </FloatingActionButton>
            </Link>
        </div>

    );
};

export default Buttons;
