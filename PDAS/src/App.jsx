import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>


            <ProfileCard title="Alexa" handle= "@alexa" image={AlexaImage} />
            <ProfileCard title="Siri" handle= "@siri"  image={SiriImage} />
            <ProfileCard title="Cortana" handle= "@cortana" image={CortanaImage} />
        </div>
    )
}

export default App;