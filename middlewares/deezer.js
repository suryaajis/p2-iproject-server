const axios = require('axios')

const deezer = axios.create({
  baseURL: "https://api.deezer.com"
})

const findMusic = async (req, res, next) => {
  try {
    const { q } = req.query

    if (!q || !q.trim()) throw { name: "InvalidQuery" }

    const response = await deezer({
      url: "/search",
      method: "GET",
      params: {
        q: `${q}`,
        limit: 8
      }
    })

    const songs = (response.data.data || []).map(el => ({
      id: el.id,
      title: el.title,
      artist: el.artist ? el.artist.name : '',
      cover: el.album ? el.album.cover_medium : '',
      preview: el.preview,
      link: el.link,
      duration: el.duration,
      widget: `https://widget.deezer.com/widget/dark/track/${el.id}`
    }))
    req.music = { data: songs, total: songs.length }

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = findMusic