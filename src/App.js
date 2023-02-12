import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <><body>
      <header>
      <h1> MY TODO LIST</h1>
      <form id="new-task-form">
        <input
         type="text" 
         id="new-task-input" 
         placeholder="Create a plan"/>
        <input
         type="submit" 
         id="new-task-submit"
          value="Add task"/>
      </form>
    </header>
    
    <main>
        <section class="task-list"> 
        <h2>Tasks</h2>

        <div id="tasks">
        
        
      </div>
      </section>
      </main>
      
      </body></>
    
  );
}


export default App;
