import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import data from '../data'

export default function Home() {

    const dataElement = data.map((eachitem) => {
        return (
            <>
                <Link key={eachitem.id} to={`/${eachitem.id}`}>
                    <li className="item" key={eachitem.id} >
                        <img className="productimage" src={eachitem.image} alt="" />
                        <div className="productdesc">
                            <div>{eachitem.name}</div>
                            <div className="productprice">₹ {eachitem.price}</div>
                        </div>
                    </li>
                </Link>
                {/* <Outlet /> */}
            </>
        )
    })

    return (
        <>
            <ul className='datahere'>
                {dataElement}
            </ul>
        </>
    )
}
