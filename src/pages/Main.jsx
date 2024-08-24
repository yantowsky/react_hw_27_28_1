import React from 'react';
import FollowError from '../components/ErrorBoundary/ErrorBoundary';
import Todo from '../components/Todo/Todo';


const Main = () => {
    return (
        <FollowError>
            <Todo />
        </FollowError>
    );
}

export default Main;