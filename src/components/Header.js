import React from 'react'
import Services from './Services'

const Header = () => {
    return (
        <>
        <section class="bg-primary text-light text-center p-5">
            <div class="container">
                <div className="row">
                    <div className="col-md">
                    <div>
                        <h1>Votre carte Votre consultation</h1>
                        <button
                            class="btn btn-danger btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#enroll"
                        >
                            En savoir plus
                        </button>
                    </div>
                    </div>

                    <div className="col-md">
                
                    <img
                        class="img-fluid d-none d-sm-block"
                        src="images/img1.jpeg"
                        alt=""
                    />

                    </div>
                </div>
            </div>
        </section>
        <Services/>
        </>
    )
}

export default Header