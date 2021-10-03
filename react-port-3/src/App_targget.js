import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        
        <Titlename/>
        <Navigation/>
         <Socialmedialinks/>
         <Modulelist/>
         <Projectlist/>
          <Contactlinks/>
         

        <p>Here are some web topics
          text (copy)
images
video
animation
audio (sound)
</p>

<p>

  logo in header; when users click the logo in the header, it takes them to the starting point of the journey. It may be a home page or up to the start of the page if it’s a single-page website
  think of logo animation on hover: motion will add life and will be the prompt that the element is interactive

  photos;banner of photos of favorites
  (spider web-----Image by <a href="https://pixabay.com/users/simedblack-5480894/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3876081">Med Ahabchane</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3876081">Pixabay</a>)
</p>
      </header>
    </div>
  );
}



function Titlename () {

  return (
    <div>
      <a href="#portfolio">Ursula  Wilborn</a>
    </div>
  );
}


function Navigation () {

  return (
    <nav>
      <ul>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#github">Github</a></li>
        <li><a href="#homeworks">Modules</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Socialmedialinks () {

  return (
    <section>
      <ul><li><a href="https://www.facebook.com/">facebook</a></li>
           <li><a href="https://www.twitter.com/">twitter</a></li>
           <li><a href="www.linkedin.com/in/ursula-w-2610ba186" >linkedin</a></li>
           <li><a href="https://www.youtube.com/" >youtube</a></li>
           <li><a href="https://www.instagram.com/" >instagram</a></li>
      </ul>
   </section>
  );
}

function Modulelist () {

  return (
    <section>
      <Module1/>
      <Module2/>
      <Module3/>
      <Module4/>
      <Module5/>
      <Module6/>
      <Module7/>
      <Module8/>
      <Module9/>
      <Module10/>
      <Module11/>
      <Module12/>
      <Module13/>
         
    </section>
  );
}

// Module1
function Module1 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://uwilborn.github.io/Horiseon-Improved-Accessibility/" target="_blank">
    <img class="img-fluid" src="assets/Code Refactor.png" alt="Refactoring Code JS" />
    </a>
);

const Title = () => (<h1>CODE REFACTOR</h1>);

const Description = () => (<p></p>);

// Module2
function Module2 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://uwilborn.github.io/Password-Generator/" target="_blank">
    <img class="img-fluid" src="assets/PasswordGeneratorImage.jpg" alt="Lock Picture" />
    </a>
);

const Title = () => (<h1>PASSWORD GENERATOR</h1>);

const Description = () => (<p></p>);

// Module3
function Module3 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://uwilborn.github.io/Workday-Schedule-App/" target="_blank">
    <img class="img-fluid" src="assets/Planner.jpg" alt="Lady on a Clock" />
    </a>
);

const Title = () => (<h1>DAY PLANNER</h1>);

const Description = () => (<p></p>);

// Module4
function Module4 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://uwilborn.github.io/Challenge-Coding-Quiz/" target="_blank">
    <img class="img-fluid" src="assets/codequizimages.png" alt="Red and Black Code Quiz Sign" />
    </a>
);

const Title = () => (<h1>CODE QUIZ</h1>);

const Description = () => (<p></p>);

// Module5
function Module5 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://uwilborn.github.io/Funky-Weather-Dashboard/" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>WEATHER DASHBOARD</h1>);

const Description = () => (<p></p>);

// Module6
function Module6 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://github.com/uwilborn/RightOn-README-Generator" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>RightOn-README-Generator</h1>);

const Description = () => (<p></p>);

// Module7
function Module7 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://github.com/uwilborn/Dynamic-Team-Generator.git" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>Dynamic-Team-Generator</h1>);

const Description = () => (<p></p>);

// Module8
function Module8 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://starnotetaker.herokuapp.com/" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>Star-Note-Taker</h1>);

const Description = () => (<p></p>);

// Module9
function Module9 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://github.com/uwilborn/QA-Employee-Tracker" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>QA-Employee-Tracker</h1>);

const Description = () => (<p></p>);

// Module10
function Module10 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://github.com/uwilborn/Cinnamon-Commerce" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>Cinnamon-Commerce</h1>);

const Description = () => (<p></p>);

// Module11
function Module9 () {return(<article><Imagelink/><Title/><Description/></article>);}

const Imagelink = () =>(
  <a href="https://github.com/uwilborn/QA-Employee-Tracker" target="_blank">
    <img class="img-fluid" src="assets/weatherimages.jpg" alt="Blue Weather Image" />
    </a>
);

const Title = () => (<h1>Clumsy-Developer-Blog</h1>);

const Description = () => (<p></p>);


// End of Modules

// Beginning of Modules

function Projectlist () {return (<section><Project1/><Project2/><Project3/></section>);}




function Contactlinks () {

return (
    <nav>
      <ul>
        <li><a href="#portfolio">Phone</a></li>
        <li><a href="#about">Email</a></li>
       
      </ul>
    </nav>
  );
}

export default App;
