import React, { useEffect, Fragment } from 'react'
import { useAlert } from 'react-alert'

const Alerts = () => {
    const alert = useAlert()
    
    useEffect(() => {
        alert.show()
    }, [alert])

    return (
        <Fragment/>
    )
}

export default Alerts
