import { PodcastModel } from "./podcat-model";

export interface PodCastTransferModel {
  statusCode: number;
  body: PodcastModel[]
}