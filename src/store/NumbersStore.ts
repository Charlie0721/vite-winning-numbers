import { defineStore } from 'pinia'
import { INumber, Numbers } from '../services/numbers.service'

class NumberResponse {
    public lotteryWinningNumber: string;
    public finalNumber: string;
    public combinationOne: string;
    public combinationTwo: string;
    constructor(
        lotteryWinningNumber: string,
        finalNumber: string,
        combinationOne: string,
        combinationTwo: string
    ) {
        this.lotteryWinningNumber = lotteryWinningNumber;
        this.finalNumber = finalNumber;
        this.combinationOne = combinationOne;
        this.combinationTwo = combinationTwo;
    }
}
export const useNumberStore = defineStore('numberStore', {

    state: () => {
        return {

            numbers: [] as any,
            setNumber: {} as INumber,
            limit: 10 as number,
            page: 1 as number,
            search: "" as string,
            numberResponse: {} as NumberResponse,
        }
    },
    actions: {

        async sendData(number: INumber) {
            try {

                const response = await Numbers.setNumber(number)
                this.numberResponse.lotteryWinningNumber =
                    response.data.lotteryWinningNumber;
                this.numberResponse.combinationOne = response.data.combinationOne;
                console.log(this.numberResponse.combinationOne)
                this.numberResponse.combinationTwo = response.data.combinationTwo;
                this.numberResponse.finalNumber = response.data.finalNumber;
            } catch (error) {
                console.log(error)
            }
        },

        async getData(page: number, limit: number, search: string) {
            try {

                page = this.page
                limit = this.limit
                search = this.search
                const response = await Numbers.getNumberPaginate(page, limit, search)

                return this.numbers = response.data.data

            } catch (error) {
                console.log(error)

            }
        }
    }
})