import React from 'react'
import Temoignage from './Temoignage'

const Team = () => {
    return (
        <>
            <h1 className="text-center text-primary pt-5">Notre equipe</h1>   <div class="carousel-inner">
                    <div class="carousel-item">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" class="d-block w-90" alt="..."/>
                    <h3>Modou</h3>
                    </div>
                    <div class="carousel-item">
                    <img src="https://randomuser.me/api/portraits/women/6.jpg" class="d-block w-90" alt="..."/>
                    <h3>Jescica</h3>
                    </div>
                    <div class="carousel-item">
                    <img src="https://randomuser.me/api/portraits/men/7.jpg" class="d-block w-90" alt="..."/>
                    <h3>Jhon Doe</h3>
                    </div>
                </div>
            <section class="p-5 bg-primary pb-3">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded-circle mb-3" alt="" />
                                    <h3 class="card-title mb-3">Jhon Does</h3>
                                    <p class="card-text mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, doloribus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/12.jpg" class="rounded-circle mb-3" alt="" />
                                    <h3 class="card-title mb-3">Stev Smith</h3>
                                    <p class="card-text mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, doloribus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/women/11.jpg" class="rounded-circle mb-3" alt="" />
                                    <h3 class="card-title mb-3">Natali</h3>
                                    <p class="card-text mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, doloribus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/women/10.jpg" class="rounded-circle mb-3" alt="" />
                                    <h3 class="card-title mb-3">SArahs</h3>
                                    <p class="card-text mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, doloribus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Temoignage/>
        </>
    )
}

export default Team