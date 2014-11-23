/** @jsx React.DOM */

var React = require('react'),
    Option = require('./option.jsx');

var OptionsList = React.createClass({
  render: function() {
    var options = this.props.options;
    return (
      <ul>
        {options.map(function(option) {
          return <Option option={option}/>;
        })}
      </ul>
    );
  }
});

module.exports = OptionsList;
