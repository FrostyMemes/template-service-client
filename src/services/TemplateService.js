import api from "../http";

const serviceUrl = "template"

export default class TemplateService
{
    static async getAllTemplates() {
        return api.get(`${serviceUrl}/get-all`)
    }

    static async getTemplateById(id) {
        return api.get(`${serviceUrl}/${id}`)
    }

    static async updateTemplate(template){
        return api.put(`${serviceUrl}/${template.Id}`, template)
    }

    static async saveTemplate(template) {
        return api.post(serviceUrl, template)
    }

    static async deleteTemplate(id) {
        return api.delete(`${serviceUrl}/${id}`)
    }
}



