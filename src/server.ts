import * as http from "node:http"
import { getListEpisodes } from './controllers/podcasts-controller'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method === "GET") { await getListEpisodes(req, res) }
})

const PORT = process.env.PORT || 3333
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

