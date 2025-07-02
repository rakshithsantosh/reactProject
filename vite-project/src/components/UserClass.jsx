import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          {count}
        </button>
      </div>
    );
  }
}
