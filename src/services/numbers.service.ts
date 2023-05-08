import axios from "./axios"

export interface INumber {

    numberOne: string;
    numberTwo: string;
    numberThree: string;

}

export class Numbers {

    static getNumberPaginate = async (page: number, limit: number, search: string) => {

        return await axios.get(`/numbers?limit=${limit}&page=${page}&search=${search}`)
    }

    static setNumber = async (data: INumber) => {
        
            return await axios.post('/numbers', data)
       

    }

}
