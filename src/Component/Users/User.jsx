import React, { useState } from 'react';

const User = () => {

    const [user, setUser] = useState({})

    const handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log(user);
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('User has been added successfully')
                    event.target.reset();
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
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Users !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleOnSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onBlur={handleOnBlur} type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='address' type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='phone' type="number" placeholder="Phone" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={handleOnBlur} name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input onBlur={handleOnBlur} className="btn btn-primary" type="submit" value='Add User' />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;