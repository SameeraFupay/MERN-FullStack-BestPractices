// BAD EXAMPLE
class UserComponent extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.user.address.street}</h1>
          <h2>{this.props.user.address.city}</h2>
        </div>
      );
    }
  }
  
  // GOOD EXAMPLE
  class UserComponent extends React.Component {
    render() {
      const { street, city } = this.props.user.address;
      return (
        <div>
          <h1>{street}</h1>
          <h2>{city}</h2>
        </div>
      );
    }
  }