import { gql, useQuery } from '@apollo/client';

const QUERY_LESSONS = gql `
  query geLessons {
    lessons { 
      id,
      title
    }
  }
`;

function App() {

  const {data} = useQuery(QUERY_LESSONS);
  

  return (
    <>
      <h1 className="text-2xl font-bold">hello world</h1>
      <ul>
        {data?.lessons.map((lesson: any) => <li key={lesson.id}>{lesson.title}</li>)}
      </ul>
    </>
  )
}

export default App
