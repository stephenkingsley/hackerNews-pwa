import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';
import Item from './components/Item';

class Ask extends Container {
  componentWillMount() {
    this.props.dispatch(getData('ask', 1));
    Scroll(() => this.props.dispatch(getData('ask', this.page += 1)));
  }

  render() {
    const { ask } = this.props;
    return this.renderList(ask);
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Ask);
