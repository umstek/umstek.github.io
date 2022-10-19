import Tile from './GithubProjectTile';

function ProjectsList({ projects }: { projects: Record<string, any>[] }) {
  return (
    <section>
      <ul className="space-y-8 mt-12">
        {projects.map((project) => (
          <li key={project.url}>
            <Tile project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsList;
