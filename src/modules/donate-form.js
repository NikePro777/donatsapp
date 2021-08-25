import {Settings as valuta} from '../core/constants/settings'
import {startAmount} from '../modules/app'

export class DonateForm{
    constructor(totalAmount){
        this.totalAmount = totalAmount
    }
    updateTotalAmount(newAmount=0){
        const total__amount = document.querySelector('#total-amount')
        total__amount.textContent = `${newAmount} ${valuta.currency}`
    }

    render(){
        const form = document.createElement('form')
        form.className = 'donate-form'

        const h1 = document.createElement('h1')
        h1.id = 'total-amount'
        h1.textContent = `${startAmount} ${valuta.currency}`

        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = 'Введите сумму в $'

        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '0'
        input.required = ''
        label.append(input)

        const button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.type = 'submit'
        button.textContent = 'Задонатить'

        form.append(h1,label,button)
        return form
    }
    
}