import $ from "jquery"

const fieldsSeparator = '|&|'
const keySeparator = '|=|'

const bodyGetters = {
    'template-input-element' : getInputBody,
    'template-textarea-element' : getTextAreaBody,
    'template-radio-element' : getRadioBody,
    'template-checkbox-element' : getCheckBody,
}

export default function extractTemplateData(elements) {

    let templateValues = ''

    elements.each(function (elementNumber){
        const element = elements[elementNumber].children[0]
        const elementClass = element.className
        //templateValues += (bodyGetters[elementClass](element) + fieldsSeparator)
        console.log(bodyGetters[elementClass](element))
    })

    return {
        FieldsSeparator : fieldsSeparator,
        KeySeparator : keySeparator,
        TemplateValues : templateValues
    }
}

function getInputBody(element) {
    const key = element.children[0].innerText
    const value = element.children[1].value.trim()
    return `${key}${keySeparator}${value}`
}

function getTextAreaBody(element) {
    const key = element.children[0].innerText
    const value = element.children[1].value.trim()
    return `${key}${keySeparator}${value}`
}

function getRadioBody(element) {
    const key = element.children[0].innerText
    let value = '-'

    for (let i = 1; i != element.children.length; i++)
        if (element.children[i].children[0].checked) {
            value = element.children[i].children[1].innerText.trim()
            break
        }

    return `${key}${keySeparator}${value}`
}

function getCheckBody(element) {
    const separator = ', '
    const key = element.children[0].innerText
    let value = ''
    let valuesCount = 0

    for (let i = 1; i != element.children.length; i++)
        if (element.children[i].children[0].checked) {
            if (valuesCount != 0)
                value += separator

            value += element.children[i].children[1].innerText.trim()
            value++
        }

    if (valuesCount === 0)
        value = '-'

    return `${key}${keySeparator}${value}`
}