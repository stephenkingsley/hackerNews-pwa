import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Item from './components/Item';
import { loadingPic } from './public/loading';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderItem(data) {
    if (data && data.length > 0) {
      return data.map((ele, index) => (
        <Item index={index} data={ele} key={index} />
      ));
    }
  }

  renderLoading() {
    const { match } = this.props;
    const page = Number(match.params.page);
    let element;
    if (page > 1) {
      element = (
        <div className="footer-page">
          content is null, please read prev page!
        </div>
      );
    } else {
      element = (
        <div className="loading">
          <img src={loadingPic} alt="loading" />
        </div>
      );
    }
    return element;
  }

  renderList(data) {
    return (
      <div className="content">
        {
          (data && data.length) > 0 ?
            <ol>
              {this.renderItem(data)}
            </ol> :
            this.renderLoading()
        }
      </div>
    );
  }

  renderPage(type) {
    const { match } = this.props;
    const page = Number(match.params.page);
    let newTypePrve;
    let newTypeNext;
    if (type) {
      newTypePrve = `/${type}/${(page - 1) > 1 ? page - 1 : 1}`
      newTypeNext = `/${type}/${page + 1}`;
    } else {
      newTypePrve = `/${(page - 1) > 1 ? page - 1 : 1}`
      newTypeNext = `/${page + 1}`;
    }
    return (
      <div className="footer-page">
        <Link to={newTypePrve}>{'< prev --- '}</Link>
        <span>{page}</span>
      <Link to={newTypeNext}>{' --- next >'}</Link>
      </div>
    );
  }
}
