import './App.css'
import MainHeader from '../MainPage/MainHeader/MainHeader';
import SubscriptionContainer from '../MainPage/SubscriptionContainer/SubscriptionContainer';
import FilterComponent from '../MainPage/FilterComponent/FilterComponent';

export default function App() {
 
  return (
    <main className='app'>
      <div className='main-page'>
        <MainHeader />

        <h2>Welcome, Shop Owner!</h2>
        <p>Select a subscription below to see more details.</p>
        
        <FilterComponent />

        <SubscriptionContainer />
  
        <footer><a href="https://www.flaticon.com/free-icons/tea-bag" title="tea-bag icons">Tea-bag icon created by Freepik - Flaticon</a></footer>
      </div> 
    </main>
  );
}