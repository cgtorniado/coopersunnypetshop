import React from 'react'
import Itemdetail from './Itemdetail'

function ShopPage(props) {
  return (
    <>
            <hr />
            <h1 class="fs-2 px-5 pt-5">{props.title}</h1>
            <div className='row px-5 text-center'>
                <div className='col-12 col-md-4'>
                    <Itemdetail
                        title={props.names1}
                        src={props.src1}
                        price={props.price1}
                        desc={props.desc1}
                        buyers={props.buyers1} />
                </div>

                <div className='col-12 col-md-4'>
                    <Itemdetail
                        title={props.names2}
                        src={props.src2}
                        price={props.price2}
                        desc={props.desc2}
                        buyers={props.buyers2} />
                </div>

                <div className='col-12 col-md-4'>
                    <Itemdetail
                        title={props.names3}
                        src={props.src3}
                        price={props.price3}
                        desc={props.desc3}
                        buyers={props.buyers3} />
                </div>

            </div>
    </>
  )
}

export default ShopPage