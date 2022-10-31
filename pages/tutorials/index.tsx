import { useRouter } from "next/router";
import ProfileCard from "../../components/Common/ProfileCard";

const data = [
  {
    name: "Luis Cruz",
    photo: '/luis-profile.png',
    route: "luis-tutorial"
  },
  {
    name: "Omar Rosales",
    photo: '/omar-profile.png',
    route: "omar-tutorial"
  },
  {
    name: "Allison Barrezueta",
    photo: '/allison-profile.png',
    route: "allison-tutorial"
  },
  {
    name: "Alix Ferrin",
    photo: '/alix-profile.png',
    route: "alix-tutorial"
  }
];

function TutorialPage() {
  const router = useRouter()
  return (
    <div style={{}}>
        <div style={{ marginLeft: '10%', marginRight: '10%' }} >
          {data.map((profile) => {
            return (
              <ProfileCard name={profile.name} photo={profile.photo} route={profile.route}  />
            );        
          })}
        </div>
        
        
        
    </div>
  );
}

export default TutorialPage