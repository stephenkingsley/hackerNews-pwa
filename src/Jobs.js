import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';

class Jobs extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData('jobs', page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData('jobs', newPage));
    }
  }

  render() {
    const { jobs } = this.props;
    return <div>
      {this.renderList(jobs)}
      {this.renderPage('jobs')}
    </div>;
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Jobs);
