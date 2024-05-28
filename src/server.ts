import * as http from "node:http"
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

  const [baseUrl,] = req.url?.split("?") as string[]

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) { await getListEpisodes(req, res) }
  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) { await getFilterEpisodes(req, res) }
})

const PORT = process.env.PORT || 3333
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

