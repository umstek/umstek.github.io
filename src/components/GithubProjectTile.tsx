import { GoRepoForked, GoStar, GoMirror, GoLock, GoArchive, GoRepo } from 'react-icons/go';

import DateTime from './DateTime';
import Tag from './Tag';

import { GITHUB } from '~config';

function GithubProjectTile({ project }: { project: Record<string, any> }) {
  return (
    <div className="flex flex-col">
      <div>
        <small>
          <DateTime date={project.createdAt} />
        </small>
      </div>
      <div>
        <a href={project.url}>{project.nameWithOwner}</a>
      </div>
      <div>
        <small>{project.description}</small>
      </div>
      <div>
        <small className="flex items-center">
          {project.stargazerCount > 0 && (
            <span className="flex items-center pr-2">
              <GoStar /> {project.stargazerCount}
            </span>
          )}
          {project.forkCount > 0 && (
            <span className="flex items-center pr-2">
              <GoRepoForked /> {project.forkCount}
            </span>
          )}
          {project.isFork && <GoRepoForked />}
          {project.isMirror && <GoMirror />}
          {project.isPrivate && <GoLock />}
          {project.isArchived && <GoArchive />}
          {project.isTemplate && <GoRepo />}
        </small>
      </div>
      <div>
        <small>
          {project.repositoryTopics.nodes.map(({ topic: { name: tag } }: any) => (
            <Tag
              key={tag}
              className="inline mr-4"
              anchorClassName="border-0 font-normal text-inherit hover:text-rose-600"
              href={encodeURI(`https://github.com/search?q=user:${GITHUB}+topic:${tag}`)}
              openNewTab
            >
              {tag}
            </Tag>
          ))}
        </small>
      </div>
    </div>
  );
}

export default GithubProjectTile;
