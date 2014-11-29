/** @jsx React.DOM */

var React = require('react');

var Option = React.createClass({
  handleRemoveOption: function() {
    this.props.onOptionRemoved(this.props.option);
  },
  render: function() {
    return (
      <li>
        {this.props.option} <a onClick={this.handleRemoveOption}>Remove</a>
      </li>
    );
  }
});

module.exports = Option;
