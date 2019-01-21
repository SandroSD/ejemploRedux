import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import Persona from '../../components/Persona/Persona';
import ControlDatos from '../../components/ControlDatos/ControlDatos';
import Header from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {
  render() {
    const backgroundColor = this.props.bck.color;
    return (
      <div className="container-fluid"
           style={{backgroundColor: backgroundColor,
                  height:"100vh"
      }}>
        <div className="row">
          <div className="col-lg-12" align="center">
            <Header />
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
      per: state.per,
      bck: state.bck
  };
}

export default connect(mapStateToProps, null)(Form);