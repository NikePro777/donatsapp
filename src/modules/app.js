import {DonateForm} from './donate-form'
import {DonateList} from './donate-list'
import * as settigFunction from '../core/utils/index'

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ]

const mockDonatesAmount = []
mockDonates.forEach((num)=>{
    mockDonatesAmount.push(num.amount)
})
export const startAmount = settigFunction.calculateSumOfNumbers(mockDonatesAmount)

export default class App {
    constructor(){
        this.state = {
            donates: mockDonates,
            totalAmount: startAmount
        }
    }

    

    createNewDonate(newDonate){
        this.state.donates.push(newDonate)
        this.state.totalAmount = +this.state.totalAmount + +newDonate.amount
        const donat_list = new DonateList
        donat_list.updateDonates(this.state.donates)

        const donat_form = new DonateForm(this.state.totalAmount)
        donat_form.updateTotalAmount(this.state.totalAmount)

        const clearForm = document.querySelector('.donate-form__donate-input')
        clearForm.value = ''
    }

    run(){
        // settigFunction.getFormattedTime(new Date)
        

        document.body.append('Hello World')

        const donat_form = new DonateForm(this.state.totalAmount)
        document.body.append(donat_form.render())

        const donat_list = new DonateList(this.state.donates) //*

        
        document.body.append(donat_list.render(this.state.donates))
        

        this.donateForm = new DonateForm(this.state.totalAmount,this.createNewDonate.bind(this))

        const submit = document.querySelector('.donate-form')
        console.log(submit);
        submit.addEventListener(('submit'), event => {
            event.preventDefault()
            const {target} = event
            const newValue = {}
            newValue.amount = target.amount.value
            newValue.date = settigFunction.getFormattedTime(new Date)
            // return newValue
            this.createNewDonate(newValue)
            // const input
        })
        
    }
}


   


   