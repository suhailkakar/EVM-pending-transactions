import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import PendingTransactions from "../components/PendingTransactions";

export default function Home(props) {
  return (
    <main>
      <Navbar />
      <Hero />
      <PendingTransactions node={props.NODE} />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      NODE: process.env.POLYGON_NODE_URL,
    },
  };
}
