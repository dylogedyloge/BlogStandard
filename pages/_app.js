import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../styles/globals.css";
import { Poppins, Righteous } from "@next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { PostsProvider } from "../context/postsContext";

config.autoAddCss = false;

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <PostsProvider>
        <main
          className={`${poppins.variable} ${righteous.variable}  font-body`}
        >
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
      </PostsProvider>
    </UserProvider>
  );
}

export default MyApp;
