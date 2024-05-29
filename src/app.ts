import * as http from "node:http"
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes"
import { ContentType } from "./utils/content-type"
import { HttpMethod } from "./utils/http-methods"
import { StatusCode } from "./utils/status-code"

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const [baseUrl,] = req.url?.split("?") as string[]

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) { await getListEpisodes(req, res) }
  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) { await getFilterEpisodes(req, res) }

  res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON, })
  res.write(JSON.stringify({ message: "Seja Bem Vindo a API de Podcast. Insira uma rota na URL para Listar os seus favoritos." }))
  res.end()


}