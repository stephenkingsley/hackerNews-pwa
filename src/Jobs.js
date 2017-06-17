import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';

class Jobs extends Container {
  componentWillMount() {
    this.props.dispatch(getData('jobs', 1));
    Scroll(() => this.props.dispatch(getData('jobs', this.page += 1)));
  }

  render() {
    const { jobs } = this.props;
    return this.renderList(jobs);
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Jobs);
