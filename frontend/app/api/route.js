import fs from 'fs';

export default function handler(req, res) {
  const { metadata, fileName } = req.body;
  const filePath =  process.cwd() +'/articles/'+fileName+'.json';

  try {
    // Lê o arquivo JSON
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Atualiza apenas as metadatas
    data.metadatas = { ...data.metadatas, ...metadata };

    // Escreve de volta no arquivo
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'Metadatas atualizadas com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar as metadatas.' });
  }
}
