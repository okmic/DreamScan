import axios from 'axios';
import { ErrorForbidden } from '../errors/errors';

class GptService {
  public async YGpt(
    props: {
      'temperature': number,
      'YandexFolderID': string
      'YandexOAuthToken': string
      'prompt': string
      'msg': string
    }
  ): Promise<{ text: string, usageTokens: number }> {
    const result = await this.toGpt(
      props.temperature, props.prompt, props.msg, props.YandexOAuthToken, props.YandexFolderID,
    );
    return result;
  }

  private async getYToken(YPOAuthToken: string, YXFolderId: string): Promise<string> {
    try {
      const response = await axios.post(
        'https://iam.api.cloud.yandex.net/iam/v1/tokens',
        JSON.stringify({
          yandexPassportOauthToken: YPOAuthToken as string,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'x-folder-id': YXFolderId as string,
          }
        }
      );
      if (!response.data) {
        throw new ErrorForbidden(`HTTP error! status: ${response.status}`);
      }
      if (!response.data.iamToken) {
        throw new ErrorForbidden('No iamToken in response');
      }
      return response.data.iamToken;
    } catch (e) {
      throw e;
    }
  }

  private async toGpt(temperature: number, prompt: string, msg: string, YPOAuth: string, YXFolderId: string): Promise<{ text: string, usageTokens: number }> {
    const aimtoken = await this.getYToken(YPOAuth, YXFolderId);
    const promt = {
      'completionOptions': {
        'stream': false,
        'temperature': temperature,
        'maxTokens': '3000'
      },
      'messages': [
        {
          'role': 'system',
          'text': prompt
        },
        {
          'role': 'user',
          'text': msg
        }
      ],
      modelUri: `gpt://${YXFolderId}/yandexgpt-lite`
    };
    let response = await axios.post(
      'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
      JSON.stringify(promt),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aimtoken}`
        }
      }
    );
    if (response.status > 300) {
      throw new ErrorForbidden(`HTTP error! status: ${response.status}`);
    }
    const result = response.data.result?.alternatives[0]?.message?.text;
    if (typeof result !== 'string') throw new ErrorForbidden('invalid response');
    return { text: result, usageTokens: Number(response.data.result.usage.totalTokens) || 1500 };
  }
}

export default new GptService();
