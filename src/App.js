import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import TopNews from './components/TopNews/TopNews';
import Fragment from './components/Fragment/Fragment';


function App() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Header></Header>
      <TopNews></TopNews>
      <Fragment></Fragment>
    </div>
  );
}

export default App;
