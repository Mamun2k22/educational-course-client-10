import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};
// main is done

export default Main;