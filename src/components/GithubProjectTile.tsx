import { GoRepoForked, GoStar, GoMirror, GoLock, GoArchive, GoRepo } from 'react-icons/go';

import { GITHUB } from '~config';

import DateTime from './DateTime';
import Tag from './Tag';
import ProjectInfoItem from './ProjectInfoItem';

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
          <ProjectInfoItem visible={project.stargazerCount > 0} icon={<GoStar />}>
            {project.stargazerCount}
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.forkCount > 0} icon={<GoRepoForked />}>
            {project.forkCount}
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.isFork} icon={<GoRepoForked />}>
            Fork
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.isMirror} icon={<GoMirror />}>
            Mirror
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.isPrivate} icon={<GoLock />}>
            Private
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.isArchived} icon={<GoArchive />}>
            Archived
          </ProjectInfoItem>
          <ProjectInfoItem visible={project.isTemplate} icon={<GoRepo />}>
            Template
          </ProjectInfoItem>
        </small>
      </div>
      <div>
        <small className='flex'>
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
      <div className="w-full flex justify-items-stretch h-1 mt-4 text-xs">
        {project?.languages?.edges?.map(({ size, node: { name, color } }: any) => (
          <span
            key={name}
            title={name}
            style={{
              backgroundColor: color,
              width: `${((size * 100) / (project?.languages?.totalSize || 1)).toFixed(2)}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default GithubProjectTile;
