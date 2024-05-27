# Podcast Manager

### Descrição

Um app ao estilo netflix onde possa centralizar diferentes episódios de podcast separados por categoria

### Domínio

Podecast feitos em vídeo

### Features

- Listar episódios de podecast em sessões de categorias
  - [ saúde, fitness, mentalidade, humor ]
- Filtrar episódios por nome de podcast

## Como

### Feature:

Listar os episódios podcast em sessões de categorias

### Como implementar:

Deve Retornar em uma api Rest (`json`) o nome do podcast, nome do episódio, imagem de capa, link

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```
