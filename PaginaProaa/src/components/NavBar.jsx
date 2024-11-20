import './NavBar.css'

const NavBar = () => {
    return(
    <nav class="navbar navbar-expand-lg">
      <div class="navbar-container container-fluid">
        <a class="navbar-brand" href="#">Logo Proa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">¿Quienes Somos?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Titulacion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acuerdos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Biblioteca</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
)
}
export default NavBar