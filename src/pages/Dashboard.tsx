import ProjectCard from "../components/ProjectCard";
import "../styles/Dashboard.css"
const projects = [
  { name: "Collection Deal", status: "En curso", image: "/images/project1.png" },
  { name: "Food App", status: "Pendiente", image: "/images/project2.png" },
  { name: "Venue Detail", status: "Completado", image: "/images/project3.png" },
  { name: "Media Channel", status: "Pendiente", image: "/images/project4.png" },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Proyectos</h2>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
