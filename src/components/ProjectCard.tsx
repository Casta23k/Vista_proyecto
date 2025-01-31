interface ProjectCardProps {
  name: string;
  status: string;
  image: string;
}

const ProjectCard = ({ name, status, image }: ProjectCardProps) => {
  const statusColor =
    status === "En curso"
      ? "badge bg-warning text-dark"
      : status === "Pendiente"
      ? "badge bg-danger text-white"
      : "badge bg-success text-white";

  return (
    <div className="card shadow-sm rounded border-0 p-2 bg-card small-card">
      {/* Imagen */}
      <img
        src={image}
        alt={name}
        className="card-img-top rounded"
        style={{ height: "140px", objectFit: "cover" }} // Reducimos la altura
        onError={(e) => (e.currentTarget.style.display = "none")}
      />

      {/* Contenido de la tarjeta */}
      <div className="card-body p-2">
        <h6 className="fw-bold text-dark">{name}</h6>
        <p className="card-text text-muted small">Descripción breve del proyecto.</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className={statusColor}>{status}</span>
          <button className="btn btn-outline-dark btn-sm">Editar</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
