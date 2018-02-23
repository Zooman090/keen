import React, { Component } from 'react';
import { Grid } from 'material-ui';

import Sign from './sign';
import TwittView from './twitt-view';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      tweets: []
    };

    this.saveTweets = this.saveTweets.bind(this);
  }

  saveTweets({ tweets }) {
    this.setState({ tweets });
  }

  get twittsView() {
    const { tweets } = this.state;

    return tweets.map((twitt, index) => <TwittView key={`${index}-tweet`} {...twitt} />);
  }

  render() {
    return (
      <Grid container spacing={0}
        justify={'space-around'}
        alignItems={'flex-start'}>
        <Sign saveTweets={this.saveTweets}/>
        <Grid className="mt-25" item container xs={7} spacing={0}>
          {this.twittsView}
        </Grid>
      </Grid>
    );
  }
}