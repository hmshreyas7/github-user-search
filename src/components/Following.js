import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Following.css';

const Following = (props) => {
  const [userFollowingInfo, setUserFollowingInfo] = useState({
    following: [],
  });

  useEffect(() => {
    const api = 'https://api.github.com/users';

    // Fetch results
    const endPoint = `${api}/${props.user}/following?page=0&per_page=10`;
    const fetchGithubData = axios(endPoint, {})
      .then((response) => {
        const { data } = response;
        setUserFollowingInfo({
          following: data,
        });
      })
      .catch((error) => {
        console.log('Error');
      });
  }, [props.user]);

  const generateFollowing = (followingUser) => {
    return (
      <li key={followingUser.id}>
        <div>
          <img src={followingUser.avatar_url} alt='Following User Avatar' />
          <p>{followingUser.login}</p>
        </div>
      </li>
    );
  };

  return (
    <div className='following-container'>
      <ul>{userFollowingInfo.following.map(generateFollowing)}</ul>
    </div>
  );
};

export default Following;
