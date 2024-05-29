import { PodCastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (url: string | undefined): Promise<PodCastTransferModel> => {
  let responseFormat: PodCastTransferModel = {
    statusCode: StatusCode.NoContent, body: []
  }

  const [, podcastName] = url?.split("?podcastName=") as string[]

  if (!podcastName) {
    return responseFormat
  }

  const data = await repositoryPodcast(podcastName)

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data
  }

  return responseFormat
}