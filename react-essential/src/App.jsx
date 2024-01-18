import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';

function App() {
  function handleSelect(selectedButton){
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image ={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>  
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>  
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>    
          </menu>
          
        </section>
      </main>
    </div>
  );
}

export default App;
