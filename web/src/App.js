import React from 'react';

import './Global.css'
import './App.css'

// Component - isolated / reutilizable code block that doesn't interfere in others
// Property - information that is passed through objects - example <Header title="Hello world1"/> (title is the property)
// State - information kept by the component (imutability)

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button>Salvar</button>
        </form>
      </aside>

      <main>

      </main>
    </div>
  );
}

export default App;
