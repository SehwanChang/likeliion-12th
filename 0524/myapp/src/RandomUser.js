import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //비동기 함수 fetchUser
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Fetch 에러!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user && (
        <div>
          <h1>{`${user.name.first} ${user.name.last}`}</h1>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <p>Email: {user.email}</p>
          <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
        </div>
      )}
    </div>
  );
};

export default RandomUser;
