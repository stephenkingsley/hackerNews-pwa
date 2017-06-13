import React, { Component, PropTypes } from 'react';
import Item from './components/Item';

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

  renderList(data) {
    return (
      <div className="content">
        <ol>
          {this.renderItem(data)}
        </ol>
      </div>
    );
  }
}
