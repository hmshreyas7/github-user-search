import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = (props) => {
  const [userInfo, setUserInfo] = useState({
    image: '',
    githubName: '',
    followers: 0,
  });

  useEffect(() => {
    const api = 'https://api.github.com/users';

    // Fetch results
    const endPoint = `${api}/${props.user}`;
    const fetchGithubData = axios(endPoint, {})
      .then((response) => {
        const { data } = response;
        setUserInfo({
          image: data.avatar_url,
          githubName: data.name,
          followers: data.followers,
        });
      })
      .catch((error) => {
        console.log('Error');
      });
  }, [props.user]);

  return (
    <div>
      <img src={userInfo.image} alt='GitHub User Avatar'></img>
      <p>{userInfo.githubName}</p>
      <p>Followers: {userInfo.followers}</p>
    </div>
  );
};

export default Home;
