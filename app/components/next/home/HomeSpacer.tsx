export default function HomeSpacer() {

    return(
        <div className="home-spacer o-container o-container--centered flex flex-col">
            <div className="home-spacer__info">
                <span className="c-span c-bold c-span--centered">Maitre de stage</span>
                <h2 className="c-span--spacer c-title--centered">Vincent Echavidre</h2>
            </div>
            <div className="home-spacer__info">
                <span className="c-span c-bold c-span--centered">Adresse</span>
                <h2 className="c-span--spacer c-span--centered"> 1 Av. de Montbrun, 64600 Anglet</h2>
            </div>
            <div className="home-spacer__info">
                <span className="c-span c-bold c-span--centered">Sujet du stage</span>
                <h2 className="c-span--spacer c-span--centered">Développement Web</h2>
            </div>
        </div>
    )
}