import "../styles/globals.css";
import "../styles/vscode.css";
import type { AppProps } from "next/app";
import Layouts from "#/components/layout/Index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layouts>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </Layouts>
    </div>
  );
}

export default MyApp;
