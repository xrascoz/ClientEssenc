import React from 'react'
import CopmServices1 from './CopmServicesDetails/CopmServices1'
import CopmServices2 from './CopmServicesDetails/CopmServices2'
import CopmServices3 from './CopmServicesDetails/CopmServices3'
import CopmServices4 from './CopmServicesDetails/CopmServices4'
import CopmServices5 from './CopmServicesDetails/CopmServices5'
import CopmServices6 from './CopmServicesDetails/CopmServices6'


import { useLocation } from 'react-router-dom';


function ServicesDetails() {


    const pathname = useLocation().pathname;
    let pathUrl = pathname.split("/")[2];

    let PageDetails;
    switch (pathUrl) {
        case '1':
            PageDetails = <CopmServices1 />;
            break;
        case '2':
            PageDetails = <CopmServices2 />;
            break;
        case '3':
            PageDetails = <CopmServices3 />;
            break;
        case '4':
            PageDetails = <CopmServices4 />;
            break;
        case '5':
            PageDetails = <CopmServices5 />;
            break;
        case '6':
            PageDetails = <CopmServices6 />;
            break;
        default:
            PageDetails = null;
    }




    return (
        <div>
            {PageDetails}
        </div>
    )
}

export default ServicesDetails