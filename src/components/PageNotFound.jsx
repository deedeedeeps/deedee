import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const bodyCss = css`
  text-align: center;
  margin-top: 40px;
`;

class PageNotFound extends Component {
  render() {
    return (
      <div className={bodyCss}>
        <h1>404: Not Found</h1>
        <div>
          Return to our homepage <Link to="/">here</Link>.
        </div>
      </div>
    );
  }
}

export default PageNotFound;
