#!/usr/bin/env node

import { fileURLToPath } from 'url';
import path from 'path';
import { generateSchemas } from '../src/generate-schemas.js';

// CLI-парсер аргументів
function parseArgs() {
    const args = process.argv.slice(2);
    let input: string | undefined;
    let output: string | undefined;
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--input' || args[i] === '-i') input = args[++i];
        if (args[i] === '--out' || args[i] === '-o') output = args[++i];
    }
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    if (!input) input = path.join(__dirname, '../../openrpc.json'); // шукає з root-проєкту
    if (!output) output = path.join(__dirname, '../../schemas.ts');
    return { input, output };
}

const { input, output } = parseArgs();

generateSchemas({ input, output });
