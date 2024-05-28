import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (url: string | undefined) => {
  const [, podcastName] = url?.split("?p=") as string[]
  const data = await repositoryPodcast(podcastName)

  return data
}