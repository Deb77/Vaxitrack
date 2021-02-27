import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as childrenActionCreators from '../actions/children';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Grid from '../components/Grid';
import VaccineCard from '../components/VaccineCard';
import { Underline } from '../components/SectionElements';

const ChildPage = ({ selectedChild, vaccines, childrenActions }) => {
    const [administered, setAdministered] = useState([]);
    const [notAdministered, setNotAdministered] = useState([]);

    useEffect(() => {
        childrenActions.fetchVaccines({ childId: selectedChild });
    },[childrenActions.fetchVaccines,selectedChild])

    useEffect(() => {
        setAdministered(vaccines.filter(({ administeredOn }) => administeredOn !== null))
        setNotAdministered(vaccines.filter(({ administeredOn }) => administeredOn === null))
    }, [vaccines])

    return (
        <Container>
            <Heading>Pending Vaccines</Heading>
            <Underline/>
            <Grid>
                {
                    notAdministered.map(({
                        _id,name, whenToGive, dueDate, administeredOn
                    }) => <VaccineCard
                            key={_id}
                            vaccineId={_id}
                            name={name}
                            description={whenToGive}
                            dueDate={dueDate}
                            administeredOn={administeredOn}
                        />)
                }
            </Grid>
            <Heading>Already Administered</Heading>
            <Underline/>
            <Grid>
                {
                    administered.map(({
                        _id, name, whenToGive, dueDate, administeredOn
                    }) => <VaccineCard
                            key={_id}
                            vaccineId={_id}
                            name={name}
                            description={whenToGive}
                            dueDate={dueDate}
                            administeredOn={administeredOn}
                        />)
                }
            </Grid>
        </Container>
    )
}

ChildPage.propTypes = {
    selectedChild: PropTypes.string,
    childrenActionCreators: PropTypes.object
}

const mapStateToProps = ({ children }) => ({
    selectedChild: children.selected,
    vaccines: children.vaccines
})

const mapDispatchToProps = dispatch => ({
    childrenActions: bindActionCreators(childrenActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildPage);
