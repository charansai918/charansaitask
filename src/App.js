import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function App() {
  return (
    <div className="App">
      <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
          <img id="logo"src='./images/img12.png'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Product">Product</Nav.Link>
            <Nav.Link href="#Recipes">Recipes</Nav.Link>
            <Nav.Link href="#Career">Career</Nav.Link>
            <Nav.Link href="#Media">Media</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
    <div>
      <img className='img11' src='./images/img11.png' width="200"></img>
    </div>
    <div>
    <img className='img1' src='./images/img1.png' width="200"></img>
    </div>
    <div>
    <img className='img2' src='./images/img2.png' width="200"></img>
    </div>
    <div className='three'>
    <img className='img3' src='./images/img3.png' width="200"></img>
    <img className='img4' src='./images/img4.png' width="200"></img>
    <img className='img5' src='./images/img5.png' width="200"></img>
    </div>
    <div>
      <h3 className='heading'>your products</h3>
    </div>
    <div className='four'>
    <img className='img6' src='./images/img6.png' width="1000"></img>
    
    <img className='img7' src='./images/img7.png' width="1000"></img>
    <img className='img8' src='./images/img8.png' width="1000"></img>
    </div>
    <div >
      <h2 className='headings1'>ONLY VEGETARIAN</h2>
      <p id='p1' >This easy and healthy vegetarian recipe is also vegan and gluten-free, so it works for a variety of diets. But it tastes like an elevated version of broccoli cheese soup from a can (you know the one). Why is finding healthy and easy vegetarian lunch recipes so hard</p>
      </div>
      <div className='headings2'>
      <h2 >GRAB & GO</h2>
      <p id='p2'>Recharge your rush hour with Grab & Go foods, enjoy a variety of delicious ready-to-eat sandwiches that are easy to eat also prices are friendly with your pocket. Not only an ordinary coffee shop we are, as our goal is to be a space where people spend their time together, either working, reading, meeting, or gathering.</p>
      </div>
      <div >
      <h2 className='headings3' >FRESH SCHOOL TACOS</h2>
      <p id='p3'>When many Americans think of tacos, visions of spiced ground beef tucked inside a crispy shell with lettuce, tomatoes and cheese may come to mind. You know, the kind of stuff you find at Tex-Mex restaurants and Taco Bell. But break out of that hard shell by trying these taco recipes, which will keep your taco Tuesdays exciting for weeks to come.</p>
    </div>
    <div>
     <h2 className='pastastories'>pasta stories</h2> 
    </div>
    <div>
      <img id='pastaimage' src='./images/img9.png'></img>
    </div>
    <div>
      <h2 className='pastaheading'>pasta videos</h2>
    </div>
    <div>
      <img id="pastavideo"src='./images/img10.png'></img>
    </div>
    <div>
      <form>
        <label>subscribe for Newsletter</label>
        <input type='text' placeholder='Enter email'></input>
        <button type='button'>subscribe</button>
      </form>
    </div>
    </div>
  );
}

export default App;
