

export default function navBar(){
    return(
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" role="button">
              <span className="sr-only">Toggle Navigation</span>
              
              <span className="icon-bar"></span>
              
              <span className="icon-bar"></span>
              
              <span className="icon-bar"></span>
            </button>
  
            <a href="#" className="navbar-brand">Devero</a>
          </div>
  
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right js-nav">
              <li><a href="#home">Home</a></li>
  
              <li><a href="#about">About</a></li>
  
              <li><a href="#services">Services</a></li>
  
              <li><a href="#folio">Folio</a></li>
  
              <li><a href="#testimonials">Testimonials</a></li>
  
              <li><a href="#contact">Contact</a></li>
  
              <li><a href="" target="_blank">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>

    )
}