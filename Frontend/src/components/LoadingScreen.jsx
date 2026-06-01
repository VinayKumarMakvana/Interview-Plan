import React from 'react';
import './LoadingScreen.scss';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <main className="loading-screen">
            <div className="loader">
                <div className="spinner"></div>
                <h2>{message}</h2>
                <p>Please wait while we prepare everything for you.</p>
            </div>
        </main>
    );
};

export default LoadingScreen;
