import { useState } from "react";

function mudarNumero(num: number, operacao: string, primeiroNum: number, segundoNum: number, setPrimeiroNum: any, setSegundoNum: any) {
  if (operacao === "") {
    setPrimeiroNum((prev: number) => Number(`${prev === 0 ? "" : prev}${num}`));
  } else {
    setSegundoNum((prev: number) => Number(`${prev === 0 ? "" : prev}${num}`));
  }
}

function resetar(setPrimeiroNum: any, setSegundoNum: any, setOperacao: any) {
  setPrimeiroNum(0);
  setSegundoNum(0);
  setOperacao("");
}

function calcular(
  operacao: string,
  primeiroNum: number,
  segundoNum: number,
  setResultado: any,
  setPrimeiroNum: any,
  setSegundoNum: any,
  setOperacao: any,
  setContaAntiga: any
) {
  let res = 0;
  switch (operacao) {
    case "+":
      res = primeiroNum + segundoNum;
      break;
    case "-":
      res = primeiroNum - segundoNum;
      break;
    case "X":
      res = primeiroNum * segundoNum;
      break;
    case "÷":
      res = primeiroNum / segundoNum;
      break;
    case "%":
      res = primeiroNum % segundoNum;
      break;
    default:
      break;
  }
  setResultado(res);
  setPrimeiroNum(0);
  setSegundoNum(0);
  setOperacao("");
  setContaAntiga(`${primeiroNum} ${operacao} ${segundoNum}`);
}

export function Home() {
  const [primeiroNum, setPrimeiroNum] = useState(10);
  const [segundoNum, setSegundoNum] = useState(0);
  const [contaAntiga, setContaAntiga] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState(0);

  return (
    <div className="flex flex-1 h-screen w-full bg-gray-600 items-center justify-center">
      <div className="flex flex-col bg-gray-900 text-white p-4 rounded-md gap-2">
        <div className="flex justify-end text-5xl mr-1 gap-2 px-1">
          <p className="text-sm w-full text-white/50">{contaAntiga !== "" ? contaAntiga : ""}­­</p>
          <p>{resultado !== 0 ? resultado : ""}­­</p>
          <p>{primeiroNum !== 0 ? primeiroNum : ""}</p>
          <p className="text-4xl">{operacao !== "" ? operacao : ""}</p>
          <p>{segundoNum !== 0 ? segundoNum : ""}</p>
        </div>
        <div className="grid grid-cols-4 font-semibold text-xl">
          <button
            onClick={() => {
              setPrimeiroNum(0);
              setOperacao('');
              setSegundoNum(0);
              setResultado(0);
              setContaAntiga('');
            }}
            className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer"
          >
            C
          </button>
          <button onClick={() => setOperacao("%")} className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer">%</button>
          <button onClick={() => setOperacao("÷")} className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer">÷</button>
          <button onClick={() => setOperacao("X")} className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer">x</button>

          <button onClick={() => mudarNumero(7, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">7</button>
          <button onClick={() => mudarNumero(8, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">8</button>
          <button onClick={() => mudarNumero(9, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">9</button>
          <button onClick={() => setOperacao("-")} className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer">-</button>

          <button onClick={() => mudarNumero(4, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">4</button>
          <button onClick={() => mudarNumero(5, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">5</button>
          <button onClick={() => mudarNumero(6, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">6</button>
          <button onClick={() => setOperacao("+")} className="bg-gray-600 p-2 m-1 rounded-xs text-pink-500 aspect-square hover:bg-gray-500 transition-all cursor-pointer">+</button>

          <button onClick={() => mudarNumero(1, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">1</button>
          <button onClick={() => mudarNumero(2, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">2</button>
          <button onClick={() => mudarNumero(3, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">3</button>

          <button
            onClick={() =>
              calcular(operacao, primeiroNum, segundoNum, setResultado, setPrimeiroNum, setSegundoNum, setOperacao, setContaAntiga)
            }
            className="bg-pink-500 p-2 m-1 rounded-xs hover:bg-pink-400 transition-all cursor-pointer row-span-2"
          >
            =
          </button>

          <button onClick={() => mudarNumero(0, operacao, primeiroNum, segundoNum, setPrimeiroNum, setSegundoNum)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">0</button>
          <button onClick={() => setOperacao('.')} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">.</button>
          <button onClick={() => resetar(setPrimeiroNum, setSegundoNum, setOperacao)} className="bg-gray-800 p-2 m-1 rounded-xs aspect-square hover:bg-gray-700 transition-all cursor-pointer">Apagar</button>
        </div>
      </div>
    </div>
  );
}
