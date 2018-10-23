// Depedencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// presentational componentes
import AppFrame from '../Presentationals/AppFrame';
import CustomerActions from '../Presentationals/CustomerActions';
class HomeContainer extends Component {

    handleOnClick = () => {
        this.props.history.push('/notes');
    }

    renderBody = () => (
        <div>
            Esta es la pantalla inicial
            <CustomerActions>
                <button onClick = {this.handleOnClick}>
                    Listado de clientes
                </button>
            </CustomerActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body= {this.renderBody()}
                />
            </div>
        );
    }
}

export default withRouter(HomeContainer);
