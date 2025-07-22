import { Link, useLocation } from 'react-router'

const pages = 
[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Premier rapport',
        path:'/rapport-lancement'
    },
    {
        name:'Rapport de stage Final',
        path:'/rapport-final'
    }
]


export default function Navbar() {

    const location = useLocation();

    const nav_items = pages.map(function(page)
    {
        return (
            <li key={ page.name } className='navbar__item'>
                <Link key={ page.name } to={ page.path }
                    className={
                        location.pathname === page.path
                        ? 'navbar__link is-active'
                        : 'navbar__link'
                    }
                >
                    { page.name }
                </Link>
            </li>
        )
    }
    )

    return(
        <nav className='w-full pt-5 pb-5 navbar'>
            <ul className='navbar__list flex flex-direction-row gap-10 justify-center'>
                <li className='pr-30 navbar__link nom'>Aurélien Piotte</li>

                { nav_items }
{/*                 <li>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                    </label>
                </li> */}
            </ul>
        </nav>
    )

}