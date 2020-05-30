import Layout from '../../components/Layout';
import Masonry from '../../components/Masonry';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEarrings } from '../../actions';

class Earrings extends Component {
    componentDidMount() {
        if (this.props.earrings.length === 0) {
            this.props.loadEarrings();
        }
    }

    render() {
        const { isLoading, earrings, error } = this.props;

        return (
            <Layout>
                <Masonry isLoading={isLoading} page={earrings} error={error} />
            </Layout>
        );
    }
}

const mapStateToProps = ({ isLoading, earrings, error }) => ({
    isLoading,
    earrings,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadEarrings: () => dispatch(loadEarrings()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Earrings);
