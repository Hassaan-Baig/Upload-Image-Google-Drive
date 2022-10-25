const fs = require('fs')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 4000

const { google } = require('googleapis')
const { response } = require('express')

const GOOGLE_API_FOLDER_ID = '1W3Yd0dn_hdEOcHIfDgr9tkD49Wbt9WsN'



async function uploadFile(img) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './drive-file-upload-366511-b513671294f1.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': 'snowplace.jpg',
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'image/jpg',
            body: fs.createReadStream(img)
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    } catch (err) {
        console.log('Upload file error', err)
    }
}
app.get('/:id', (req, res) => {
    console.log('req body: ',req.params.id)
    uploadFile(`./${req.params.id}`).then(data => {
    })
}

)



app.listen(port,() => console.log(`Hello world app listening on port ${port}!`))