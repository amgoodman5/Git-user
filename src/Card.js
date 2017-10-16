import React from 'react';

//component did mount

function Card({user}) {
  if (!user || !user.name || !user.login) {
    return <div className="statusMessage">Search a valid user</div>
  }
  return (
    <div className="card">
      <h3>{user.name || user.login}</h3>
      <img alt={user.name + ' avatar'} src={user.avatar_url}/>
    </div>
  )
}

export default Card;