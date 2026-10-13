import SectionHeader from './SectionHeader.jsx';
import TeamStage from './TeamStage.jsx';

export default function Team() {
  return (
    <section className="team section" id="team">
      <SectionHeader
        meta="07 / ITSA TEAM"
        title={
          <>
            MEET THE
            <br />
            ITSA <em>TEAM.</em>
          </>
        }
      >
        The students who plan, build and run everything ITSA does. Drag the ring or use the arrow keys.
      </SectionHeader>

      <TeamStage />
    </section>
  );
}
