const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <section className="nav">
      <div className="nav-item">
        <a href="/" className="nav-link">Home</a>
      </div>
      <div>
        <a href="/SavedCandidates" className="nav-link">Potential Candidates</a>
      </div>
    </section>
  )
};

export default Nav;
