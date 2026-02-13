"use client";

const ErrorPage = ({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-500">
        An unexpected error occurred. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;
