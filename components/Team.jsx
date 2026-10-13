import SectionHeader from './SectionHeader.jsx';
import TeamStage from './TeamStage.jsx';

export default function Team() {
  return (
    <section className="team section" id="team">
      <SectionHeader
        meta="05 / ITSA TEAM"
        title={
          <>
            ITSA <em>TEAM.</em>
          </>
        }
      >
        Core leadership and division teams. Drag the 3D ring to explore, or click any card to inspect their badge and team members.
      </SectionHeader>

      <TeamStage />
    </section>
  );
}
