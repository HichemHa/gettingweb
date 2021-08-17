import './App.css';
import NavBar from './components/NavBar';
import { Container, Row, Col,Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header style={{position:"fixed",left:"0",right:"0",top:"0"}}>
        <NavBar />
      </header  >
      <body style={{position:"fixed",left:"0",right:"0",top:"186px"}}>
        <Container >
          <Row>
            <Col><p>

              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p></Col>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-300"
                    height="400px"
                    src="https://www.getting-web.com/images/grid/hebergement.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-300"
                    height="400px"
                    src="https://www.getting-web.com/images/grid/developpement.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-300"
                    height="400px"
                    src="https://www.getting-web.com/images/grid/seo.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </body>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
