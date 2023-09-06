import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const storeUser = useLoaderData()
    const [user, setUser] = useState(storeUser)


    const handleUpdateUser = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/user/${storeUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User has been updated successfully')
                }
            })
    }

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser)
        console.log(user);

    }

    return (
        <div>
            update {storeUser.name}

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Users !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleUpdateUser}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onBlur={handleOnBlur} type="text" name='name' defaultValue={storeUser.name} placeholder="Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='address' defaultValue={storeUser.address} type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='phone' defaultValue={storeUser.phone} type="number" placeholder="Phone" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='email' type="text" defaultValue={storeUser.email} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input onBlur={handleOnBlur} className="btn btn-primary" type="submit" value='Update User' />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;