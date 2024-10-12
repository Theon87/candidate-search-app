import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  // TODO: Create state variables for the candidate data and the search query
  const [candidateData, setCandidateData] = useState<Candidate | []>([]);
  
  const [searchQuery, setSearchQuery] = useState<string>('');

  // TODO: Create a function to search for a candidate
  const searchForCandidate = async () => {
    const data = await searchGithub();
    setCandidateData(data);
  };

  useEffect(() => {
    searchForCandidate();
  },[]);

  // TODO: Create a function to search for a candidate by username
  const searchForCandidateByUsername = async () => {
    const data = await searchGithubUser(searchQuery);
    setCandidateData(data);
  };

  // TODO: Create a function to save a candidate to the list of saved candidates
  const saveCandidate = () => {
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (savedCandidates) {
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidateData]));
    } else {
      localStorage.setItem('savedCandidates', JSON.stringify([candidateData]));
    }
    displayNextCandidate();
  };

  // TODO: Create a function to display the next candidate
  const displayNextCandidate = () => {
    searchForCandidate();
  };



  return ( 
  <>
    <h1>CandidateSearch</h1>
    {/*Create card to display candidate data*/}
    
    {/*WHEN the candidate search page loads
      THEN the information for one candidate should be displayed, 
      including the candidate's name, username, location, avatar, email, html_url, and company */}
      <section className="card">
        
      </section>
      
    {/*WHEN I click the "+" button
      THEN the candidate should be saved to the list of potential 
      candidates and the next candidate's information should be displayed */}
    <button onClick={() => saveCandidate()}>+</button>
    
    {/*WHEN I click the "-" button
      THEN the next candidate's information should be displayed without saving the current candidate */}
    <button onClick={() => displayNextCandidate()}>-</button>
    
    {/*WHEN there are no candidates available to review
      THEN an appropriate message should be shown indicating no more candidates are available */}
  </>
  );
};

export default CandidateSearch;


// GIVEN a candidate search application









