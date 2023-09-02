import React from 'react';
import PageDetails1 from './CompTeam/PageDetails1';
import PageDetails2 from './CompTeam/PageDetails2';
import PageDetails3 from './CompTeam/PageDetails3';
import PageDetails4 from './CompTeam/PageDetails4';
import { useLocation } from 'react-router-dom';

function TeamPage() {
    const pathname = useLocation().pathname;
    let pathUrl = pathname.split("/")[2];

    let PageDetails;
    switch (pathUrl) {
        case '1':
            PageDetails = <PageDetails1 />;
            break;
        case '2':
            PageDetails = <PageDetails2 />;
            break;
        case '3':
            PageDetails = <PageDetails3 />;
            break;
        case '4':
            PageDetails = <PageDetails4 />;
            break;
        default:
            PageDetails = null;
    }

    return (
        <div className='container team-page-container'>
            {PageDetails}
        </div>
    );
}

export default TeamPage;
