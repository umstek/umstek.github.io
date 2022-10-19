export default `query GetGitHubRepositoryInfo($query: String!) {
  search(type: REPOSITORY, query: $query, first: 100) {
    nodes {
      ... on Repository {
        description
        isFork
        forkCount
        stargazerCount
        homepageUrl
        isArchived
        isMirror
        isPrivate
        isTemplate
        repositoryTopics(first: 10) {
          totalCount
          nodes {
            topic {
              name
            }
          }
        }
        languages(first: 5) {
          totalCount
          nodes {
            name
            color
          }
        }
        licenseInfo {
          name
        }
        nameWithOwner
        createdAt
        url
      }
    }
  }
}
`;
