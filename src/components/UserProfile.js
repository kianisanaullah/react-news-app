import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="user-profile">
            {user ? (
                <>
                    <h1>Welcome, {user.name}!</h1>
                    {/* Display additional user details */}
                </>
            ) : (
                <h1>User not authenticated. Please log in.</h1>
            )}
        </div>
    );
};

export default UserProfile;
