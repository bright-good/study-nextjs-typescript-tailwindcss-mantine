import "src/lib/mantineBase.css";
import "src/lib/tailwind.css";
import "../styles/globals.css";

import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

const MyApp = (props: AppProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <props.Component {...props.pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
