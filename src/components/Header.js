import React from 'react'

function Header({ total, money }) {
    return (
        <div className='header'>
            <div className='container header-content'>
                {total > 0 && money - total !== 0 && (
                    <div className='header-text'>Harcamak için {money - total}$ paranız kaldı.</div>
                )}
                {total === 0 && (
                    <div className='header-text'>Harcamak için  {money}$ paranız var.</div>
                )}
                {total < 0 && (
                    <div className='header-text'>Paran bitt!</div>
                )}
            </div>
        </div>
    )
}

export default Header
