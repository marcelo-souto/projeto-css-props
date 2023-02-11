import ps from 'prompt-sync';
import ch from 'chalk';
import colors from './colors.js';
import List from './List.js';

function logger(value) {
  const color = Math.floor(Math.random() * (colors.length - 1));
  return console.log(ch[colors[color]](value));
}

const prompt = ps();
let value;
const properties = new List();

logger(`============== Digite suas propriedades CSS ==============`);
logger(`====== Para listar em ordem alfabetica digite SAIR ========\n`);

do {
  properties.add(value);
  value = prompt();
} while (value.toLowerCase() !== 'sair');

logger(`\n=================== Suas propriedades CSS ==================\n`);

properties.listInOrder().forEach((item, index) => {
  logger(`[${index + 1}] ${item}`);
});