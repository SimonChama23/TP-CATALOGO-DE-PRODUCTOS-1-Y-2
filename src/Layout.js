import './App.css';
import { Link, Outlet } from 'react-router-dom';
import "./style.css"
import "./style2.css"

function Layout() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css' />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

      </head>
      <body>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><Link to='/' className='nav-link'>Home</Link></li>
              <li className="nav-item"><Link to='productos' className='nav-link'>Productos</Link></li>
              <li className="nav-item"><Link to='detalle' className='nav-link'>Detalle</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      </body>
    </>
  );
}

export default Layout;
