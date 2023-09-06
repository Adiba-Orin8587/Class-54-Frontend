import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData()

    const [displayUser, setDisplayUser] = useState(users)


    const handleDelete = (user) => {
        const agree = window.confirm(`Do you want to Delete ${user?.name}?`)
        if (agree) {
            fetch(`http://localhost:5000/user/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert(`User : ${user?.name}  has been Deleted successfully`)
                        const remainUser = displayUser.filter(usr => usr._id !== user._id)
                        setDisplayUser(remainUser)
                    }
                    console.log(data);
                })
        }
    }



    return (
        <div>
            <h1>This is home page</h1>

            <div>
                {
                    displayUser.map(user =>
                        <p className='text-black-200 text-2xl m-4' key={user._id}>Name:{user.name} ++ Email:{user.email}
                            <Link className='btn btn-success mx-5' to={`/update/${user._id}`}>Update</Link>
                            <button onClick={() => handleDelete(user)} className='btn btn-outline btn-error btn-circle m-3'>X</button></p>)
                }
            </div>

        </div>
    );
}

export default Home;