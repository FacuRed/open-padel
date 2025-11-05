import ClubCard from "../molecules/ClubCard";
import club1 from "../../assets/img/club1.jpg";
import club2 from "../../assets/img/club2.jpg";
import club3 from "../../assets/img/club3.jpg";
import club4 from "../../assets/img/club4.jpg";
import "./ClubList.scss";

const ClubList = () => {
  const clubs = [
    { id: 1, name: "BOX Padel", image: club1 },
    { id: 2, name: "Smash Padel", image: club2 },
    { id: 3, name: "Mundo Padel", image: club3 },
    { id: 4, name: "Mercedes Padel", image: club4 },
  ];

  return (
    <div className="club-list">
      {clubs.map((club) => (
        <ClubCard key={club.id} name={club.name} image={club.image} />
      ))}
    </div>
  );
};

export default ClubList;
