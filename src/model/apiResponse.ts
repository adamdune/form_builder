interface SuccessResponse<data> {
  status: 200;
  data: data;
}

interface FailureResponse {
  status: 500;
  errorMessage: string;
}

export type Response<data> = SuccessResponse<data> | FailureResponse;
