

import Carousel from "react-bootstrap/Carousel";
import style from "../assets/home.module.css";

import {
  Button,
  Card,
  Container,
  Image,
} from "react-bootstrap";
import shop1 from "../assets/imagesfashon/shop_banner_img1.jpg";
import shop2 from "../assets/imagesfashon/shop_banner_img2.jpg";
import slider1 from "../assets/imagesfashon/banner1.jpg";
import slider2 from "../assets/imagesfashon/banner2.jpg";
import slider3 from "../assets/imagesfashon/banner3.jpg";





export default function FashionHome() {
  return (
    <>
      <div>
        <Carousel style={{ margin: "auto" }} fade>
          <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
            <Image src={slider1} />
            <Carousel.Caption>
              <p style={{ color: "black" }}>50% of all Women's Fashion</p>
              <h3 style={{ color: "black", fontSize: "50px" }}>
                Women Fashion
              </h3>
              <button  className={style.button}>Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
            <Image src={slider3} />
            <Carousel.Caption>
              <p style={{color: "black" }}>50% of all Kids's Fashion</p>
              <h3 style={{ color: "black", fontSize: "50px" }}>Kids Fashion</h3>
              <Button variant="outline-danger" className={style.button}>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ display: "flex", justifyContent: "center" }}>
            <Image src={slider2} />
            <Carousel.Caption>
              <p style={{ color: "black" }}>50% of all Men's Fashion</p>
              <h3 style={{ color: "black", fontSize: "50px" }}>Men Fashion</h3>
              <Button variant="outline-danger" className={style.button}>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={style.card}>
          <Image className={style.image} src={shop1} />

          <div style={{ position: "absolute" }}>
            <p>Super Sales</p>
            <h2>New Collection</h2>
            <Button variant="danger">Shop Now</Button>
          </div>
        </div>
        <div className={style.card}>
          <Image style={{ width: "100%", height: "100%" }} src={shop2} />

          <div style={{ position: "absolute" }}>
            <p>Super Sales</p>
            <h2>New Collection</h2>
            <Button variant="danger">Shop Now</Button>
          </div>
        </div>
      </Container>

      <div className="container mt-5">
        <h2 className="text-center">Exclusive Products </h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={slider1} />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={slider2} />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={slider3} />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
