import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImg from "../../assets/imgs/icon/addNew.svg"

function NotFound({buttonNotFoundTittle , LinkTo , pNotFound}) {
    return (
        <div>
            <div className="not-found-parent not-found-parent-appointment">
                <img src={NotFoundImg} />
            </div>
            <div className='div-NotFound-button' >
                <p>
                    {pNotFound}
                </p>
                <Link className='button' to={LinkTo} >   {buttonNotFoundTittle}        </Link>
            </div>
        </div>
    )
}

export default NotFound