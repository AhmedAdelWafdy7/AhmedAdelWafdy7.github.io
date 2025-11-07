import { useState } from 'react';
import JourneyNav from '../JourneyNav';

export default function JourneyNavExample() {
  const [activeSection, setActiveSection] = useState('blueprint');
  
  const sections = [
    { id: 'blueprint', title: 'The Blueprint', weeks: 'Weeks 1-3' },
    { id: 'bricks', title: 'First Bricks & Quicksand', weeks: 'Weeks 4-15' },
    { id: 'steam', title: 'The Great Steam Saga', weeks: 'Weeks 16-20' },
    { id: 'battles', title: 'The Final Battles', weeks: 'Weeks 21-22' }
  ];

  return (
    <div className="w-64 p-4 bg-card rounded-md border">
      <JourneyNav
        sections={sections}
        activeSection={activeSection}
        onSectionClick={(id) => {
          console.log('Navigate to:', id);
          setActiveSection(id);
        }}
      />
    </div>
  );
}