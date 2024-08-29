import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const uploadImage = async (req: Request, res: Response) => {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    try {

        if (!image || !customer_code || !measure_datetime || !measure_type) {
            return res.status(400).json({ error: 'Parâmetros inválidos' });
        }

        const response = await axios.post('https://api.gemini.google.com/v1/vision', {
            image, // Base64 image string
            api_key: process.env.GEMINI_API_KEY, // Use a chave da API do ambiente
        });

        // Verifique o código de status da API Gemini
        if (response.status !== 200) {
            return res.status(response.status).json({
                error_code: 'GEMINI_API_ERROR',
                error_description: `Erro ao consultar a API do Gemini: ${response.data.message}`,
            });
        }

        const { image_url, measure_value, measure_uuid } = response.data;

        // Salve os dados no banco...
        return res.status(200).json({ image_url, measure_value, measure_uuid });
    } catch (error) {
        return res.status(500).json({
            error_code: 'GEMINI_API_ERROR',
            error_description: 'Erro ao consultar a API do Gemini',
        });
    }
};

console.log('API Key:', process.env.GEMINI_API_KEY);