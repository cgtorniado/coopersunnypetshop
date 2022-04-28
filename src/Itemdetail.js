import React from 'react'

function Itemdetail(props) {
    return (
        <>
            <div class="ui special cards p-2 m-auto">
                <div class="card">
                    <div class="blurring dimmable image">
                        <img src={props.src} alt="dogproduct" style={{ maxHeight: "30vh", objectFit: "cover" }} />
                    </div>
                    <div class="content">
                        <p class="header">{props.names} 💰  Php {props.price}</p>

                        <div class="ui star rating" data-rating="3"></div>

                        <p>{props.desc}</p>

                    </div>
                    <div class="extra content">

                        <button class="ui button">Add to Cart</button>
                        <i class="users icon"></i>
                        {props.buyers} Buyers

                    </div>
                </div>

            </div>

        </>
    )
}

export default Itemdetail