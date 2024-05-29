import { PodCastTransferModel } from "../models/transfer-podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<PodCastTransferModel> => {
  let responseFormat: PodCastTransferModel = {
    statusCode: StatusCode.NoContent, body: []
  }

  const data = await repositoryPodcast()
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data
  }

  return responseFormat
}