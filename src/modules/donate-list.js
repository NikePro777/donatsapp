import {Settings as valuta} from '../core/constants/settings'
import * as settigFunction from '../core/utils/index'
export class DonateList{
    constructor(donates){

    }

    updateDonates(updatedDonates){
        const donat = document.querySelector('.donates-container__donates')
        donat.innerHTML = ''
       
        updatedDonates.forEach(element =>{
            const donates__item = document.createElement('div')
            donates__item.className = 'donate-item'
            donates__item.innerHTML = `${element.date} - <b> ${element.amount} </b> ${valuta.currency}`
            donat.append(donates__item)
        })

    }

    render(donates){
        const container = document.createElement('div')
        container.className = 'donates-container'

        const h2 = document.createElement('h2')
        h2.className = 'donates-container__title'
        h2.textContent = 'Список донатов'
        container.append(h2)
        const container__donates = document.createElement('div')
        container__donates.className = 'donates-container__donates'
        

        donates.forEach(element =>{
            const donates__item = document.createElement('div')
            donates__item.className = 'donate-item'
            element.date = settigFunction.getFormattedTime(element.date)
            donates__item.innerHTML = `${element.date} - <b> ${element.amount} </b> ${valuta.currency}`
            container__donates.append(donates__item)
        })

        container.append(container__donates)
        return container
    }
}

//${valuta.currency} 