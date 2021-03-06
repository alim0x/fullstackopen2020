import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const UserList = () => {
  const users = useSelector(state => state.users)

  return (
    <Table striped>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Blogs created</th>
        </tr>
        {users.map(user => (
          <tr key={user.id}>
            <th><Link to={`/users/${user.id}`}>{user.name}</Link></th>
            <th>{user.blogs.length}</th>
          </tr>))
        }
      </tbody>
    </Table>
  )
}

export default UserList