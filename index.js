import express from 'express'
const app = express()
app.get('/', (req, res) => {

  res.send('Hello World - Luiz Carlos Aires de Macêdo')

})
app.get('/oi', (req, res) => {

  res.send('\olá Mundo !')

})
app.listen(3000, () => {

  console.log('Server is running on http://localhost:3000')

})