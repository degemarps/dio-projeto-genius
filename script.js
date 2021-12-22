let order = [];
let clickedOrder = [];
let score = 0;

// 0 -verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');

// Cria ordem aleatória de cores
const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Acende a próxima cor
const lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    } 
  }
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

// Clique do usuário
const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.add('selected');
  });

  checkOrder();
};

// Retorna a cor
const createColorElement = (color) => {
  if (color === 0) {
    return green;
  } else if (color === 1) {
    return red;
  } else if (color === 2) {
    return yellow;
  } else if (color === 3) {
    return blue;
  }
};

// Próximo nível do jogo
const nextLevel = () => {
  score += 1;
  shuffleOrder();
};

// Caso o jogador perca
const gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
};

// Iniciar o jogo
const playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
};
