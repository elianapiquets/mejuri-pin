import Layout from "../../components/Layout";
import Masonry from "../../components/Masonry";
import React, { Component } from "react";
import { connect } from "react-redux";

class Like extends Component {
  render() {
    const { isLoading, like } = this.props;

    return (
      <Layout>
        <Masonry isLoading={isLoading} page={like} />
      </Layout>
    );
  }
}

const mapStateToProps = ({ isLoading, like }) => ({
  isLoading,
  like,
});

export default connect(mapStateToProps)(Like);
