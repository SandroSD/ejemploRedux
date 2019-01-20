import React, { Component } from 'react';
import { connect } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.css';

class Persona extends Component {
    render() {
        const {nombre, apellido, edad} = this.props.persona
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    Nombre: {nombre}
                </div>
                <div className="col-lg-12">
                    Apellido: {apellido}
                </div>
                <div className="col-lg-12">
                    Edad: {edad}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persona: state
    }
}

export default connect(mapStateToProps,null)(Persona);