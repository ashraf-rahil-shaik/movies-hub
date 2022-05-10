
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';

function App() {
  return (
  
    <BrowserRouter>
    
    <Header />
  <div className="App">
 <Containter>
   <Switch>
<Route path = '/' component ={Trending} exact />
<Route path = '/' component ={Movies} />
<Route path = '/' component ={Series} />
<Route path = '/' component ={Search} />

     </Switch>
 </Containter>
  </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
 
    
  );
}

export default App;
