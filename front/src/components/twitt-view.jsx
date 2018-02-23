import React from 'react';
import { Grid } from 'material-ui';

const TwittView = (props) => {
  const { created_at: createdAt, text, entities, user } = props,
    { name = '', profile_image_url: avatarUrl } = user,
    { media } = entities,
    getAllPhotos = media => media.map(({ media_url, type }, index) => type === 'photo' ? <img className="tweet-img" key={`${index}-img`} src={media_url}/> : null);

  return <Grid className="tweets-container" item container direction={'column'} spacing={0}>
    <p>{createdAt}</p>
    <Grid item container>
      <img className="avatar" src={avatarUrl} />
      <p>{name}</p>
    </Grid>
    <p>{text}</p>
    <Grid item>
      {media ? getAllPhotos(media) : null}
    </Grid>
  </Grid>;
};

export default TwittView;
