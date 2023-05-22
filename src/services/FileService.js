import api from "../http";

const serviceUrl = "file"

export default class FileService {
    static async sendFile(file){
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
