
import App from '@/components/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import { LazyAbout } from '@/pages/about/About.lazy';


const routes = [
  {
      path: "/admin",
      element: <App/>,

      children: [
          {
              path: '/admin/about',
              element: (
                  <Suspense fallback={'loading...'}>
                      <LazyAbout></LazyAbout>
                  </Suspense>
              )
          }
      ]
  },
]

export const router = createBrowserRouter(routes);

export default routes