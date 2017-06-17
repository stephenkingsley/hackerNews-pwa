import React, { Component, PropTypes } from 'react';
import Item from './components/Item';
import { loadingPic } from './public/loading';

export default class Container extends Component {
  constructor() {
    super();
    this.page = 1;
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
    return (
      <div className="loading">
        <img src={loadingPic} alt="loading" />
      </div>
    );
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
}
