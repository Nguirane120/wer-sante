import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <section class="bg-primary p-5 justify-content-between text-light align-items-center">
                <div class="container">
                    <div className="row">
                        <div class="col-md-6">
                            <h3 class="">WERR</h3>
                            <p class="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quas, nulla?</p>
                            <div class="input-group news-letter">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button class="btn  btn-danger" type="button">Button</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-4">
                            <div className="d-grid gap-2">
                                <div>
                                <a href="" className="text-white text-decoration-none">Solutions</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Odontologie</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Cardiologie</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Medecine</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Neurologie</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Diagnostic</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-4">
                            <div className="d-grid gap-2">
                                <div>
                                <a href="" className="text-white text-decoration-none">Plan</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Accueil</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Remboursement</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Sante</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Documents</a>
                                </div>
                                <div>
                                <a href="" className="text-white text-decoration-none">Ma Carte</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <footer class="p-5 bg-primary text-white text-center">
                    <div class="container">
                        <p class="lead">Copyright &copy; 2022 Nguirane120</p>
                    </div>
                    </footer>
        </>
    )
}

export default Footer