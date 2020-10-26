import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Following.css';

const Following = (props) => {
  const [userFollowingInfo, setUserFollowingInfo] = useState({
    following: [],
    numResults: 10,
  });

  useEffect(() => {
    const api = 'https://api.github.com/users';

    // Fetch results
    const endPoint = `${api}/${props.user}/following?page=0&per_page=${userFollowingInfo.numResults}`;
    const fetchGithubData = axios(endPoint, {})
      .then((response) => {
        const { data } = response;
        console.log(data);
        setUserFollowingInfo((prevInfo) => {
          return {
            following: data,
            numResults: prevInfo.numResults,
          };
        });
      })
      .catch((error) => {
        console.log('Error');
      });
  }, [props.user, userFollowingInfo.numResults]);

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

  const handleLoadMore = () => {
    setUserFollowingInfo((prevInfo) => {
      return {
        ...userFollowingInfo,
        numResults: prevInfo.numResults + 10,
      };
    });
  };

  return (
    <div className='following-container'>
      <div className='following-options'>
        <p>Showing {userFollowingInfo.following.length}</p>
        <button onClick={handleLoadMore}>Load more...</button>
      </div>
      <ul>{userFollowingInfo.following.map(generateFollowing)}</ul>
    </div>
  );
};

export default Following;
