import React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/comment';
import Container from './Container';

class Newest extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData('newest', page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData('newest', newPage));
    }
  }

  render() {
    const { newest } = this.props;
    return <div>
      {this.renderList(newest)}
      {this.renderPage('newest')}
    </div>;
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Newest);
