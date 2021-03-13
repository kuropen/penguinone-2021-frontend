export default (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  next()
}
