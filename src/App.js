import Navbar from './components/layout/Navbar';
import Email from './components/Email';
import Logos from './components/Logos';
import Boxes from './components/Boxes';
import AddTasks from './components/AddTask';
import Find from './components/Find';
import LearnMore from './components/LearnMore';
import Footer from './components/layout/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
        <Navbar/>
        <Email/>
        <Logos/>
        <Boxes/>
        <AddTasks/>
        <Find/>
        <LearnMore/>
        <div class='flex'>
          <SignIn/>
          <SignUp/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
