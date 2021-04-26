const {Link} = window.ReactRouterDOM;

import heroService from "./hero-service" // import heroService to talk to the server
const { useState, useEffect } = React;   // import state management React hooks

const HeroList = () => {
    const [heros, setHeros] = useState([])
    useEffect(() => {
        findAllHeros()
    }, [])
    const findAllHeros = () =>
        heroService.findAllHeros()
            .then(heros => setHeros(heros))
    return(
        <div>
            <h2>Hero List</h2>
            <button className="btn btn-primary">
                Add Hero
            </button>
            <ul className="list-group">
                {
                heros.map(hero =>
                    <li key={hero.id}>
                        {hero.firstName},
                        {hero.lastName},
                        {hero.username}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default HeroList;