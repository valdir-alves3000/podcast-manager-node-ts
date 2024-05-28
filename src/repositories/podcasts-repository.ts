import fs from "node:fs"
import path from "node:path"
import { PodcastModel } from "../models/podcat-model"



const pathData = path.join(__dirname, "../repositories/podcast.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const language = "utf-8"
  const rawData = fs.readFileSync(pathData, language)
  let jsonFile = JSON.parse(rawData)

  if (podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
  }

  return jsonFile
}