import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidateData, setCandidateData] = useState<Candidate[]>([]);

  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  console.log(candidateData);

  // Get data from the API
  const getGithubData = async () => {
    const data = await searchGithub();
    setCandidateData(data);
  };

  // Call the getGithubData function when the page loads
  useEffect(() => {
    getGithubData();
  }, []);

  // Write a function to save a candidate to the list of potential candidates
  const saveCandidates = () => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, ...candidateData]));
    getGithubData();
  };

  // Write a function to display the next candidate
  const displayNextCandidate = () => {
    getGithubData();
    if (!candidateData) {
      console.log('No more candidates available');
    }
  };
  
  return (
    // GIVEN a candidate search application

    // WHEN the candidate search page loads
    // THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company
    <>
      <main>
        <div>
          <h1>Candidate Search</h1>
          <div>
            {candidateData.map((candidate) => (
              <div key={candidate.id}>
                <figure><img src={candidate.avatar_url} alt="avatar"/></figure>
                <h2>{candidate.login}({candidate.login})</h2>
                <p>Name: {candidate.name}</p>
                <p>Location: {candidate.location}</p>
                <p>Email: {candidate.email}</p>
                <p>Company: {candidate.company}</p>
                <p>html_url: {candidate.html_url}</p>
              </div>
            ))}
          </div>
        </div>
        {/* // WHEN I click the "+" button
        // THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed */}
        <button onClick={saveCandidates}>+</button>
        <br/>

        {/* // WHEN I click the "-" button
        // THEN the next candidate's information should be displayed without saving the current candidate */}
        <button onClick={displayNextCandidate}>-</button>
        
        {/* // WHEN there are no candidates available to review
        // THEN an appropriate message should be shown indicating no more candidates are available */}
        {!candidateData ? <p>No more candidates available</p> : null}
        
      </main>
    </>
  );
};

export default CandidateSearch;









