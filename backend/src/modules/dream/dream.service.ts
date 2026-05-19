import appconfig from "../../pkg/config/appconfig"
import gptService from "../../pkg/gpt/gpt.service"
import { DREAM_PROMPT } from "./dream.constant"

class DreamService {
    async dream(dream: string) {
        try {
            return await gptService.YGpt({
            temperature: 1,
            YandexFolderID: appconfig.yandex.XFolderId,
            YandexOAuthToken: appconfig.yandex.OAuthTokem,
            prompt: DREAM_PROMPT,
            msg: dream
        })
        } catch (e: any) {
            console.error(e.response)
        }
    }
}

export default new DreamService()