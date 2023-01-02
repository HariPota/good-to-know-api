import { Request } from 'express'

export type RequestBody<T> = Request<Record<string, never>, Record<string, never>, T>;
