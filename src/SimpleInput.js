import React from 'react'
import { connect } from 'react-redux'
import { changeActionCreator } from './state/simpleInput'

const SimpleInput = (props) => (
    <div>
        <h4>
            {props._newValue}
        </h4>
        <input
            value={props._newValue}
            onChange={props._changeValue}
        />

    </div>
)

const mapStateToProps = state => ({
    _newValue: state.simpleInput.value
})

const mapDispatchToProps = dispatch => ({
    _changeValue: (event) => dispatch(changeActionCreator(event.target.value))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimpleInput)