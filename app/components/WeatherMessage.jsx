var React = require('react');

var WeatherMessage = (props) => {
    var {location, temp} = props; 

        return (
            <h3 className="text-center">The weather in {location} is {temp} Celcius</h3>
        );
};

module.exports = WeatherMessage; WeatherMessage