import express,{Router, Request, Response} from 'express'

// despues de los : tipo de dato de la variable
const router: Router= Router()

//1.Definir las rutas
//Usualmente las rtas corresponden a acciones CRUD

router.get(
    '/mensaje',
    (req:Request, res:Response)=>{

        res.send('Hoy es un día fabuloso!!')
    }
)

router.get(
    '/despedida',
    (req:Request, res:Response)=>{

        res.send('Hasta pronto!!')
    }
)

router.get(
    '/aleatorio',
    (req:Request, res:Response)=>{

        const min = 1;
        const max = 10;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        res.send(randomNumber.toString())
    }
)

export default router