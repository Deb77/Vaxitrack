import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../actions/children';
import ChildrenDisplay from '../components/ChildrenDisplay';

const AdminHome = ({ children, childrenActions}) => {
    useEffect(() => {
        childrenActions.fetchAllChildren();
    })

    return <ChildrenDisplay children={children} admin={true}/>
}

AdminHome.propType = {
    children: PropTypes.array,
    childrenActions: PropTypes.object
}

const mapStateToProps = ({ children }) => ({
    children: children.records
})

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
