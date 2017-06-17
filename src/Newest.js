import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';

class Newest extends Container {
  componentWillMount() {
    this.props.dispatch(getData('newest', 1));
    Scroll(() => this.props.dispatch(getData('newest', this.page += 1)));
  }

  render() {
    const { newest } = this.props;
    return this.renderList(newest);
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Newest);
