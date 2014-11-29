/** @jsx React.DOM */

var React = require('react'),
    Option = require('../models/option.js');

var NewOptionInput = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var newOptionName = this.refs.newOptionName.getDOMNode().value.trim();
    if (!newOptionName) {
      return;
    }
    this.props.onOptionAdded(new Option(newOptionName));
    this.refs.newOptionName.getDOMNode().value = '';
    return;
  },
  render: function() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" ref="newOptionName"/>
    </form>;
  }
});

module.exports = NewOptionInput;
