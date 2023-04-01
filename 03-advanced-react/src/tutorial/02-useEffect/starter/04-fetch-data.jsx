import { useState, useEffect } from "react";
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        console.log(data)
      })
  }, []);
  return (
    <div>
      <h1>List of users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
};
export default FetchData;
