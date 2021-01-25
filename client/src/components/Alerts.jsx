import React, { useEffect, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { useAlert } from 'react-alert'

const Alerts = ({ errors }) => {
    const alert = useAlert()

    useEffect(() => {
        if (errors.msg !== "")
            alert.show(errors.msg)
    }, [alert,errors])

    return (
        <Fragment/>
    )
}

Alerts.propTypes = {
    errors: PropTypes.object
}

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(mapStateToProps)(Alerts);
