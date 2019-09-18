
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPlanet, getVehicles, findFalconOutput, fetchToken, computedTimeTaken } from './actions';

import styles from '../../styles/styles.less';
import { Home } from "./Home";

const mapStateToProps = state => ({
    planets: state.home.planets,
    vehicles: state.home.vehicles,
    token: state.home.token
})

const mapDispatchToProps = {
    getPlanet: getPlanet,
    getVehicles: getVehicles,
    find: findFalconOutput,
    fetchToken: fetchToken,
    computedTimeTaken: computedTimeTaken,
};

Home.propTypes = {
    planets: PropTypes.array,
    vehicles: PropTypes.array,
    getPlanet: PropTypes.func.isRequired,
    getVehicles: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);