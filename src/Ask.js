import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions/comment";
import Container from "./Container";

class Ask extends Container {
  componentWillMount() {
    const page = this.props.match.params.page;
    this.props.dispatch(getData("ask", page));
  }

  componentWillReceiveProps(nextProps) {
    const newPage = nextProps.match.params.page;
    const page = this.props.match.params.page;
    if (newPage !== page) {
      this.props.dispatch(getData("ask", newPage));
    }
  }

  render() {
    const { ask } = this.props;
    return (
      <div>
        {this.renderList(ask)}
        {this.renderPage("ask")}
      </div>
    );
  }
}

const mapStateToProps = state => state.comment;

export default connect(mapStateToProps)(Ask);
