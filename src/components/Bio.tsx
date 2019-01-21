import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

interface BioProps {
  className?: string;
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "umstek@live.com",
    size: 56
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Wickramaranga Abeygunawardhana" />
      <p>
        My ideas and thoughts, for you to read. Read{" "}
        <a href="https://disclaimergenerator.net/live.php?token=gcnBGUbrePkGKLyDEvNc08zkNrBJ2jXD">
          disclaimer
        </a>{" "}
        first.
        <br />
        (temporary blog until I come up with the <i>perfect</i> stack)
      </p>
    </div>
  );
}

export default Bio;
