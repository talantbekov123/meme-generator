import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src="./logo.png" />
        <h2>Meme Generator</h2>
        <div>React Course - Project 3</div>
      </div>

      <form className='container'>
        <div className='item-1'>
          <div className='inputText'>
          Top text
          </div>
          <input type='text' placeholder='Shut up'></input>
        </div>
        <div className='item-2'>
        <div className='inputText'>
          Bottom text
          </div>
          <input type='text' placeholder='And take my money'></input>
        </div>
        <div className='item-3'>
          <input className='submitText' type='submit' value="Get a new meme image 🖼"></input>

        </div>
      </form>

      <img className='image' src="meme.jpeg"/>
    </div>
  );
}

export default App;
