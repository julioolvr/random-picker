/** @jsx React.DOM */

var React = require('react');

var NewOptionInput = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var newOption = this.refs.newOption.getDOMNode().value.trim();
    if (!newOption) {
      return;
    }
    this.props.onOptionAdded(newOption);
    this.refs.newOption.getDOMNode().value = '';
    return;
  },
  render: function() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" ref="newOption"/>
    </form>;
  }
});

module.exports = NewOptionInput;
