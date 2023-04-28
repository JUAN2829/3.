import { STATES } from "./states"

export default class clsContact {
    name = ""
    email = ''
    state = ''

    constructor(name, email, state){
        this.name = name
        this.email = email
        this.state =  state
    }
}