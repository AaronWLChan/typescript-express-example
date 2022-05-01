import * as core from 'express-serve-static-core'

interface Query extends core.Query{}

interface Params extends core.ParamsDictionary{}

interface IdentifiableRequestParams extends Params {
  id: string
}

export interface Request<ReqBody = any, ReqQuery = Query, URLParams extends Params = IdentifiableRequestParams>
  extends core.Request<URLParams, any, ReqBody, ReqQuery> {}

