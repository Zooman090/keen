import React from 'react';

export const getAllPhotosFromTweet = media => {
  if (!media) {
    return null;
  }

  return media.map(({ media_url_https: mediaUrl, type: contentType }, index) =>
    contentType === 'photo'
      ? <img className="tweet-img" key={`${index}-img`} src={mediaUrl}/>
      : null
  );
};

export const checkFetchStatus = response => response.ok ? response.json() : Promise.reject(response.json());

const monthAndDay = new RegExp(/\b\w{3}\s\d+\b/, 'g');

export const getMonthAndDay = date => date.match(monthAndDay)[0];
