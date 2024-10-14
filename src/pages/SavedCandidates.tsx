// import CandidateSearch from "./CandidateSearch";
// import { Candidate } from "../types";
// import { useState } from "react";

const SavedCandidates = () => {

// const [tableData, setTableData] = useState([{}]); 

// const [newRow, setNewRow] = useState<Candidate | null>(null);

// add a new row to the table based on the saved data in local storage


  return (
    <>
      <h1>Potential Candidates</h1>
      {/*WHEN the potential candidates page loads
        THEN the user should see a list of previously saved potential
        candidates with their name, username, location, avatar, email, html_url, and company*/}
        <table>
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
          <tbody>
            <tr>
              <td>candidate.name</td>
              <td>candidate.username</td>
              <td>candidate.location</td>
              <td>candidate.avatar_url</td>
              <td>candidate.email</td>
              <td>candidate.html_url</td>
              <td>candidate.company</td>
            </tr>
          </tbody>
        </table>

      {/*WHEN the page reloads
        THEN the list of potential candidates should persist and be available for viewing*/}
      
      
      {/*WHEN there are no potential candidates
        THEN an appropriate message should be displayed indicating no candidates have been accepted*/}

    </>
  );
};

export default SavedCandidates;