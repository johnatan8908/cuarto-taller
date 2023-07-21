import app from './app'

//1. Iniciar un servidor para responder a preticiones REST

const puerto=3000

app.listen(
    puerto,
    ()=>{
        console.log(`El servidor está escuando en el puerto ${3000}`)
    }
)