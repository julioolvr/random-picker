/** @jsx React.DOM */

var React = require('react'),
    NewOptionInput = require('./newOptionInput.jsx'),
    OptionsList = require('./optionsList.jsx'),
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
  selectOption: function() {
    var randomIndex = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomIndex]);
  },
  render: function() {
    return (
      <div>
        <NewOptionInput onOptionAdded={this.onOptionAdded}/>
        <OptionsList options={this.state.options}
          onOptionRemoved={this.onOptionRemoved}/>
        <button onClick={this.selectOption}>Pick one!</button>
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
