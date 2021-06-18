export interface ErrorResponse {
    error: number,
    error_text: string,
}

export type SuccessFullResponse<T> = {
    data: T
}

export type Response<T> = SuccessFullResponse<T> | ErrorResponse