class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number | null, // null = network / abort
    public readonly body?: unknown,
    public readonly headers?: Headers,
  ) {
    super(message);
    this.name = "HttpError";
  }

  isNetworkError() {
    return this.status === null;
  }

  isClientError() {
    return this.status !== null && this.status >= 400 && this.status < 500;
  }

  isServerError() {
    return this.status !== null && this.status >= 500;
  }
}

export { HttpError };
