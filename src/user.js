import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes, flattenProp, withHandlers, defaultProps, onlyUpdateForKeys } from 'recompose';
import { connect } from 'react-redux';
import { getStatus } from './selectors/user';
import { toggleActive } from './actions/user';


const mapStateToProps = (state, props) => {
    console.log(`%c >>`, 'color: yellow', state, props);
    return {
        status: getStatus(state)
    }
};

const mapDispatchToProps = (dispatch) => ({
	handleSomeClick: value => dispatch(toggleActive())
});

const enhance = compose(
    defaultProps({
        active : false,
        counter: 0,
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withHandlers({
        handleClick: props => () => {
            console.log(`%c %s, %s`, 'color: yellow', props.active, props.counter);
            props.handleSomeClick();
        }
    }),
    flattenProp('user', 'status'),
    setPropTypes({
        name   : PropTypes.string.isRequired,
        active : PropTypes.bool.isRequired,
        counter: PropTypes.number.isRequired,
    }),
);

const User = enhance(({ name, active, counter, handleClick }) =>
  <div className="User" onClick={handleClick}>
    <h1>{ counter }</h1>
    <span>{ name }: { active ? 'active' : 'away' }</span>
  </div>
);

export default User;
