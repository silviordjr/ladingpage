import Requests from "../types/Requests";
import connection from "./connection";

export default class RequestsData {
    async create (request: Requests){
       
        await connection ('landing_requests')
            .insert({
                id: request.getId(),
                name: request.getName(),
                email: request.getEmail(),
                phone: request.getPhone(),
                message: request.getMessage(),
                date: request.getDate()
            })
    }
}