import React, { Component } from 'react';
import { Grid, TextField, Button } from 'material-ui';

import { serverUrl } from '../constants';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };

    this.getTimeline = this.getTimeline.bind(this);
  }

  getTimeline(event) {
    event.preventDefault();

    const { saveTweets } = this.props,
      { userName } = this.state,
      url = `${serverUrl}/timeline?userName=${userName}`,
      checkStatus = response => response.ok ? response.json() : Promise.reject(response.json());

    fetch(url)
      .then(checkStatus)
      .then(response => {
        saveTweets(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { userName } = this.state;

    return (
      <Grid item container
        direction={'column'} xs={3}
        className="mt-25 ml-15">
        <form className="layout-column" onSubmit={this.getTimeline}>
          <TextField
            required={true}
            type="string"
            placeholder="User name..."
            value={userName}
            onChange={event => this.setState({ userName: event.target.value })}/>

          <Button className="mt-25" type="submit">Get timeline</Button>
        </form>
      </Grid>
    );
  }
}