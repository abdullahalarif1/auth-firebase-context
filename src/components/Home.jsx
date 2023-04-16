import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthPtovider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>{user && <span>{user.displayName}</span> }</h2>
        </div>
    );
};

export default Home;