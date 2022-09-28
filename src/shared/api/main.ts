import { typeReq } from "../types/main"

export const getData = (): Promise<typeReq[]> => {
  return fetch(`https://api.sweb.ru/notAuthorized/`, {
    method: 'POST',
    body: JSON.stringify(
      {
        jsonrpc: "2.0",
        method: "vpsOsConfig",
        params: {}
      }
    )
  })
  .then(res => {
    return res.json()
  })
}