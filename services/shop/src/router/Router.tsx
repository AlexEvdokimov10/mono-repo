
import App from '@/components/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import { Shop } from '@/pages/shop';
import {CardUser} from '@packages/shared/src/components/CardUser'

const routes = [
  {
      path: "/",
      element: <App/>,

      children: [
          {
              path: '/shop/main',
              element: (
                  <Suspense fallback={'loading...'}>
                      <Shop></Shop>
                  </Suspense>
              )
          },
          {
            path:'/shop/second',
            element:(
              <Suspense fallback={'loading...'}>
              <div style ={{color:'red'}}>
               <h1>
                second page
               </h1>
               <CardUser username ={'FROM SHOP'}></CardUser>
              </div>
          </Suspense>
            )
          }
      ]
  },
]

export const router = createBrowserRouter(routes);

export default routes
