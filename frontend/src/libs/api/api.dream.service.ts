import axios, { type AxiosInstance } from 'axios'
import appconfig from '../../appconfig'
import { handlerError } from './api.util'

class ApiDreamService {
  private axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: appconfig.backendUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async dream(dream: string): Promise<string> {
    return await this.axiosInstance.post(
      `/api/dream`,
      { dream },
    )
      .then(r => {
        if(r.data?.dream?.text) return r.data.dream.text
        throw new Error(r.data)
      })
      .catch(e => handlerError(e))
  }
}

export default new ApiDreamService()
