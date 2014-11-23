/** @jsx React.DOM */

var React = require('react'),
    OptionsList = require('./optionsList.jsx');

var RandomPicker = React.createClass({
  options: ['Option A', 'Option B'],
  render: function() {
    return (
      <OptionsList options={this.options}/>
    );
  }
});

module.exports.start = function(mountPoint) {
  React.renderComponent(
    <RandomPicker/>,
    mountPoint
  );
};
