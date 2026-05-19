import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render failed", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center px-4 py-16">
          <div className="glass max-w-xl rounded-lg p-6 text-center sm:p-8">
            <p className="font-display text-3xl italic text-white">
              Avashik Ahamed
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              The portfolio hit a rendering issue. Please refresh the page, or
              contact me directly at{" "}
              <a
                className="focus-ring text-white underline underline-offset-4"
                href="mailto:avashik529@gmail.com"
              >
                avashik529@gmail.com
              </a>
              .
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
