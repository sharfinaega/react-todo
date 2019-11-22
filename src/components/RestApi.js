import React from "react";

class RestApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
      error: ""
    };
  }

  componentDidMount() {}

  render() {
    const { posts, error, isLoaded } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    if (!isLoaded) {
      return <div>Loading ...</div>;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h1>JSON Placeholder</h1>
        <ul></ul>
      </div>
    );
  }
}

export default RestApi;
