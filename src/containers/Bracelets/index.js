import Layout from '../../components/Layout';
import Masonry from '../../components/Masonry';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBracelets } from '../../actions';

class Bracelets extends Component {
    componentDidMount() {
        if (this.props.bracelets.length === 0) {
            this.props.loadBracelets();
        }
    }

    render() {
        const { isLoading, bracelets, error } = this.props;

        return (
            <Layout>
                <Masonry isLoading={isLoading} page={bracelets} error={error} />
            </Layout>
        );
    }
}

const mapStateToProps = ({ isLoading, bracelets, error }) => ({
    isLoading,
    bracelets,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadBracelets: () => dispatch(loadBracelets()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bracelets);
