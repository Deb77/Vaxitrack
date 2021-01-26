import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert'

const Alerts = ({ errors, messages }) => {
    const alert = useAlert()

    useEffect(() => {
        if (messages !== '')
            alert.show(messages, {
                type: 'success'
            });
        if (errors !== '')
            if (typeof (errors) === 'object')
            {
                for (const property in errors) {     
                    if (errors[property] !== '')
                        alert.show(`${property}: ${errors[property]}`);
                } 
            }    
            else 
                alert.show(errors);
    }, [alert, messages, errors])

    return (
        <Fragment/>
    )
}

Alerts.propTypes = {
    errors: PropTypes.object
}

const mapStateToProps = ({ errors, messages }) => ({ errors: errors.msg, messages });

export default connect(mapStateToProps)(Alerts);
