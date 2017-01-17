var React = require('react');
var {Link} = require('react-router'); 

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Examples to try:</p>
            <ol>
                <li>
                    <Link to='/?location=London'>London</Link>
                </li>
                <li>
                    <Link to='/?location=Busan'>Busan</Link>
                </li>
            </ol>
        </div>
        )
};

module.exports = Examples;