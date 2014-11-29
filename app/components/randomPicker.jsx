/** @jsx React.DOM */

var React = require('react'),
    NewOptionInput = require('./newOptionInput.jsx'),
    OptionsList = require('./optionsList.jsx'),
    OptionPicker = require('./optionPicker.jsx'),
    _ = require('lodash');

var RandomPicker = React.createClass({
  getInitialState: function() {
    return { options: ['Option A', 'Option B'] };
  },
  onOptionAdded: function(option) {
    this.setState({ options: this.state.options.concat(option) });
  },
  onOptionRemoved: function(removedOption) {
    this.setState({ options: _.reject(this.state.options, function(option) { return option === removedOption; }) });
  },
  render: function() {
    return (
      <div>
        <NewOptionInput onOptionAdded={this.onOptionAdded}/>
        <OptionsList options={this.state.options}
          onOptionRemoved={this.onOptionRemoved}/>
        <OptionPicker options={this.state.options}/>
      </div>
    );
  }
});

module.exports.start = function(mountPoint) {
  React.renderComponent(
    <RandomPicker/>,
    mountPoint
  );
};
