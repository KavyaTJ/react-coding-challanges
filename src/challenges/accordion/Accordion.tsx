import React, { useState } from 'react'
import styles from "./Accordion.module.css"; 
function Accordion() {
    const data=[
        {
            id: 1,
            title: "What is React?",
            content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
          },
          {
            id: 2,
            title: "What is React Native?",
            content: "React Native is a framework for building mobile applications using React and JavaScript. It allows developers to build cross-platform apps with native look and feel.",
          },
          {
            id: 3,
            title: "What is the Virtual DOM?",
            content: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize rendering by updating only the necessary parts of the UI.",
          },
          {
            id: 4,
            title: "What are React Hooks?",
            content: "React Hooks are functions that let you use state and lifecycle features in functional components. Examples include useState, useEffect, and useContext.",
          },
          {
            id: 5,
            title: "What is JSX?",
            content: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a declarative way in React.",
          },
        
    ]
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleAccordion =(id:number)=>{
        setSelectedIndex(selectedIndex ==id ? null :id)
    }
  return (
    <div className={styles.accordionContainer}>
    <h1 className={styles.title}>Accordion</h1>
    <div className={styles.accordion}>
      {data.map((item) => (
        <div key={item.id} className={styles.accordionItem}>
          <button className={styles.accordionButton} onClick={() => toggleAccordion(item.id)}>
            {item.title}
          </button>
          <div className={`${styles.accordionContent} ${selectedIndex === item.id ? styles.open : ""}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Accordion
