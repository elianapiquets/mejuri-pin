import Layout from "../../components/Layout";
import Masonry from "../../components/Masonry";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAll } from "../../actions";

class All extends Component {
  componentDidMount() {
    if (this.props.all.length === 0) {
      this.props.loadAll();
    }
  }

  render() {
    const { isLoading, all, error } = this.props;

    return (
      <Layout>
        <Masonry isLoading={isLoading} page={all} error={error} />
      </Layout>
    );
  }
}

const mapStateToProps = ({ isLoading, all, error }) => ({
  isLoading,
  all,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  loadAll: () => dispatch(loadAll()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);
