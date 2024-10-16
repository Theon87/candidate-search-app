// import CandidateSearch from "./CandidateSearch";
import Candidate from "../interfaces/Candidate.interface";
import { useEffect, useState } from "react";

console.log("Does this work?");

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

// pull data from local storage and add to the table
  const getStoredCandidates = () => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setPotentialCandidates(JSON.parse(storedCandidates));
    }
    return potentialCandidates;
  };

  console.log(potentialCandidates);

  useEffect(() => {
    getStoredCandidates();
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {/*WHEN the potential candidates page loads
        THEN the user should see a list of previously saved potential
        candidates with their name, username, location, avatar, email, html_url, and company*/}

        
      {/*WHEN the page reloads
        THEN the list of potential candidates should persist and be available for viewing*/}

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Userame</th>
              <th>Location</th>
              <th>Avatar</th>
              <th>Email</th>
              <th>html_url</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody className="tbody tr:nth-child(odd)">
            {potentialCandidates.map((candidate, index) => (
            <tr className="tr" key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.username}</td>
              <td>{candidate.location}</td>
              <td><img src={candidate.avatar_url}></img></td>
              <td>{candidate.email}</td>
              <td>{candidate.html_url}</td>
              <td>{candidate.company}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </>
  );
};

export default SavedCandidates;