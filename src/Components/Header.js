import React from 'react'
import Form from './Form'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="headerflex">
                    <div>
                        <img
                            className="headerimage"
                            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                            alt="Flipkart"
                        />
                    </div>
                    <Form />
                    <div>
                        <button className="login">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
