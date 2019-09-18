
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';


import styles from '../../styles/styles.less';
import { FindResult } from "./FindResult";

const mapStateToProps = state => ({
    status: state.home.status,
    planet_name: state.home.planet_name,
    timeTaken: state.home.timeTaken,
    error: state.home.error,
    isAuthorized: state.home.isAuthorized
})


export default connect(mapStateToProps,null)(FindResult);