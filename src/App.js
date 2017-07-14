import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import clone from 'lodash/clone';
import { getData } from './actions/comment';
import Scroll from './utils/scroll';
import Container from './Container';
import Item from './components/Item';

class App extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData('news', page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData('news', newPage));
    }
  }

  render() {
    const { news } = this.props;
    return <div>
      {this.renderList(news)}
      {this.renderPage()}
    </div>;
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(App);
