'use strict';

/* globals ReactDOM */

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />

      <main>
        <section role='region'>
          <address role='contact-info'>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Picutre of Sally with crossed arms" />
            <p>Name: {props.name}</p>
            <p>Email: ABC123@321cba.com</p>
            <p>Phone Number: 123-456-7890</p>
            <p>Address: 123 Abc Rd, Glenview, IL, 60025</p>
          </address>
        </section>

        <section role='region'>
          <h2>Employment History</h2>
          <ul>
            <li>
              <p>IT Business Operations Data Analyst (Dell Technologies)</p>
            </li>
            <li>
            <p>Market Research Analyst (Pearson and Associates)</p>
            </li>
          </ul>
        </section>

        <section role='region'>
          <h2>Education</h2>
          <ul>
            <li>
              <p>Bachelor's in Statistical Science (Southern Methodist University)</p>
              <p>MBA - Concentration in Business Analytics (University of texas at Austin)</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

App.defaultProps = {
  name: 'Sally Student'
};


ReactDOM.render(
  <App name="Yoseph Lee"/>,
  document.querySelector('#root')
);

function Header(props) {
  return (
    <header role='header'>
      <h1>{props.name} Resume</h1>
    </header>
  );
}