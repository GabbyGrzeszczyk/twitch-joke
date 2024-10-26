import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Define the directory where jokes are stored
    const jokesDir = path.join(process.cwd(), 'jokes');
    
    // Read all filenames in the jokes directory
    const jokeFiles = fs.readdirSync(jokesDir);

    // Randomly select a joke file
    const randomFile = jokeFiles[Math.floor(Math.random() * jokeFiles.length)];
    
    // Read the content of the randomly selected file
    const joke = fs.readFileSync(path.join(jokesDir, randomFile), 'utf8');

    // Respond with the joke as plain text
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(joke);
}
