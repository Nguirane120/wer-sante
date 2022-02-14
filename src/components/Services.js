import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCoffee, faHeartPulse, faRotate, faTooth, faTruckMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import Team from './Team'

const Services = () => {
  return (
      <>
   <div class="container pt-5">
       <h1 className="text-center text-primary pb-3">Nos Serices</h1>
      <div class="row g-4">
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                      <FontAwesomeIcon icon={faHeartPulse} />
                  </div>
                  <h3 class="card-title mb-3">Cardiologie</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                 
              </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                  <FontAwesomeIcon icon={faTooth} />
                  </div>
                  <h3 class="card-title mb-3">Odontologie</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                  
              </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                  <FontAwesomeIcon icon={faTruckMedical} />
                  </div>
                  <h3 class="card-title mb-3">Ambulance</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                 
              </div>
          </div>
        </div>
      </div>
      <div class="row pt-3 g-4">
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                      <FontAwesomeIcon icon={faRotate} />
                  </div>
                  <h3 class="card-title mb-3">Diagnostic</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                 
              </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                  <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <h3 class="card-title mb-3">Odontologie</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                  
              </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card bg-light text-primary">
              <div class="card-body text-center">
                  <div class="h1 mb-3">
                  <FontAwesomeIcon icon={faUserDoctor} />
                  </div>
                  <h3 class="card-title mb-3">Medecin</h3>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, repellendus id nostrum eius in?</p>
                 
              </div>
          </div>
        </div>
      </div>
    </div>
    <Team/>
    </>
  )
}

export default Services