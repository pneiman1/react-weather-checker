var React = require('react');


//STATELESS FUNCTIONAL COMPONENT
var About = (props) => {
    return (
        <div className="row">
            <div medium-4 large-3 small-centered>
                <h1 className="text-center page-title">About</h1>
                <p>This weather application is built using React.js and Foundation. To view the source code, visit:</p>
                <a href='https://github.com/pneiman1/react-weather-checker' target="_blank">Github React-Weather-Checker</a>
            </div>
        </div>
        )
};

module.exports = About;