/** @jsx React.DOM */

var React = require('react');

var Option = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.option}
      </li>
    );
  }
});

module.exports = Option;
