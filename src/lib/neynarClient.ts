// npm i @neynar/nodejs-sdk
import { NeynarAPIClient} from "@neynar/nodejs-sdk"
import { env } from "env.mjs"

// make sure to set your NEYNAR_API_KEY .env
// don't have an API key yet? get one at neynar.com
export const neynarClient = new NeynarAPIClient(env.NEXT_PUBLIC_NEYNAR_API_KEY)
