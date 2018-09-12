import React from 'react';
import '../scss/last-commit.css';

const LastCommit = props => (
  <div className="center last-commit">
    <p>Last Commit</p>
    <a href={props.commit.html_url} target="_blank">
       {props.commit.commit.message}
    </a>
  </div>
);

export default LastCommit;