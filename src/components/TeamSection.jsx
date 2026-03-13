import TeamCard from "./TeamCard";

const team = [
  {
    name: "Bill Mahoney",
    role: "PRODUCT OWNER",
    image: "/images/photo1.png"
  },
  {
    name: "Saba Cabrera",
    role: "ART DIRECTOR",
    image: "/images/photo2.png"
  },
  {
    name: "Shae Le",
    role: "TECH LEAD",
    image: "/images/photo3.png"
  },
  {
    name: "Skylar Lu",
    role: "UX DESIGNER",
    image: "/images/photo4.png"
  },
  {
    name: "Griff Richards",
    role: "DEVELOPER",
    image: "/images/photo5.png"
  },
  {
    name: "Stan John",
    role: "DEVELOPER",
    image: "/images/photo6.png"
  }
];

function TeamSection() {
  return (
    <section className="team">

      <div className="team-header"></div>
      <h1>The creative crew</h1>
       <div className="team-description">
         <h3>Who we are</h3>
      
      <p>
        We are team of creatively diverse, driven, innovative individuals
        working in various locations from the world.
      </p>
       </div>
      <div className="team-grid">
        {team.map((person, index) => (
          <TeamCard key={index} person={person} />
        ))}
      </div>
       
    </section>
  );
}

export default TeamSection;