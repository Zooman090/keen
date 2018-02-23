import React from 'react';
import { Grid } from 'material-ui';

import { getAllPhotosFromTweet, getMonthAndDay } from '../utils';

const TwittView = ({ created_at: createdAt, text, entities, user }) => {
  const { name: creatorName, profile_image_url: httpAvatarUrl } = user,
    { media } = entities;

  return <Grid className="tweets-container mt-25" item container direction={'column'} spacing={0}>
    <Grid item container alignItems={'center'}>
      <img className="avatar" src={httpAvatarUrl} />
      <p className="creator-name"><a className="creator-name__creator-link" href={`https://twitter.com/${creatorName}`} target="_blank">{creatorName}</a></p>
      <p className="date-of-create">{getMonthAndDay(createdAt)}</p>
    </Grid>
    <p>{text}</p>
    <Grid item>
      {getAllPhotosFromTweet(media)}
    </Grid>
  </Grid>;
};

export default TwittView;
