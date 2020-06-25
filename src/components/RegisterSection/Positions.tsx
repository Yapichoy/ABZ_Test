import {PositionType, setPositionsThunkCreator} from "../../redux/reducers/positionsReducer";
import React, {useEffect} from "react";
import {connect} from "react-redux";
// @ts-ignore
import { Form } from 'bootstrap-4-react';

type RegisterFormType = {
    positions: Array<PositionType>,
    setPositions: Function
}

const Positions : React.FC<RegisterFormType> = (props) => {
    useEffect(() => {
        props.setPositions();
    },[]);
    return (
            <Form.Group>
                <label htmlFor="radio">Select your position</label>
                {
                    props.positions.map((position: PositionType) => <Form.CustomRadio key={position.id} id={"Radio" + position.id} name="position">{position.name}</Form.CustomRadio>)
                }
            </Form.Group>
    );
}
const mapStateToProps = (state:any) => {
    return {
        positions: state.positionsReducer.positions
    }
}
const mapDispatchToProps = {
    setPositions: setPositionsThunkCreator
}
const PositionsContainer = connect(mapStateToProps, mapDispatchToProps)(Positions);
export default PositionsContainer;