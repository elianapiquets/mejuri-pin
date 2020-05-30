import Layout from '../../components/Layout';
import Masonry from '../../components/Masonry';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategory } from '../../actions';

class Category extends Component {
    componentDidMount() {
        if (this.props.category.length === 0) {
            this.props.loadCategory();
        }
    }

    render() {
        const { isLoading, category, error } = this.props;

        return (
            <Layout>
                <Masonry isLoading={isLoading} page={category} error={error} />
            </Layout>
        );
    }
}

const mapStateToProps = ({ isLoading, category, error }) => ({
    isLoading,
    category,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadCategory: () => dispatch(loadCategory()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Category);
