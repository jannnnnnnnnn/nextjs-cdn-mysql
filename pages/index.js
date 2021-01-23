import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEntries } from "../lib/swr-hooks";

export default function Home() {
  const { entries, isLoading } = useEntries();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1>List of Entries in Conferences Table</h1>
      {entries.map((entry, idx) => (
        <li key={idx}>{entry.name}</li>
      ))}
    </>
  );
}
