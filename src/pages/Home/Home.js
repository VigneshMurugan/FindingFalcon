import React from "react";
import Select from "components/Select";
import Radio from "components/Radio";
import config from 'config/config';
import Button from "components/Button";


const timeTakenText = { 
    float: 'right', 
    top: '75px', 
    left: '100px', 
    position: 'relative' 
};


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateDestination = this.updateDestination.bind(this);
        this.updateVehicles = this.updateVehicles.bind(this);
        this.getOptionsForDropdown = this.getOptionsForDropdown.bind(this);
        this.shouldDisableRadioButton = this.shouldDisableRadioButton.bind(this);
        this.findFalcon = this.findFalcon.bind(this);
        this.shouldDisableSubmit = this.shouldDisableSubmit.bind(this);
        this.state = {
            selectedOptions: {},
            vehicleCount: [],
        };
    }

    /* Custom Function Starts */
    updateDestination(e) {
        let target = {
            [e.target.id]: e.target.value
        };
        this.setState(prevState => ({
            selectedOptions: {
                ...prevState.selectedOptions,
                ...target
            },
            timeTaken: this.computeTimeTaken()
        }));
        
    }

    updateVehicles(e) {
        const selectedVehicles = [...document.querySelectorAll('input[type="radio"]:checked')];
        const vehicleCount = selectedVehicles.reduce((acc, curr) => {
            acc[curr.value] = acc[curr.value] || 0;
            acc[curr.value]++;
            return acc;
        }, {});
        this.setState({
            vehicleCount,
            timeTaken: this.computeTimeTaken()
        });
    }

    computeTimeTaken() {
        const selectedVehicles = [...document.querySelectorAll('input[type="radio"]:checked')];
        return selectedVehicles.reduce((acc, curr) => {
            const planetName = this.state.selectedOptions[curr.name];
            const planetDistance = this.props.planets.find(x => x.name == planetName).distance;
            const vehicleSpeed = this.props.vehicles.find(x => x.name == curr.value).speed;
            return acc += planetDistance / vehicleSpeed;
        }, 0);
    }

    getOptionsForDropdown(e) {
        const optionsToIgnore = Object.values(this.state.selectedOptions).filter(x => x != this.state.selectedOptions[e]);
        return this.props.planets.filter(x => !optionsToIgnore.includes(x.name)).map(x => x.name);
    }

    getLabel(item) {
        return item.name + '(' + (item.total_no - (this.state.vehicleCount[item.name] || 0)) + ')';
    }

    shouldDisableRadioButton(item) {
        return item.total_no == this.state.vehicleCount[item.name];
    }

    findFalcon() {
        let vehicle_names = [];
        Object.keys(this.state.vehicleCount).forEach((item) => {
            for (let index = 0; index < this.state.vehicleCount[item]; index++) {
                vehicle_names.push(item);
            }
        });
        let findBody = {
            planet_names: Object.values(this.state.selectedOptions),
            vehicle_names,
            token: this.props.token
        };
        this.props.find(findBody);
        this.props.computedTimeTaken(this.state.timeTaken);
        this.props.history.push('/result');
    }

    shouldDisableSubmit() {
        return this.hasSelectesAllPlanets(this.state.selectedOptions) || this.hasSelectedAllVehicles(this.state.vehicleCount);
    }

    hasSelectedAllVehicles(selectedVehicles) {
        return Object.values(selectedVehicles).reduce((acc, curr) => acc + curr, 0) != config.NUMBER_OF_DESTINATIONS;
    }

    hasSelectesAllPlanets(selectedPlanets) {
        return Object.values(selectedPlanets).filter(x => x).length != config.NUMBER_OF_DESTINATIONS;
    }

    getDestinationPodColumn(i) {
        return (<div key={'block ' + i} className="planetBlock">
            <Select 
                id={'destination' + i}
                key={'select' + i}  
                options={this.getOptionsForDropdown('destination' + i)} 
                onChange={this.updateDestination} 
            />
            <ul key={'list' + i} className="vehicleList">
                {this.props.vehicles.map((item, index) => {
                    return (
                    <li key={'listItem' + index}>
                        <Radio 
                            id={'destination' + i} 
                            key={'radio' + i} 
                            disabled={this.shouldDisableRadioButton(item)} 
                            label={this.getLabel(item)} 
                            onChange={this.updateVehicles} 
                            vehicleCount={this.state.vehicleCount} 
                            {...item} 
                        />
                    </li>);
                })}
            </ul>
        </div>);
    }
    /* Custom Funtion Ends */

    componentDidMount() {
        this.props.getPlanet();
        this.props.getVehicles();
        this.props.fetchToken();
    }

    render() {
        return this.props.planets && this.props.vehicles ?
            (<div className="container">
                {
                    [...Array(config.NUMBER_OF_DESTINATIONS)].map((e, i) => this.getDestinationPodColumn(i))
                }
                <div style={timeTakenText}>Time Taken {this.state.timeTaken || 0}</div>
                <Button 
                    id="submit"
                    name={config.HEADING_TEXT}
                    disabled={this.shouldDisableSubmit()}
                    onClick={this.findFalcon} 
                />
            </div>) : 
            <div className="loaderContainer loader"></div>;
    }
}

