import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import Persona from '../../components/Persona/Persona';
import ControlDatos from '../../components/ControlDatos/ControlDatos';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12" align="center">
            <h3>Redux Ejemplo</h3>
          </div>
          <div className="col-lg-6">
            <Persona />
          </div>
          <div className="col-lg-6">
            <ControlDatos />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        state
    };
}

/*const submit = data =>{
    return {
        type: actionTypes.SUBMIT,
        payload: data
    }
}*/

export default connect(mapStateToProps, null)(Form);