import React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Container from './Container';

class Show extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData('show', page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData('show', newPage));
    }
  }

  render() {
    const { show } = this.props;
    return <div>
      {this.renderList(show)}
      {this.renderPage('show')}
    </div>;
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Show);
