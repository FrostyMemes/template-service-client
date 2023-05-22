import api from "../http";

const serviceUrl = "markdown"

export default class MarkdownService {
    static async sendMarkdown(markdown) {
        return api.get(`${serviceUrl}`, {
            params: {
                markdown: markdown
            }
        })
    }
}