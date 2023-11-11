import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from 'react-native-dotenv';

export const Music = () => {
  const client_id = SPOTIFY_CLIENT_ID;
  const client_secret = SPOTIFY_CLIENT_SECRET;

  console.log(client_id, client_secret);

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    });

    return await response.json();
  };

  const getTrackInfo = async (access_token) => {
    const response = await fetch('https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT', {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + access_token },
    });

    return await response.json();
  };

  getToken().then((response) => {
    getTrackInfo(response.access_token).then((profile) => {
      console.log(profile);
    });
  });

  return <Text>Music</Text>;
};
