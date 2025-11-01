import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteSats";
import { useState } from "react";
import { Votes, VoteType } from "../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes();
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
    </div>
  );
}
