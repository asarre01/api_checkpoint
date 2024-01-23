import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemUser from './components/ItemUser';

const UserList = () => {
    // État local pour stocker la liste des utilisateurs
    const [listOfUsers, setListOfUsers] = useState([]);

    // Utilisation de useEffect pour effectuer une opération asynchrone au chargement du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Requête pour obtenir la liste des utilisateurs depuis l'API
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                
                // Mise à jour de l'état local avec la liste des utilisateurs
                setListOfUsers(response.data);
            } catch (error) {
                // Gestion des erreurs en cas d'échec de la requête
                console.error(error);
            }
        };

        // Appel de la fonction fetchData lors du montage du composant
        fetchData();
    }, []);

    return (
        <div className='bg-dark vh-100 w-auto'>
            {/* En-tête du composant avec un titre */}
            <div className='container text-primary text-center p-2 border-bottom'>
                <h1>La liste des utilisateurs</h1>
            </div>
            
            {/* Conteneur pour afficher la liste des utilisateurs sous forme de tableau */}
            <div className='container p-4'>
                {/* Ligne de la grille Bootstrap pour les en-têtes de colonne */}
                <div className="row gy-2 p-2 text-white border-primary border-bottom">
                    <div className="col col-md-1">
                        <h5 className='text-primary'>#</h5>
                    </div>
                    <div className="col col-md-3">
                        <h6>Prénom & Nom</h6>
                    </div>
                    <div className="col col-md-3">
                        <h6>Username</h6>
                    </div>
                    <div className="col col-md-3">
                        <h6>E-mail</h6>
                    </div>
                    <div className="col col-md-2">
                        <h6>Site Web</h6>
                    </div>
                </div>
                
                {/* Affichage de la liste des utilisateurs à l'aide du composant ItemUser */}
                {listOfUsers.map((user) => (
                    <ItemUser key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
