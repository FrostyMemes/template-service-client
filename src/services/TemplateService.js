import api from "../http";

const serviceUrl = "template"

export async function getAllTemplates() {
    return api.get(`${serviceUrl}/getall`)
}

export async function getTemplateById(id) {
    return api.get(`${serviceUrl}/${id}`)
}

export async function updateTemplate(template){
    return api.put(`${serviceUrl}/${template.Id}`, template)
}

export async function saveTemplate(template) {
    return api.post(serviceUrl, template)
}

export async function deleteTemplate(id) {
    return api.delete(`${serviceUrl}/${id}`)
}




