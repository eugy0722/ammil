import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faExternalLinkAlt,
  faTimesCircle,
  faCheckCircle,
  faCalendarAlt,
  faCodeBranch,
  faShoppingCart,
  faFolder,
  faMapMarkedAlt,
  faPager,
  faFileCode,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faGithub, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import {
  Col,
  Row,
  Card,
  Image,
  Button,
  Container,
  ListGroup,
  Tooltip,
  OverlayTrigger,
  Form,
  Navbar,
  Nav,
  Badge
} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from '../components/CodeEditor';
import GitHubButton from 'react-github-btn';

import { Routes } from '../routes';
import ThemesbergLogoIcon from '../assets/img/themesberg.svg';
import ThemesbergLogo from '../assets/img/themesberg-logo.svg';
import MockupPresentation from '../assets/img/mockup-presentation.png';
import ReactHero from '../assets/img/technologies/react-hero-logo.svg';
import MapboxImg from '../assets/img/mockup-map-presentation.png';
import CalendarImg from '../assets/img/mockup-calendar-presentation.png';
import ReactMockupImg from '../assets/img/react-mockup.png';
import BS5IllustrationsImg from '../assets/img/illustrations/bs5-illustrations.svg';
import BS5Logo from '../assets/img/technologies/bootstrap-5-logo.svg';
import ReactLogo from '../assets/img/technologies/react-logo.svg';

import pages from '../data/pages';
import features from '../data/features';
import { faSign, faSignature } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : '';

    return (
      <OverlayTrigger trigger={['hover', 'focus']} placement="left" overlay={<Tooltip>{tooltip}</Tooltip>}>
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">AMMIL</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#pages">
                  Solução
                </Nav.Link>
                <Nav.Link as={HashLink} to="#features">
                  Insights
                </Nav.Link>
                <Nav.Link as={HashLink} to="#footer" className="d-sm-none d-xl-inline">
                  Empresa
                </Nav.Link>
                <Nav.Link as={HashLink} to="#contribuidor">
                  Contribuidor
                </Nav.Link>
                <Nav.Link as={HashLink} to={Routes.Signin.path}>
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to={Routes.Signup.path} variant="outline-white" className="ms-3">
              <FontAwesomeIcon icon={faSignature} className="me-1" /> Sign Up
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block">
                <span className="fab fa-react"></span>
              </div>
              <h1 className="fw-bolder text-secondary">AMMIL</h1>
              <p className="text-muted fw-light mb-5 h5">
                Bem-vindo a AMMIL Webpage, sua porta de entrada para desbloquear o potencial dos mercados informais.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to="#pages" className="text-dark me-3">
                  Conhaça os nossos Serviços <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <a href="https://themesberg.com" target="_blank">
                    <Image src={ThemesbergLogoIcon} height={25} width={25} className="mb-3" alt="Themesberg Logo" />
                    <p className="text-muted font-small m-0">Themesberg-AMMIL</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">0</h3>
              <p className="text-gray">Soluções</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">0</h3>
              <p className="text-gray">Serviços</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & react-app</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">CSS Framework</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Empoderamento das empresas</h2>
              <p className="mb-3 lead fw-bold">Empodere seus negócios com insights acionáveis em mercados informais.</p>
              <p className="mb-4">
                Nosso software fornece dados em tempo real sobre produtos, vendedores e tendências de consumo, dando-lhe a vantagem para
                tomar decisões informadas e impulsionar o crescimento.
              </p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Desbloquear oportunidades</h2>
              <p className="mb-3 lead fw-bold">Descobrir oportunidades inexplorados em mercados informais</p>
              <p className="mb-4">
                Com AMMIL. Nossa plataforma permite que você descubra tendências ocultas, identifique mercados emergentes e expanda seu
                alcance como nunca antes.
              </p>
            </Col>
            <Col lg={6} className="rounded shadow pt-3">
              <Code
                scope={{ Form, Button }}
                code={`<Form>
  <Form.Group id="frameworks" className="mb-3">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option defaultValue>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" className="m-1">Primary</Button>
</Form>`}
                language="jsx"
              />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">
                Pesquisa de mercado simplificada
                <Badge pill bg="secondary" text="dark" className="badge-md ms-3 mb-0 fs-6">
                  Pro
                </Badge>
              </h2>
              <p className="mb-3 lead fw-bold">Diga adeus aos métodos tradicionais de pesquisa de mercado.</p>
              <p className="mb-4">
                AMMIL agiliza o processo de coleta de inteligência de mercado, economizando tempo e recursos, ao mesmo tempo em que fornece
                dados abrangentes sobre mercados informais.
              </p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">
                Apoio às economias locais
                <Badge pill bg="secondary" text="dark" className="badge-md ms-3 mb-0 fs-6">
                  Pro
                </Badge>
              </h2>
              <p className="mb-3 lead fw-bold">Junte-se a nós no apoio às economias locais e aos empreendedores de pequena escala.</p>
              <p className="mb-4">
                Ao alavancar AMMIL, você contribui para o desenvolvimento econômico e o empoderamento social, criando um impacto positivo
                nas comunidades em todo o mundo.
              </p>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Comece hoje</h2>
              <p className="mb-3 lead fw-bold">Pronto para liberar o potencial dos mercados informais?</p>
              <p className="mb-4">
                creva-se para AMMIL hoje e embarque em uma jornada de descoberta, crescimento e oportunidade. Capacite o seu negócio e tenha
                um impacto com a nossa solução de mapeamento inovadora.
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">10 hand-crafted pages</h2>
              <p className="lead px-lg-10">
                Every page from Volt has been carefully built to provide all the necessary pages your startup will require
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map((page) => (
              <PagePreview key={`page-${page.id}`} {...page} />
            ))}
          </Row>
        </Container>
      </section>
      <footer className="footer py-6 bg-dark text-white" id="footer">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">AMMIL</span>
              </Navbar.Brand>
              <p>Aplicação de Mapeamento de Mercados Informais em Luanda.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Nossas Soluções</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link target="_blank">Blog</Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank">Productos</Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank">Sobre nós</Card.Link>
                </li>
                <li>
                  <Card.Link target="_blank">Contacte nos</Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Nossos Serviços</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.Signup.path}>
                    Começa a usar
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Inscrever-se</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                Nós não partilhamos os seus dados. Veja a nossa{' '}
                <Card.Link className="text-white" href="#">
                  Política de Privacidade
                </Card.Link>
              </p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
