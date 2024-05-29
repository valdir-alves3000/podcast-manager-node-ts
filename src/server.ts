import * as http from "node:http"
import { app } from "./app"

const server = http.createServer(app)

const PORT = process.env.PORT || 3333
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

