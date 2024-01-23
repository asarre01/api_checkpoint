import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Composant fonctionnel ItemUser qui prend des propriétés (props) en argument
export default function ItemUser({ id, name, username, email, website }) {
    return (
        <div className="row gy-2 p-2 text-white border-primary border-bottom">
            <div className="col col-md-1">
                <h5 className='text-primary'>{id}</h5>
            </div>

            <div className="col col-md-3">
                {name}
            </div>

            <div className="col col-md-3">
                {username}
            </div>

            <div className="col col-md-3">
                {email}
            </div>

            <div className="col col-md-2">
                {website}
            </div>
        </div>
    );
}
