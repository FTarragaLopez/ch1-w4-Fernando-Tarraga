import React from "react";
import { MOCK_VIEJOS } from "../../mocks/mock";
import { Gentleman } from "../gentelman/gentelman";

export function Info() {
  return (
    <main className="main">
      <ul className="gentlemen">
        {MOCK_VIEJOS.map((item) => (
          <Gentleman
            id={item.id}
            name={item.name}
            status={item.status}
            profession={item.profession}
            twitter={item.twitter}
            picture={item.picture}
            alternativeText={item.alternativeText}
            selected={item.selected}
          ></Gentleman>
        ))}
      </ul>
    </main>
  );
}
