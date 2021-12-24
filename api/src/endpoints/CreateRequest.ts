import { Request, Response } from "express"
import RequestsData from '../data/RequestsData'
import FormatDate from '../services/FormatDate'
import { IdGenerator } from '../services/IdGenerator'
import Requests from '../types/Requests'

export default async function (req: Request, res: Response): Promise <void> {
    try {
        const {name, phone, email, message} = req.body
        const id = new IdGenerator().generateId()
        const date = new FormatDate().create()

        const newRequest = new Requests(id, name, date, message, email, phone)

        const requestDB = new RequestsData()
        await requestDB.create(newRequest)

        res.status(200).send('Solicitação enviada!')
        
    } catch (error: any) {
        res.status(500).send(error.sqlmessage || error.message)
    }
}