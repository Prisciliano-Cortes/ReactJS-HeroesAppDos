import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const heroImages = require.context('../../assets', true);

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById(heroeId), [heroeId]);

    if (!hero) {
        return <Navigate to='/' />
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

    //const imgPath = `/assets/${ id }.jpg`;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    //src={imgPath} 
                    src={heroImages(`./${ id }.jpg`)}
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Pulisher:</b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First_appearance:</b> { first_appearance }
                    </li>
                </ul>
                
                <h5 className="mt-3">Characters</h5>
                <p> { characters } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
