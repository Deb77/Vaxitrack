import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../actions/children';
import Alerts from '../components/Alerts';
import ParentForm from '../components/ParentForm';
import ChildrenDisplay from '../components/ChildrenDisplay';

const Parent = ({ parentId, children, childrenActions }) => {
    useEffect(() => {
        childrenActions.fetchChildren({ parentId: parentId })
    })

    return (
        <>
            {children.length > 0
                ? <ChildrenDisplay children={children} />
                :
                (<div>
                    <Alerts />
                    <ParentForm />
                </div>)}   
        </>
    )
}

Parent.propType = {
    parentId: PropTypes.string,
    children: PropTypes.array,
    childrenActions: PropTypes.object
}

const mapStateToProps = ({ auth, children }) => ({
    parentId: auth.user,
    children: children.records
})

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Parent)
