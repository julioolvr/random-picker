/** @jsx React.DOM */

var React = require('react');

var OptionPicker = React.createClass({
  getInitialState: function() {
    return { selectedOption: '' };
  },
  selectOption: function() {
    var randomIndex = Math.floor(Math.random() * this.props.options.length);
    this.setState({ selectedOption: this.props.options[randomIndex] });
  },
  render: function() {
    return (
      <div>
        <button onClick={this.selectOption} disabled={this.props.options.length === 0}>Pick one!</button>
        <span>Selected: {this.state.selectedOption}</span>
      </div>
    );
  }
});

module.exports = OptionPicker;
