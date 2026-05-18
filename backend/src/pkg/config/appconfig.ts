import dotenv from "dotenv"
dotenv.config()

const value = (value: any): string  => {
    if(!value) throw new Error('Invalid env property: ' + value)
    return value as string
}

export default {
    URI: value(process.env.GATWAY_URI),
    PORT: Number(value(process.env.GATWAY_PORT)),
    yandex: {
        OAuthTokem: value(process.env.Y_OAUTH_TOKEN),
        XFolderId: value(process.env.Y_X_FOLDER_ID)
    }
}
