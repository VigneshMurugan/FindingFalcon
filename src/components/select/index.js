
import * as PropTypes from 'prop-types';
import { Select } from "./select";

Select.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
}


export default Select;