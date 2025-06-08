import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CardPersonal from './pages/CardPersonal'
import ErrorMenssage from './components/ErrorMenssage'
import PersonalInformation from './pages/PersonalInformation'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <CardPersonal/>
        },
        {
          path: "/personalInformation",
          element: <PersonalInformation/>
        },
        {
          path: "*",
          element: <ErrorMenssage/>
        }
      ]
    }
  ], {
    basename: "/mycard"  // ← ESTA ES LA LÍNEA CLAVE
  })

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App