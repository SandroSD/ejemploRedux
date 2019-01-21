import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Persona extends Component {
    state = {
        nombre: "",
        apellido: "",
        edad: ""
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        this.props.submit(this.state);
    }
    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <form onSubmit={this.onSubmitHandler}>
                        Nombre: <input  type="text" name="nombre" id="nombre"
                                        value={this.state.nombre}
                                        onChange={this.onChangeHandler}
                                />
                        Apellido: <input    type="text" name="apellido" id="apellido"
                                            value={this.state.apellido}
                                            onChange={this.onChangeHandler}
                                />
                        Edad: <input    type="text" name="edad" id="edad"
                                        value={this.state.edad}
                                        onChange={this.onChangeHandler}
                                />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submit: (data) => dispatch({type: actionTypes.SUBMIT, payload: data})
    };
}


export default connect(null, mapDispatchToProps)(Persona);