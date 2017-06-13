import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';

class Show extends Container {
  componentWillMount() {
    this.props.dispatch(getData('show', 1));
    Scroll(() => this.props.dispatch(getData('show', this.page += 1)));
  }

  render() {
    const { show } = this.props;
    return this.renderList(show);
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Show);
