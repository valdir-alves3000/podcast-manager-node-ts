import { IncomingMessage, ServerResponse } from 'node:http';
import { PodCastTransferModel } from '../models/podcast-transfer-model';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { ContentType } from '../utils/content-type';

const HEADERS = {
  "Content-Type": ContentType.JSON,
}

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: PodCastTransferModel = await serviceListEpisodes()

  res.writeHead(content.statusCode, HEADERS);
  res.write(JSON.stringify(content.body))

  res.end()
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: PodCastTransferModel = await serviceFilterEpisodes(req.url)

  res.writeHead(content.statusCode, HEADERS);
  res.write(JSON.stringify(content.body))

  res.end()
}