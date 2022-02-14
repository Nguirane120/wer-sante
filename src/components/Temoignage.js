import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Temoignage.css'
import Footer from './Footer'
import React from 'react'

const Temoignage = () => {
    return (
        <>
            <h1 className="text-center text-primary pt-5">Temoignages</h1>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="row justify-content-md-center">
                            <div className="col-md-auto">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://randomuser.me/api/portraits/women/10.jpg" className='rounded-circle' alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://randomuser.me/api/portraits/men/18.jpg" className='rounded-circle' alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://randomuser.me/api/portraits/women/11.jpg" className='rounded-circle' alt="" />
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        <button class="carousel-control-prev btn-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                         <button class="carousel-control-next btn-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </section>
            <Footer/>
        </>
    )
}

export default Temoignage