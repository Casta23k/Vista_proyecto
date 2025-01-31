import ProjectCard from "./components/ProjectCard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import project1 from "./assets/images/project1.jpeg";
import project2 from "./assets/images/project2.jpeg";
import project3 from "./assets/images/project3.jpeg";
import project4 from "./assets/images/project4.jpeg";

const projects = [
  { name: "Collection Deal", status: "En curso", image: project1 },
  { name: "Food App", status: "Pendiente", image: project2 },
  { name: "Venue Detail", status: "Completado", image: project3 },
  { name: "Media Channel", status: "Pendiente", image: project4 },
];

function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        

        <div className="container">
          <h2 className="fw-bold mb-3">Proyectos</h2>

          {/* Filtros */}
          <div className="mb-3 d-flex gap-2">
            <button className="btn btn-outline-dark">Equipos</button>
            <button className="btn btn-outline-dark">Estado</button>
            <button className="btn btn-outline-dark">Fecha</button>
          </div>

          {/* Tarjetas de proyectos */}
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4">
                <ProjectCard name={project.name} status={project.status} image={project.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
