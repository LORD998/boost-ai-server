// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const contexto = `
Você é o assistente do Boost IA. Sua função é ajudar profissionais criativos com:
1. Análise de perfis
2. Sugestão de preços
3. Criação de propostas
4. Insights de performance

Baseie-se nas informações da pessoa e responda de forma profissional, útil e motivadora.
`;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: contexto },
        { role: 'user', content: message }
      ]
    });

    const resposta = chatCompletion.choices[0].message.content;
    res.json({ response: resposta });
  } catch (error) {
    console.error('Erro ao conectar com a IA:', error);
    res.status(500).json({ error: 'Erro ao conectar com a IA.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});
