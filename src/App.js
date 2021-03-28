import React, { useState, Suspense } from 'react';
import './i18nextConf';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import JobListingComp from './screens/JobListingsCompScreen';
import InterviewPage from './screens/InterviewPage';
import StepperInterview from './screens/StepperInterview';
import JobListScreen from './screens/JobListScreen';
import JobInfo from "./screens/JobInfo";
import Rec from "./components/Rec";
import Header from './components/Header';
import BlogScreen from './screens/BlogScreen';
import PrepareCateogry from './screens/PrepareCategory';
import Prep5 from './components/Prep5';
import CategoryQuestions from './components/CategoryQuestions';
import Prep6 from './components/Prep6';
import CompanyQuestions from "./screens/CompanyQuestions";

function App() {

  const [rec, setRec] = useState([]);
  const [category, setCategory] = useState("")
  return (
    <>
      <Router>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Route path="/" exact>
            <HomeScreen/>
          </Route>
          <Route path="/search" exact>
              <Rec rec={rec} setRec={setRec} />
          </Route>
          <Route exact path="/joblists">
            <JobListScreen rec={rec} setRec={setRec}/>
          </Route>
          <Route exact path="/joblists/:id" component={JobInfo} />

          <Route exact path="/joblists/:id/:category" component={PrepareCateogry}/>

          <Route path="/blog" component={BlogScreen} />

          <Route path="/login" exact component={LoginScreen}/>
          <Route path="/signup" exact component={SignUpScreen}/>

          <Route path="/joblistings/company" component={JobListingComp}/>
          <Route exact path="/interview" exact component={InterviewPage}/>
          <Route exact path="/interview/prepare" component={StepperInterview}/>
          <Route exact path="/companyquestions" component={CompanyQuestions}/>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
