const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineHeroEditor = ({hero, deleteHero, updateHero}) => {
    const [heroCopy, setHeroCopy] = useState(hero)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={heroCopy.firstName}
                            onChange={(e)=>setHeroCopy(heroCopy => ({...heroCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={heroCopy.lastName}
                            onChange={(e)=>setHeroCopy(heroCopy => ({...heroCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={heroCopy.username}
                            onChange={(e)=>setHeroCopy(heroCopy => ({...heroCopy, heroname: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/heros/${heroCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateHero(heroCopy.id, heroCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteHero(hero.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/heros/${heroCopy.id}`}>
                            {heroCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/heros/${heroCopy.id}`}>
                            {heroCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/heros/${heroCopy.id}`}>
                            {heroCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/heros/${heroCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineHeroEditor;