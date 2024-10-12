import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  // TODO: Create state variables for the candidate data and the search query
  const [candidate, setCandidate] = useState<Candidate | null>();
  const [searchQuery, setSearchQuery] = useState<string>('');

  // TODO: Create a function to add a candidate to saved candidates 
  const addToSavedCandidates = () => {
    let savedCandidates = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedCandidates === 'string') {
      savedCandidates = JSON.parse(storedCandidates);
    }
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  };

  const nextCandidate = () => {
    searchGithub().then((data) => {
      setCandidate(data);
    });

    nextCandidate();
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
    <button onClick={() => addToSavedCandidates()}>+</button>
    
    {/*WHEN I click the "-" button
      THEN the next candidate's information should be displayed without saving the current candidate */}
    <button onClick={() => searchGithub()}>-</button>
    
    {/*WHEN there are no candidates available to review
      THEN an appropriate message should be shown indicating no more candidates are available */}
  </>
  );
};

export default CandidateSearch;


// GIVEN a candidate search application









