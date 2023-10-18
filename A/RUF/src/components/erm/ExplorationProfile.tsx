import SectionControlRoom from '@/sections/erm/SectionControlRoom';
import SectionGoals from '@/sections/erm/SectionGoals';
import SectionMetrics from '@/sections/erm/SectionMetrics';
import SectionMainTopics from '@/sections/erm/SectionMainTopics';
import SectionMainQuerySets from '@/sections/erm/SectionMainQuerySets';
import SectionMainCollectedResources from '@/sections/erm/SectionMainCollectedResources';
import SectionNotes from '@/sections/erm/SectionNotes';
import SectionFurther from '@/sections/erm/SectionFurther';

interface IExplorationProfile {
  title?: string;
  past_activity_10days?: Array<number>;
  num_of_hours?: number;
  num_of_days?: number;
  created_on?: Date;
  last_visited_on?: Date;
}
export default function ExplorationProfile({
  title = 'Hello world',
  past_activity_10days = [1, 2, 3, 4, 5, 6],
  num_of_hours = 24,
}: IExplorationProfile) {
  return (
    <div
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <SectionControlRoom />
      <SectionGoals />
      <SectionMetrics />
      <SectionMainTopics />
      <SectionMainQuerySets />
      <SectionMainCollectedResources />
      <SectionNotes />
      <SectionFurther />
    </div>
  );
}
