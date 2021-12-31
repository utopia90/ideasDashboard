import { networkInterfaces } from "os";
import React, { useState, useEffect } from "react";
import { NewIdeaBtn } from "../components/Buttons";
import { IdeasDashBoard } from "../components/Dashboard";
import {
  InputStyledBody,
  InputStyledTitle,
  Square,
} from "../components/Square";

export default function Homepage() {
  const handleTitleChange = (newTitle: string, idx: number) => {
    setNotes([
      ...notes.slice(0, idx),
      {
        ...notes[idx],
        title: newTitle,
        lastModified: Date.now(),
      },
      ...notes.slice(idx + 1),
    ]);
  };

  const handleBodyChange = (newBody: string, idx: number) => {
    setNotes([
      ...notes.slice(0, idx),
      {
        ...notes[idx],
        body: newBody,
        lastModified: Date.now(),
      },
      ...notes.slice(idx + 1),
    ]);
  };

  interface Notes {
    id: number;
    title: string;
    body: string;
    lastModified: number;
  }

  const squaresArray: Notes[] = [
    { id: 0, title: "", body: "", lastModified: 0 },
    { id: 1, title: "", body: "", lastModified: 0 },
    { id: 2, title: "", body: "", lastModified: 0 },
    { id: 3, title: "", body: "", lastModified: 0 },
    { id: 4, title: "", body: "", lastModified: 0 },
    { id: 5, title: "", body: "", lastModified: 0 },
    { id: 6, title: "", body: "", lastModified: 0 },
    { id: 7, title: "", body: "", lastModified: 0 },
  ];

  const addNewIdea = () => {
    const numbers = notes.map((x) => x.id);

    const lastIndex = numbers[numbers.length - 1];

    const newNotes = [
      ...notes,
      { id: lastIndex + 1, title: "", body: "", lastModified: Date.now() },
    ];

    setNotes(newNotes);
  };
  const closeSquare = (id: number) => {
    const newNotes = [...notes];
    const newArray = newNotes.filter((x) => x.id !== id);
    setNotes(newArray);
  };

  const filterByTime = () => {
    const notesCopy = [...notes]
  var  latest = notesCopy.reduce(function (r, a) {
      return r.lastModified > a.lastModified ? r : a;
  });
    
    console.log(latest)

    

 
    

  };
  let [notes, setNotes] = useState(squaresArray);
  return (
    <>
      <NewIdeaBtn onClick={addNewIdea}>Add New Idea</NewIdeaBtn>
      <IdeasDashBoard>
        <button onClick={filterByTime}>Filter by time</button>
        {[...notes].map((square, idx) => (
          <Square key={idx}>
            <button onClick={() => closeSquare(square.id)}>X</button>
            <InputStyledTitle
              type="text"
              onChange={(e) => handleTitleChange(e.target.value, idx)}
            />
            <InputStyledBody
              onChange={(e) => handleBodyChange(e.target.value, idx)}
            />
          </Square>
        ))}
      </IdeasDashBoard>
    </>
  );
}
