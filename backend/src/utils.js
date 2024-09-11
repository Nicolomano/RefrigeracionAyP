import multer from "multer";
import {fileURLToPath} from "url";
import {dirname} from "path";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import passport from "passport";
import { faker } from "@faker-js/faker";
import path from "path";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (user, password)=>{
    console.log(`Datos a validar: user-password: ${user.password}, password: ${password}`);
    return bcrypt.compareSync(password,user.password)
}

export const PRIVATE_KEY = 'BackendProyectSecretKeyJWT'

export const generateJWToken = (user)=>{
    return jwt.sign({user},PRIVATE_KEY,{expiresIn:'1000s'})
}

export const authToken =(req,res,next)=>{
    const authHeader = req.headers.authorization;
    console.log('Token present in header auth');
    console.log(authHeader);

    if(!authHeader){
        return res.status(401).send({error:'User not authenticated or missing token'})
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token,PRIVATE_KEY,(error,credentials)=>{
        if(error) return res.status(403).send({error:'Token invalid, Unauthorized!'})
        req.user= credentials.user
        console.log('Se extrae la informacion del token: ');
        console.log(req.user);
        next()
    })

}

export const passportCall = (strategy)=>{
    return async (req, res, next) =>{
        console.log('Entrando a llamar strategy: ');
        console.log(strategy);
        passport.authenticate(strategy, function(err,user,info){
            if(err) return next(err)
            if(!user) {
                return res.status(401).send({error: info.messages? info.messages: info.toString()})
            }
            console.log('Usuario obtenido del strategy: ');
            console.log(user);
            req.user = user
            next()
        })(req,res,next)
    }
}


export const authorization = (...allowedRoles)=>{
    return (req,res,next)=> {

        const user = req.user
        console.log(user);
        if(!user) return res.status(401).send('Unauthorized: User not found in JWT')

        if(!allowedRoles.includes(user.role.toUpperCase())){
            console.log(user.role);
            return res.status(403).send('Forbidden: El usuario no tiene permisos con este rol')

        }
        next()
    }
}

export const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
}

export default __dirname


//fake data


export const fakeProducts = () =>{
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnail: faker.image.avatar(),
        code: faker.number.hex(),
        stock: faker.number.int({min:1, max:100})
    }
}

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,'/public/assets'))
    },
    filename: function(req, file, cb){
        const relativePath= `/${file.originalname}`
        cb(null, relativePath)
    }
})

export const upload = multer({storage})