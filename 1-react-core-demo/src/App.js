import { createContext, useContext } from 'react';

export function Section({ children }) {
  const level = useContext(LevelContext)
  return (
    <section className='section'>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

const LevelContext = createContext(0); // 默认值为0

export function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    default:
      throw new Error('Invalid heading level')
  }
}

export default function App() {
  return (
    <div>
      <Section>
        <Heading>主标题</Heading>
        <Section>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Section>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
              <Section>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
          </Section>
          </Section>
        </Section>
      </Section>
    </div>
  )
}