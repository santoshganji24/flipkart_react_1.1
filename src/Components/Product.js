import { useParams } from "react-router-dom";
import React from 'react'
import data from "../data";


export default function Product() {
    let params = useParams()

    var singleProduct = data.find((e) => {
        return e.id == params.id;
    });

    // console.log(singleProduct)

    return (
        <div className="datahere">
            <li className="item" key={singleProduct.id} >
                <img className="productimage" src={singleProduct.image} alt="" />
                <div className="productdesc">
                    <div>{singleProduct.name}</div>
                    <div className="productprice">₹ {singleProduct.price}</div>
                </div>
            </li>
        </div>

    )
}
