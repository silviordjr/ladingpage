export default class Requests {
    constructor(
        private id: string,
        private name: string,
        private date: string,
        private message: string,
        private email: string,
        private phone: string,
        private adminId?: string | undefined,
        private response?: boolean
    ){}

    getId (){
        return this.id
    }

    getName(){
        return this.name
    }

    getDate  ()  {
        return this.date
    }

    getMessage  ()  {
        return this.message
    }

    getEmail  ()  {
        return this.email
    }

    getPhone  ()  {
        return this.phone
    }

    getAdminId  ()  {
        return this.adminId
    }

    getResponse  ()  {
        return this.response
    }
}