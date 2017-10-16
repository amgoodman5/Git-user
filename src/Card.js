import React from 'react';

//component did mount

function Card({user}) {
  if (!user || !user.name || !user.login) {
    return <div className="status-message">Search a valid user</div>
  }
  return (
    <div className="card">
      <div className="card-image">
        <img alt={user.name + ' avatar'} src={user.avatar_url} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h1 className="card-title">{user.name || user.login}</h1>
          <p>{user.bio}</p>
        </div>
        <div className="card-action">
          <a onClick={e => {e.target.textContent = 'Coming soon'}}>View Repos</a>
        </div>
      </div>
    </div>
  )
}

export default Card;