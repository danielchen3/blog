import { useActionState, useState } from 'react';
import './Styles.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function ShoppingList({ count }) {
  var id
  if (count % 3 === 0) id = 1
  else if (count % 3 === 1) id = 2
  else id = 3
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: id === product.id ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


function Square({ value, onSquareClick }) {

  // const [value, setValue] = useState(null)

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}


// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState([]);

//   const show_index = (index) => {
//     setActiveIndex(prevIndices => {
//       return [...prevIndices, index];              // 添加索引
//     });
//   };

//   const hide_index = (index) => {
//     setActiveIndex(prevIndices => {
//       return prevIndices.filter(i => i !== index)             // 添加索引
//     });
//   };
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex.includes(0)}
//         onShow={() => show_index(0)}
//         onHide={() => hide_index(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex.includes(1)}
//         onShow={() => show_index(1)}
//         onHide={() => hide_index(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  const [score, setScore] = useState({
    Taylor: 0,
    Sarah: 0
  });
  return (
    <div>
      {isPlayerA ? (
        <Counter person="Taylor" score={score} setScore={setScore}/>
      ) : (
        <Counter person="Sarah" score={score} setScore={setScore}/>
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person, score, setScore}) {
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}'s score: {score[person]}</h1>
      <button onClick={() => setScore({...score, [person]: score[person] + 1})}>
        Add one
      </button>
    </div>
  );
}




// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);
//   const [score, setScore] = useState(0);
//   return (
//     <div>
//       {isPaused ? (
//         <p>See you later!</p> 
//       ) : (
//         <Counter score={score} setScore={setScore}/> 
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isPaused}
//           onChange={e => {
//             setIsPaused(e.target.checked)
//           }}
//         />
//         Take a break
//       </label>
//     </div>
//   );
// }



function Panel({
  title,
  children,
  isActive,
  onShow,
  onHide
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <>
          <p>{children}</p>
          <button onClick={onHide}>
            Hide
          </button>
        </>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}



// export default function Form(){

//   const [status, setStatus] = useState('empty');
//   const [answer, setAnswer] = useState('')
//   const [error, setError] = useState(null)


//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     var isright;
//     setStatus('submitting');
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       isright = submitForm(answer);
//       if (!isright){
//         setStatus('wrong')
//       }
//       else{
//         setStatus('success')
//       }
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }
//   if (status === 'right')
//     return (<h2> That's right </h2>)

//   function handleTextareaChange(e) {
//     setStatus('typing');
//     setAnswer(e.target.value);
//   }

//   function handlereset(){
//     setStatus('empty')
//     setAnswer('')
//   }

//   return(
//     <>
//       <h1>City Quiz</h1>
//       <p>In which city is there a billboard that turns air into drinkable water?</p>
//       <form onSubmit={handleSubmit}>
//         <textarea 
//         disabled={status === 'submitting'} value={answer} onChange={handleTextareaChange}>
//         </textarea>
//         <br/>
//         <button className='button-modern' disabled={status === 'submitting' || status === 'empty'}>
//           submit
//         </button>
//         <br></br>
//         <button onClick={handlereset} className='button-modern' disabled={status === 'submitting' || status === 'empty'}>
//           reset
//         </button>
//       </form>
//       {
//         status === 'error' &&
//         <p className="Error">
//           Network Error
//         </p>
//       }
//       {
//         status === 'wrong' &&
//         <p className="wrong">
//           Good guess but a wrong answer. Try again!
//         </p>
//       }
//       {
//         status === 'submitting' &&
//         <p className="submitting">
//           Submitting to check
//         </p>
//       }
//     </>
//   )
// }

function submitForm(answer) {
  // Pretend it's hitting the network.
  if(answer.toLowerCase()!=='lima') return false;
  else return true
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let shouldError = answer.toLowerCase() !== 'lima'
  //     if (shouldError) {
  //       reject(new Error('Good guess but a wrong answer. Try again!'));
  //     } else {
  //       resolve();
  //     }
  //   }, 1500);
  // });
}


function sendMessage(message) {
  // ...
}

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(nextMove) {
//     setCurrentMove(nextMove);
//   }

//   const moves = history.map((squares, move) => {
//     let description;
//     if (move > 0) {
//       description = 'Go to move #' + move;
//     } else {
//       description = 'Go to game start';
//     }
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <Profile />
      <ShoppingList count={count} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}