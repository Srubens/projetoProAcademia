import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";
import { fromBase64 } from '../../utils/base64'

/**
 * CONECTANDO COM A PLANILHA PEGANDO O ID DELA
 */
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) =>{
    console.log(JSON.parse(req.body))
    try{
        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key:fromBase64(process.env.SHEET_PRIVATE_KEY),
        })

        await doc.loadInfo()

        const data = JSON.parse(req.body)
        const readFile = doc.sheetsByIndex[3]
        await readFile.addRow({
            Nome:data.nome,
            Email:data.email,
            Telefone:data.telefone,
            'Data Aniversario':data.daniversario
        })

        res.end(JSON.stringify({
            Nome:data.nome,
            Parabens:"Você foi cadastrado com sucesso!"
        }))



    }catch(err){
        console.log('error', err)
        res.end('error', err)
    }
}