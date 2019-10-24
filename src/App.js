// These dependencies are bundled within praxis-scripts
import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const LocationLogger = ({ location }) => {
  return location && location.key ? (
    <div>I've got a location key and it's {location.key}</div>
  ) : (
    <div>no key :(</div>
  )
}

const Main = () => {
  return (
    <>
      <header style={{ background: '#DDD', padding: '1rem' }}>
        HEADER
      </header>
      <nav
        style={{
          padding: '1rem',
          background: '#EEE',
        }}
      >
        <Link to="/">Home</Link> {' '}
        <Link to="/component">component</Link>{' '}
        <Link to="/render">render</Link>{' '}
        <Link to="/render-log">render-log</Link>{' '}
      </nav>
      <main
        style={{
          outline: '1px solid #EEE',
          margin: '1rem',
          padding: '1rem',
        }}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={({ location }) => <LocationLogger location={location} />}
          />
          <Route
            exact
            path="/component"
            component={LocationLogger}
          />
          <Route
            exact
            path="/render"
            render={({ location }) => <LocationLogger location={location} />}
          />
          <Route
            exact
            path="/render-log"
            render={({ location }) => {
              console.log('location', location)
              return (
                <>
                  <LocationLogger location={location} />
                </>
              )
            }}
          />
        </Switch>
      </main>
    </>
  )
}
const App = () => {
  return (
      <Router>
        <Main />
      </Router>
  )
}

export default App
