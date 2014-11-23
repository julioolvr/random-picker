/** @jsx React.DOM */

var React = require('react'),
    NewOptionInput = require('./newOptionInput.jsx'),
    OptionsList = require('./optionsList.jsx');

var RandomPicker = React.createClass({
  getInitialState: function() {
    return { options: ['Option A', 'Option B'] };
  },
  onOptionAdded: function(option) {
    this.setState({ options: this.state.options.concat(option) });
  },
  render: function() {
    return (
      <div>
        <NewOptionInput onOptionAdded={this.onOptionAdded}/>
        <OptionsList options={this.state.options}/>
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
