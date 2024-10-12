const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
      {/*WHEN the potential candidates page loads
        THEN the user should see a list of previously saved potential
        candidates with their name, username, location, avatar, email, html_url, and company*/}
      {/*WHEN the page reloads
        THEN the list of potential candidates should persist and be available for viewing*/}
      {/*WHEN there are no potential candidates
        THEN an appropriate message should be displayed indicating no candidates have been accepted*/}
      {/*WHEN I click the "-" button
        THEN the next candidate's information should be displayed without saving the current candidate*/}
    </>
  );
};

export default SavedCandidates;