import React from 'react'
import Header from '../Base/Header';

class SingleBlog extends React.Component {
  render() {
    return (
      <div>
        <Header title={this.props.location.state.title} />
      </div>
    );
  }
};

export default SingleBlog;