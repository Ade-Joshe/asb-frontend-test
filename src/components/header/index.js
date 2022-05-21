import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { arrowDown, bell, divisionIcon, entries, homeIcon, logo, search, user } from '../../assets'

export const Header = () => {

    const { hash } = useLocation();

    const NavLink = ({ icon, text, active }) => (
        <Link to={`#${text.toLowerCase()}`} className={`flex headerLink ${active ? "active" : ""}`}>
            <img src={icon} alt={text} />
            {text}
        </Link>
    )

    return (
        <header>
            <Link to={"/#divisions"} className={"flex"}>
                <img src={logo} alt={"logo"} />
                <h5>FE Engineer Test 1</h5>
            </Link>

            <div>
                <div className={'flex'}>
                    <NavLink icon={homeIcon} text={"Home"} active={hash === '#home'} />
                    <NavLink icon={entries} text={"Entries"} active={hash === '#entries'} />
                    <NavLink icon={divisionIcon} text={"Divisions"} active={hash === '#divisions'} />
                </div>

                <div className='flex'>
                    <div id={'searchInput'}>
                        <img src={search} alt={"search input"} />
                        <input />
                    </div>

                    <img src={bell} alt={""} />
                    <div className='flex userAvatar'>
                        <div className='flex'>
                            <img src={user} alt={""} />
                        </div>
                        <img src={arrowDown} alt={""} />
                    </div>
                </div>
            </div>
        </header>
    )
}