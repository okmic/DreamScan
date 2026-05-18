import appconfig from "../../pkg/config/appconfig"
import gptService from "../../pkg/gpt/gpt.service"
import { DREAM_PROMPT } from "./dream.constant"

class DreamService {
    async dream(dream: string) {
        return gptService.YGpt({
            temperature: 1,
            YandexFolderID: appconfig.yandex.XFolderId,
            YandexOAuthToken: appconfig.yandex.OAuthTokem,
            prompt: DREAM_PROMPT,
            msg: dream
        })
    }
}

export default new DreamService()