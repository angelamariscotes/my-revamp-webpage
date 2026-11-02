import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiPhone } from 'react-icons/fi';

import ButtonLink from '../../shared/button-link';
import { navItems } from '../../utils/constant';

function OffcanvasExample() {
  return (
    <>
      <Navbar expand="lg" className="site-header" aria-label="Main navigation">
        <Container fluid className="header-container">
          <Navbar.Brand href="#" className='text-uppercase'>

            <div className='d-flex flex-row gap-2'>
              <div className='d-flex flex-column align-items-center ps-3'>
                <h4 className='brand__name mb-0'>  Marci Metzger  </h4>

                <small className='text-uppercase fw-normal text-muted' style={{ fontSize: '12px' }}>
                  THE RIDGE REALTY GROUP
                </small>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navigation" />
          <Navbar.Collapse id="main-navigation">
            <Nav className="desktop-nav mx-auto">
              {navItems.map(([label, href]) => (
                <Nav.Link href={href} key={href}>
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <ButtonLink
              href="tel:2069196886"
              variant="secondary"
              className="header-call"
            >
              <FiPhone /> (206) 919-6886
            </ButtonLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
