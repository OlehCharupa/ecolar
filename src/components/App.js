import React, { Suspense } from 'react'
import SpinerLoader from '../components/spinerLoader/SpinerLoader'
import { Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import routes from '../routes/routes'
import Footer from './footer/Footer';

const App = () => {
  return (
    <>
      <main>
        <Suspense fallback={<SpinerLoader />}>
          <Switch>
            {routes.map((route) => <PublicRoute key={route.label} {...route} />)}
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
