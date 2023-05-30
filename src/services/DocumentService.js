import api from "../http";

const serviceUrl = "document"

export default class DocumentService {

    static async getAllDocuments(){
        return api.get(`${serviceUrl}/get-all`)
    }

    static async deleteDocument(id){
        return api.get(`${serviceUrl}/${id}`)
    }

    static async getTemplatedDocument(id, templateFields){
        return 1;
    }

    static async saveFile(file){
        const formData = new FormData();
        formData.append("document", file)
        return api.post(`${serviceUrl}`, formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                }
            })
    }
}
