import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import Aboutfooter from './Images/aboutus2.svg'
import Shopheader from './Images/shopheader.svg'
import ShopPage from './ShopPage';
import Page404img from './Images/404notfound.svg'
import Headerimg from './Images/headerimg.svg'



export function Home() {
    return (
        <div className="container-fluid">
            <header>
                <nav>
                    <ul>
                        <li className='col-12 p-0 p-lg-5 col-lg-4'>
                            <Link to="/"> <h1 className="text-start h4 py-3"> Cooper & Sunny Pet Shop</h1></Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'> 
                            <Link to="/about">About</Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li className='col-3  p-0 p-lg-5 col-lg-1'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>


            <div className="row p-3">
                <div className="col-12 col-md-7 p-5">
                    <h1 className=" text-start display-1 my-auto">
                        Welcome to our shop!
                    </h1>

                    <p className="fs-4 mt-5">Welcome to Cooper&Sunny! We are a family-owned pet product purveyor that supplies all of the things your dog needs and none of the things he doesn't. </p>

                    <Link to="/shop">
                        <div class="btn btn-primary">
                            Shop Now</div>
                    </Link>

                    <Link to="/about/history">
                        <div class="btn btn-outline-primary">
                            History</div>
                    </Link>

                    <Link to="/about/location">
                        <div class="btn btn-outline-primary">
                            Our location</div>
                    </Link>

                </div>

                <div className="col-12 col-md-5 p-5 my-auto">
                    <img src={Headerimg} alt="headerphoto" className='header img-fluid' />
                </div>
            </div>
        </div>
    )
}

export function Page404() {
    return (
        <div className='container-fluid'>
            <header>
                <nav>
                    <ul>
                        <li className='col-12 p-0 p-lg-5 col-lg-4'>
                            <Link to="/"> <h1 className="text-start h4 py-3"> Cooper & Sunny Pet Shop</h1></Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'> 
                            <Link to="/about">About</Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li className='col-3  p-0 p-lg-5 col-lg-1'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>


            <h1 className=" text-center display-1">
                <img src={Page404img} alt="errorpic" style={{ width: "80vw", height: "60vh", backgroundSize: "cover" }} />
                <br />
                Page not found
            </h1>
        </div>
    )
}

export function About() {
    return (
        <div className="container-fluid">
            <header>
                <nav>
                    <ul>
                        <li className='col-12 p-0 p-lg-5 col-lg-4'>
                            <Link to="/"> <h1 className="text-start h4 py-3"> Cooper & Sunny Pet Shop</h1></Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'> 
                            <Link to="/about">About</Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li className='col-3  p-0 p-lg-5 col-lg-1'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>

            <div className="m-auto">
                <main>
                    <div className='row pb-2 text-center m-auto'>
                        <img src={Aboutfooter} alt="footertext" style={{ height: "300px", width: "80vw", objectFit: "cover", objectPosition: "center 100%" }} className="p-0 mx-auto" />

                        <h1 className=" text-center display-1">
                            About Us
                        </h1>

                        <div className='d-grid justify-content-center m-2'>
                        <Outlet />
                        </div>


                        <div className="d-grid">


                            <Link to="/about/history">
                                <div class="btn btn-outline-primary col-3">
                                    History</div>
                            </Link>



                            <Link to="/about/location">
                                <div class="btn btn-outline-primary col-3">
                                    Our location</div>
                            </Link>

                        </div>
                    </div>




                    <div className='row px-5 m-5'>
                        <div class="accordion accordion-flush px-5 pb-2 fs-4" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Who is Cooper & Sunny
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body"><p>Cooper is a half shih tzu and half poodle puppy, while Sunny is half shih tzu and half shiba inu. They mostly love chewable dog toys and different flavored snacks. </p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What kind of products do you sell?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><p>We believe in finding and supporting cruelty-free, sustainable brands that are passionate about their products and the impact they can have on our four-legged friends. We have all sorts of products from food, toys, and costumes</p></div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            More about our products
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body"><p> We know there are so many great brands out there making incredible products, but it can be hard to find them. That's why we're here—to help you discover new things you and your dog will love, while giving you the peace of mind that comes with knowing your purchase is helping to raise the bar for pet product manufacturing everywhere.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="fs-3 col-lg-8 mx-auto mt-5 p-5 bg-primary shadow text-white">We believe that our pets deserve the best.

                            We know you feel the same, which is why we only sell cruelty-free pet products that are made without any harsh chemicals.
                        </p>

                        <div className="row g-5 px-5">
                            <div className="col-md-6 px-5 pb-5">
                                <h2>Vision</h2>
                                <p> Each product we sell has been personally vetted by our loving team of dog owners (and cat lovers too!). We want to make sure that everything we sell is high-quality, so you can be confident in your purchases and trust that your pets are getting the best care possible.</p>
                            </div>

                            <div className="col-md-6 px-5">
                                <h2>Guides</h2>
                                <p>
                                    By shopping with us, you're helping to support small businesses around the world. Many of our products come from independent artists who have crafted unique pieces for your furry best friends, and every purchase helps them continue to create their work! </p>

                            </div>


                            <img src={Aboutfooter} alt="footertext" style={{ height: "250px", width: "100vw", objectFit: "cover", objectPosition: "center 5%" }} className="p-0 m-0 text-center" />


                        </div>

                    </div>
                </main>
            </div>



        </div >
    )
}

export function Shop() {
    return (
        <div className="container-fluid">
            <header>
                <nav>
                    <ul>
                        <li className='col-12 p-0 p-lg-5 col-lg-4'>
                            <Link to="/"> <h1 className="text-start h4 py-3"> Cooper & Sunny Pet Shop</h1></Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'> 
                            <Link to="/about">About</Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li className='col-3  p-0 p-lg-5 col-lg-1'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>


            <div className='row p-5'>
                <div className='col-2 m-auto'>
                    <h1 className=" text-start display-1">
                        Shop
                    </h1>
                </div>

                <div className='col-10'>
                    <img src={Shopheader} alt="headerimg" style={{ height: "300px", width: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
                </div>
            </div>

            <ShopPage title="Toys"
                title1="Hand Shower"
                src1="https://m.media-amazon.com/images/I/61rjRXDZ2SL.jpg"
                price1="200"
                desc1="For Easier Cleaning"
                buyers1="20"

                title2="Water Bottle"
                src2="https://static.toiimg.com/img/78275429/Master.jpg"
                price2="100"
                desc2="For travelling"
                buyers2="32"

                title3="Pillow"
                src3="https://lzd-img-global.slatic.net/g/p/9dc5cd49abdc446beeb00a8fc2c0664f.jpg_720x720q80.jpg_.webp"
                price3="300"
                desc3="For sleeping"
                buyers3="11"

            />

            <ShopPage title="Food"
                title1="Set"
                src1="https://image.shutterstock.com/image-photo/pet-food-toys-accessories-on-260nw-1364257343.jpg"
                price1="1200"
                desc1="For pet starter kit"
                buyers1="30"

                title2="Natural Food"
                src2="https://cdn.sanity.io/images/0vv8moc6/nutrioutlook/c23019205bd4c2ca4ae546de4da8da9680d52c2a-500x500.jpg"
                price2="300 per kg"
                desc2="natural option"
                buyers2="42"

                title3="Snack Set"
                src3="https://www.petfoodindustry.com/ext/resources/Images-by-month-year/18_03/Dog-treats-chews.jpg?t=1526243719&width=1080"
                price3="600"
                desc3="For training"
                buyers3="1121"

            />


        </div>
    )
}

export function Contact() {
    return (
        <>
            <div className="container-fluid contactpage m-auto">
            <header>
                <nav>
                    <ul>
                        <li className='col-12 p-0 p-lg-5 col-lg-4'>
                            <Link to="/"> <h1 className="text-start h4 py-3"> Cooper & Sunny Pet Shop</h1></Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'> 
                            <Link to="/about">About</Link>
                        </li>

                        <li className='col-3 p-0 p-lg-5 col-lg-1'>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li className='col-3  p-0 p-lg-5 col-lg-1'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>

                <div className="ui raised very padded text container segment contactcontainer">
                    <h2 className="ui dividing header">Send us a message!</h2>
                    <form className="ui form">
                        <div className="field">
                            <label>Name & E-mail address</label>
                            <div className="two fields">
                                <div className="field">
                                    <input type="text" name="shipping[first-name]" placeholder="Full Name" />
                                </div>


                                <div className="field">
                                    <input type="text" name="shipping[last-name]" placeholder="E-mail address" />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>What are your thoughts?</label>
                            <div className="field">
                                <div className=" wide field">
                                    <textarea rows="4" placeholder="Message" />
                                </div>

                            </div>
                        </div>


                        <div className="ui button" tabindex="0">Submit Message</div>
                    </form>
                </div>

                <div class="content text-center">
                    <div class="header">
                        <strong>Cooper & Sunny pet shop</strong>
                    </div>

                    <div class="meta">
                        Gov. M. Cuenco Ave, Cebu City, Cebu
                    </div>

                    <div class="description">
                        info@coopersunny.com <br />
                        (032) 4159812
                    </div>
                </div>


            </div>


        </>

    )
}

export function CompanyHistory() {
    return (

        <div className="ui raised very padded text container segments">
            <h2 className="ui dividing header">Company History</h2>
            <div className="content">
                <div className="header">
                    <strong>Cooper & Sunny pet shop</strong>
                </div>

                <br />

                <div className="description">
                    We are a pet product company that cares about animals as much as you do.
                    <br /><br />

                    We were founded last April 19, 2021 at Liloan, Cebu. We started from a small-scale home-based pet selection items, now with a major branch in Mandaue City.

                    <br /><br />

                    We want to know whether your pet is going to be safe, healthy, and happy when they use our products, which is why we test them on ourselves first. If it's not good enough for us, it's not good enough for your beloved pets! Our products are all cruelty-free and made with care by loving dog owners.
                </div>
            </div>
        </div>


    )
}

export function Location() {
    return (

        <div className="ui raised very padded text container segment">
            <h2 className="ui dividing header">Our Location</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7204010958085!2d123.91246141465827!3d10.364226469500835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9989a3c118505%3A0xadb416e665df71bb!2sPet%20science%20veterinary%20clinic!5e0!3m2!1sen!2sph!4v1650346780811!5m2!1sen!2sph" style={{ border: 0, width: "100%", height: "70%", margin: "auto" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="our location"></iframe>

            <div class="content">
                <div class="header">
                    <strong>Cooper & Sunny pet shop</strong>
                </div>

                <div class="meta">
                    Gov. M. Cuenco Ave, Cebu City, Cebu
                </div>

                <div class="description">
                    (032) 4159812
                </div>
            </div>




        </div>


    )
}