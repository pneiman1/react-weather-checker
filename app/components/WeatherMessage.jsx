var React = require('react');

var WeatherMessage = (props) => {
    var {location, temp} = props; 

        return (
            <h3>The weather in {location} is {temp}</h3>
        );
};

module.exports = WeatherMessage; WeatherMessage