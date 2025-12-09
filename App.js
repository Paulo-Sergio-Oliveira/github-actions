function main() {
  console.log('--- Executando App.js no GitHub Actions ---');
  
  console.log(`Versão do Node.js em uso: ${process.version}`);
  console.log(`Diretório atual: ${process.cwd()}`);
  
  const resultado = 2 + 3;
  console.log(`O resultado da operação 2 + 3 é: ${resultado}`);
  
  console.log('--- App.js finalizado com sucesso ---');
}

main();