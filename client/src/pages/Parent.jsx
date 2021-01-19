import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../actions/children';
import ParentForm from '../components/ParentForm';

const Parent = ({ parentId, children, childrenActions }) => {
    useEffect(() => {
        childrenActions.fetchChildren(parentId)
    })

    return (
        <>
            {children.length>0 ? <p>HI</p>:<ParentForm/>}
        </>
    )
}

Parent.propType = {
    parentId: PropTypes.string,
    children: PropTypes.array
}

const mapStateToProps = ({ auth, children }) => ({
    parentId: auth.user,
    children: children.records
})

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Parent)
