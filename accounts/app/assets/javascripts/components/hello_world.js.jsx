window.HelloWorld = React.createClass({
  propTypes: {
    greeting: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Greeting: {this.props.greeting}</div>
      </div>
    );
  }
});
