import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Icon } from "./styles";
import { FaThumbtack } from "react-icons/fa";
import { connect } from "react-redux";
import { saveLike } from "../../actions";

class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: 0,
    };
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.setState({animating: 1}),
          this.props.saveLike(
            this.props.src,
            this.props.title,
            this.props.alt,
            this.props.id
          );
        }}
        animation={this.state.animating}
        onAnimationEnd={() => this.setState({animating: 0})}
      >
        <Icon>
          <FaThumbtack  />
        </Icon>
        <span>Save</span>
      </Container>
    );
  }
}

Save.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLike: (src, title, alt, id) => dispatch(saveLike(src, title, alt, id)),
});

export default connect(
  null,
  mapDispatchToProps
)(Save);
