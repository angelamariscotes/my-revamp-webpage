import { useState } from 'react'
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { FaCheck, FaMailBulk, FaMapPin, FaSearch } from 'react-icons/fa';
import { FiBarChart2, FiKey } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';

import { navItems, socials } from '../../../utils/constant';
import ButtonLink from '../../../shared/button-link';
import Listing from '../listing';

function Main() {
  return (
    <>
      <main id="top">
        <section className="hero">

          <Image src={'/images/bg001.webp'} alt="Homes at the foot of Nevada's mountain range" />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">
              NEARLY 30 YEARS OF REAL ESTATE EXPERIENCE
            </p>
            <h1>Your Next Move Starts Here </h1>
            <p className="hero__intro">
              Helping buyers and sellers make confident real estate decisions through experience, local expertise, and a commitment to results.
            </p>
            <div className="hero__actions">
              <ButtonLink href="#properties" variant="light">
                Explore homes <BsArrowRight />
              </ButtonLink>
              <ButtonLink href="#about" variant="outline">
                Meet Marci
              </ButtonLink>
            </div>
          </div>

          <div className="hero__proof" aria-label="Marci's experience">
            <div>
              <strong>28+</strong>
              <span>Years serving clients</span>
            </div>
            <div>
              <strong>$28.5M</strong>
              <span>Closed in a top year</span>
            </div>
            <div>
              <strong>90+</strong>
              <span>Clients helped in 2021</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

function Search() {

  const [searchMessage, setSearchMessage] = useState("")

  function handleSearch(event) {
    event.preventDefault()
    setSearchMessage(
      "Great — I’ll help you narrow the search. Call or message me for current matches.",
    )
  }
  return (
    <section className="finder" id="properties">
      <div className="finder__intro">
        <p className="eyebrow">Start your search</p>
        <h2>Find Your Dream Home </h2>
      </div>
      <Form className="finder__form" onSubmit={handleSearch}>
        <Form.Group controlId="search-location">
          <Form.Label>Location</Form.Label>
          <Form.Select defaultValue="Pahrump">
            <option>Pahrump</option>
            <option>Mountain Falls</option>
            <option>Artesia at Hafen Ranch</option>
            <option>All Nye County</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="search-type">
          <Form.Label>Looking for</Form.Label>
          <Form.Select defaultValue="Any home">
            <option>Any home</option>
            <option>Single family</option>
            <option>Land</option>
            <option>Commercial</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="search-price">
          <Form.Label>Price range</Form.Label>
          <Form.Select defaultValue="Any price">
            <option>Any price</option>
            <option>Under $300k</option>
            <option>$300k–$500k</option>
            <option>$500k+</option>
          </Form.Select>
        </Form.Group>
        <Button bg={'none'} variant="" className="button button--dark search-button" type="submit">
          Search homes <FaSearch />
        </Button>
      </Form>
      {searchMessage && (
        <p className="finder__message" role="status">
          <FaCheck /> {searchMessage}
        </p>
      )}
    </section>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How I can help</p>
          <h2>
            Local expertise.
            Personal attention.
          </h2>
        </div>
        <p>
          Whether you’re ready now or simply weighing your options, you’ll
          get straightforward answers and a clear path forward.
        </p>
      </div>

      <div className="service-grid">
        <article className="service-card service-card--image">
          <Image src={'images/service.webp'} />
          <div className="service-card__overlay ">
            <span>01</span>
            <h3> Your move, made easy.</h3>
            <p>
              Buying, selling, investing, or just curious about the market? We’ve got you, with a team that makes the whole experience better.
            </p>
            <a href="#contact" aria-label="Learn about buying a home">
              <BsArrowRight />
            </a>
          </div>
        </article>

        <article className="service-card service-card--sand">
          <span className="service-card__icon">
            <FiBarChart2 />
          </span>
          <span>02</span>
          <h3>Commercial and residential </h3>
          <p>
            Large or small, condo or mansion, fixer-upper or luxury. We live, work, and play here, so we know where your hard-earned dollars go furthest.
          </p>
          <a className="text-link" href="#contact">
            Request a home value
          </a>
        </article>

        <article className="service-card service-card--dark">
          <span className="service-card__icon">
            <FiKey />
          </span>
          <span>03</span>
          <h3>Rely on expertise</h3>
          <p>
            Questions about affordability, credit, or loans? We connect you with the
            right people, quickly, so you feel confident and informed at every step.
          </p>
          <a className="text-link text-link--light" href="#contact">
            Ask Marci a question
          </a>
        </article>
      </div>
    </section>
  )
}

function Marci() {
  return (
    <section className="about" id="about">
      <div className="about__portrait">
        <div className="about__frame">
          <Image
            src={'/images/marci.webp'}
            alt="Marci Metzger, Pahrump Realtor"

          />
        </div>
        <div className="about__badge">
          <span>Serving Pahrump</span>
          <strong>Since 1995</strong>
        </div>
      </div>
      <div className="about__copy">
        <p className="eyebrow eyebrow--light">Meet your Realtor</p>
        <blockquote className=''>
          "I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there's a place for you here!
          I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me."
        </blockquote>
        <p>
          Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.
        </p>
        <p className="signature">Marci Metzger</p>
        <span className="about__role">
          Realtor® · The Ridge Realty Group
        </span>
      </div>
    </section>
  )
}

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const galleryPhotos = [
    {
      src: 'images/gallery1.webp',
      alt: "Desert home with a pool and mountain views",
    },
    {
      src: 'images/gallery2.webp',
      alt: "Bright modern kitchen with a large island",
    },
    {
      src: 'images/gallery3.webp',
      alt: "Modern home and swimming pool at golden hour",
    },
    {
      src: 'images/gallery4.webp',
      alt: "Desert residence with a swimming pool",
    },
    {
      src: 'images/gallery5.webp',
      alt: "Homes at the foot of Nevada's mountain range",
    },
    {
      src: 'images/gallery6.webp',
      alt: "Open Nevada road leading toward the mountains",
    },
  ]
  return (
    <>

      <Container fluid as="section" className="gallery section" id="gallery">
        <div className="section-heading gallery__heading">
          <div>
            <p className="eyebrow">Property inspiration</p>
            <h2>
              Picture life
              <br />
              in Pahrump.
            </h2>
          </div>
          <p>
            Explore the spaces, views, and relaxed desert lifestyle that make
            this corner of Nevada feel like home.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryPhotos.map((photo, index) => (
            <article
              className={
                index === 0
                  ? "gallery__item gallery__item--feature"
                  : "gallery__item"
              }
              key={photo.src}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Open ${photo.label} photo`}
              >
                <img src={photo.src} alt={photo.alt} />
                <span>
                  <small>0{index + 1}</small>
                  {photo.label}
                </span>
              </button>
            </article>
          ))}
        </div>
      </Container>

      <Modal
        show={Boolean(selectedPhoto)}
        onHide={() => setSelectedPhoto(null)}
        centered
        size="xl"
        className="gallery-modal"
        aria-labelledby="gallery-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="gallery-modal-title">
            {selectedPhoto?.label}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPhoto && (
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

function Contact() {
  return (
    <Container fluid as="section" className="contact section bg-white" id="contact">
      <Row className="contact__row">
        <Col lg={6} className="contact__intro">
          <p className="eyebrow">Let’s talk real estate</p>
          <h2>Ready when you are.</h2>
          <p>
            Tell me what’s on your mind—buying, selling, or simply
            exploring. No pressure, just thoughtful guidance.
          </p>
          <div className="contact__actions">
            <a href="tel:2069196886">
              <span>
                <FaPhone />
              </span>
              <div>
                <small>Call Marci</small>
                <strong>(206) 919-6886</strong>
              </div>
              <BsArrowRight />
            </a>
            <a href="mailto:marci@marcimetzger.com">
              <span>
                <FaMailBulk />
              </span>
              <div>
                <small>Send an email</small>
                <strong>marci@marcimetzger.com</strong>
              </div>
              <BsArrowRight />
            </a>
            <div className="contact__location">
              <span>
                <FaMapPin />
              </span>
              <div>
                <small>Visit the office</small>
                <strong>
                  3190 NV-160, Suite F<br />
                  Pahrump, Nevada
                </strong>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6} className="">
          <Form className="contact-form" onSubmit={null}>
            <h3 className=''> Send us a Message  </h3>

            <Row className="g-4">
              <Col md={6}>
                <Form.Group controlId="contact-name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contact-email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contact-phone">
                  <Form.Label>
                    Phone <span>Optional</span>
                  </Form.Label>
                  <Form.Control
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    autoComplete="tel"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contact-interest">
                  <Form.Label>I’m interested in</Form.Label>
                  <Form.Select name="interest" defaultValue="Buying a home">
                    <option>Buying a home</option>
                    <option>Selling my property</option>
                    <option>Land or commercial property</option>
                    <option>Learning about Pahrump</option>
                    <option>Something else</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group controlId="contact-message">
                  <Form.Label>How can I help?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about your plans..."
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} className="contact-form__footer">
                <Button
                  variant="dark"
                  type="submit"
                  className="button button--primary"
                >
                  Send message <BsArrowRight />
                </Button>
                <p className='small text-muted'>
                  By sending this form, your email app will open with your
                  message ready to send.
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


function Affliation() {
  return (
    <Container
      fluid
      as="section"
      className="affiliations"
      aria-labelledby="affiliations-title"
    >
      <p className="text-center text-uppercase text-xs" id="affiliations-title">
        Professional affiliations
      </p>
      <Row className="affiliations__row g-5">
        <Col xs={6} lg={3} className="affiliations__item">
          <Image
            src={'/images/affiliate/aff1.webp'}
            height={50}
            alt="The Ridge Realty Group"
          />
        </Col>
        <Col xs={6} lg={3} className="affiliations__item">
          <Image
            src={'/images/affiliate/aff2.webp'}
            height={50}
            alt="Equal Housing Opportunity"
          />
        </Col>
        <Col xs={6} lg={3} className="affiliations__item">
          <Image
            src={'/images/affiliate/aff3.webp'}
            height={50} alt="Realtor" />
        </Col>
        <Col xs={6} lg={3} className="affiliations__item">
          <Image
            src={'/images/affiliate/aff4.webp'}
            height={50}
            alt="Pahrump Valley Chamber of Commerce"
          />
        </Col>
      </Row>
    </Container>
  )
}

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand brand--light" href="#top" aria-label="Marci Metzger, back to top">
              <span className="brand__name text-white">Marci Metzger</span>
              <span className="brand__tag">The Ridge Realty Group</span>
            </a>
            <p className="footer__about">
              Real estate done thoughtfully in Pahrump, Nevada.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <p className="footer__label">Explore</p>
            <ul className="footer__nav">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <p className="footer__label">Get in touch</p>
            <a className="footer__phone" href="tel:2069196886">
              (206) 919-6886
            </a>
            <address className="footer__address">
              3190 NV-160, Suite F
              <br />
              Pahrump, Nevada
            </address>
            <ul className="footer__social">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Marci Metzger. All rights reserved.</p>
          <p>Equal Housing Opportunity · Realtor®</p>
        </div>
      </footer>
    </>
  )
}

function Index() {
  return (
    <div>
      <Main />
      <Search />
      <Listing />
      <Services />
      <Marci />
      <Gallery />
      <Contact />
      <Affliation />
      <Footer />
    </div>
  )
}

export default Index