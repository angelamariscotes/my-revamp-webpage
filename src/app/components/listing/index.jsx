import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { FiBarChart2, FiEye } from 'react-icons/fi'


export default function Listing() {

  return (
    <>
      <Container fluid as="section" className="gallery section" id="gallery">
        <div className="section-heading gallery__heading">
          <div>
            <p className="eyebrow">Need A Real Estate Agent? Let's Find Your Home!</p>
            <h2>
              Real Estate in
              <br />Pahrump & Las Vegas
            </h2>
          </div>
          <p>
            Browse homes and properties across Pahrump and Las Vegas, with opportunities to match your lifestyle and goals.
            <br />
            <a className='footer__label text-dark'
              href='https://www.zillow.com/profile/marcimetzger' target="_blank" rel="noreferrer">
              Current Listings
            </a>
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card service-card--image">
            <Image src={'https://api.cotality.com/trestle/Media/Property/PHOTO-Jpeg/1194027894/1/MzczLzE5MTEvMjA/MjAvNjg5NS8xNzkzMjE1MzY0/Z2af2-R9h3MEpadvSVUFI2JwzYS3sI-xPx1F0lpPxOs'} />
            <div className="service-card__overlay ">
              <span>Listing ID: 2830226</span>
              <h3> $1,500,500</h3>
              <p>
                4 bd5 bth5,530 sq. ft.  <br />
                1400 N Corbin Street, Pahrump, NV
              </p>
              <a href="https://theridgerealty.idxbroker.com/idx/details/listing/c015/2830226/1400-N-Corbin-Street-Pahrump-NV-89060?widgetReferer=true" aria-label="Learn about buying a home">
                <BsArrowRight />
              </a>
            </div>
          </article>


          <article className="service-card service-card--image">
            <Image src={'https://api.cotality.com/trestle/Media/Property/PHOTO-Jpeg/1176525041/1/MzczLzE5MTEvMjA/MjAvNjg5NS8xNzkyMTgxMzg5/PMcVELUylz6Bjv7xS0HXmOC8kEeZ70Jg0fysV2Z5cLI'} />
            <div className="service-card__overlay ">
              <span>Listing ID: 2797519</span>
              <h3>   $1,275,000 </h3>
              <p>

                3 bd3 bth2,456 sq. ft.  <br />
                4190 N Equus Court, Pahrump, NV
              </p>
              <a href="https://theridgerealty.idxbroker.com/idx/details/listing/c015/2797519/4190-N-Equus-Court-Pahrump-NV-89060?widgetReferer=true" aria-label="Learn about buying a home">
                <BsArrowRight />
              </a>
            </div>
          </article>

          <article className="service-card service-card--image">
            <Image src={'https://img1.wsimg.com/isteam/stock/107927/:/rs=w:984,h:655'} />
            <div className="service-card__overlay">
              <h3>Upcoming Virtual Showings </h3>
              <p>
                Discover homes in Pahrump and Las Vegas that match your lifestyle, preferences, and budget.</p>
              <p>
                <a className="text-link mt-0 text-white" href="https://theridgerealty.idxbroker.com/idx/results/listings?idxID=c015&ccz=city&lp=200000&hp=2000000&bd=0&tb=0&sqft=0&city=35146&or_virtual%5B0%5D%5Bwvoh%5D=y&or_virtual%5B1%5D%5Bwvt%5D=y">
                  View More
                </a>
              </p>
            </div>

          </article>
        </div>

      </Container>
    </>
  )
}

