import Student from './Students.jsx'


function App() {
  return(
    <>
     <Student name="Retsu" age={21} isStudent={false} />
     <Student name="Kenshin" age= {22} isStudent={true} />
     <Student name="Sanosuke" age={27} isStudent={false} />
     <Student name="Kaoru" age={25} isStudent={true} /> 
     <Student />

    </>
   
  )
}

export default App
