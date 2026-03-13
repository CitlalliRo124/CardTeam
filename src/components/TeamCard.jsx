function TeamCard({ person }) {
  return (
    <div className="card">
      <img src={person.image} alt={person.name} />
      <h3>{person.name}</h3>
      <p>{person.role}</p>
    </div>
  );
}

export default TeamCard;