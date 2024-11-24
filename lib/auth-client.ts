import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  baseURL: "https://www.authapi-six.vercel.app" // the base url of your auth server
})