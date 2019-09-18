
import * as PropTypes from 'prop-types';

import styles from '../../styles/styles.less';
import { Button } from "./Button";

export const buttonStyle = {
    textAlign: 'center'
  };

Button.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
}

export default Button;