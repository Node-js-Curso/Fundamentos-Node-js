const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const apiKey = '581213f6209b4762b1d5698d920d9c74';
const audioPath = path.join(__dirname, './audio.mp3');

async function transcribeAudio(filePath) {
    if (!fs.existsSync(filePath)) throw new Error('❌ Archivo no encontrado.');

    // Subir audio
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    const uploadRes = await axios.post('https://api.assemblyai.com/v2/upload', form, {
        headers: { authorization: apiKey, ...form.getHeaders() },
    });
    
    // Solicitar transcripción
    const transcriptRes = await axios.post('https://api.assemblyai.com/v2/transcript', {
        audio_url: uploadRes.data.upload_url
    }, {
        headers: { authorization: apiKey, 'Content-Type': 'application/json' }
    });

    const id = transcriptRes.data.id;
    let status = 'queued', data;

    // Esperar resultado
    while (['queued', 'processing'].includes(status)) {
        await new Promise(res => setTimeout(res, 3000));
        const check = await axios.get(`https://api.assemblyai.com/v2/transcript/${id}`, {
            headers: { authorization: apiKey }
        });
        status = check.data.status;
        data = check.data;
    }

    if (status !== 'completed') throw new Error(`❌ Error: ${data.error}`);

    // Guardar transcripción
    const output = path.join(__dirname, 'transcription.txt');
    fs.writeFileSync(output, data.text, 'utf8');
    console.log('✅ Transcripción completada. Archivo guardado en:', output);
}

transcribeAudio(audioPath).catch(err => console.error(err.message));
