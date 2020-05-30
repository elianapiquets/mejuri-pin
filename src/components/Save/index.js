import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Icon } from "./styles";
import { FaThumbtack } from "react-icons/fa";
import { connect } from "react-redux";
import { saveLike } from "../../actions";

class Save extends Component {
  render() {
    return (
      <Container
        onClick={() => {
          this.props.saveLike(
            this.props.src,
            this.props.title,
            this.props.alt,
            this.props.id
          );
        }}
      >
        <Icon>
          <FaThumbtack />
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
