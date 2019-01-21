import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Select from 'react-select';


class Header extends Component{
    state={
        color: ""
    }
    onChangeHandler = (e) => {
        const miState = {...this.state};
        miState.color=e ? e.value : "white";
        this.props.background(miState);
    }
    render(){
        const opciones = [
            { value: 'green', label: 'Verde' },
            { value: 'blue', label: 'Azul' },
            { value: 'red', label: 'Rojo' }
        ]
        return(
            <Row style={{margin:"0.5em 0"}}>
                <Col xs="10"></Col>
                <Col xs="2">
                    <Select name="fondo"    id="fondo"
                            isClearable={true}
                            options={opciones}
                            onChange={this.onChangeHandler}
                    />
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        background: (data) => dispatch({type: actionTypes.BACKGROUND, payload: data})
    };
}


export default connect(null, mapDispatchToProps)(Header);