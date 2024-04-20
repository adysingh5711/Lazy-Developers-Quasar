
import { useRef, useState,useEffect} from 'react'
// import './App.css'
import { questions } from '../api/data';

function QuizMaster() {
  let [index,setIndex]= useState(0);
  // const [questions, setQuestions] = useState([]);
  

  // useEffect(() => {
  //    const fetchdata =async () =>{
  //     try {
  //       const res= await axios.get("http://localhost:3000/Quizapi/questions");
  //       console.log(res.data[0].questions);
  //       setQuestions(res.data[0].questions);
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //     fetchdata();
  // }, []);

  const [question,setQuestion]= useState(questions[index])
  const [lock,setLock] = useState(false)
  const [score,setScore] = useState(0)
  const [result,setResult] = useState(false)
  const Option1 = useRef(null)
  const Option2 = useRef(null)
  const Option3 = useRef(null)
  const Option4 = useRef(null)

  const option_array = [Option1,Option2,Option3,Option4]

  const checkAns = (e,ans)=>{
    if(lock===false){
      if(question.ans===ans){
        e.target.classList.add("bg-success")
        setLock(true)
        setScore(prev=>prev+1)
      }else{
        e.target.classList.add("bg-danger")
        setLock(true)
        option_array[question.ans-1].current.classList.add("bg-success")
      }
    }
    
  }
  const next = ()=>{
    if(lock===true){
      if(index===questions.length-1){
        setResult(true);
        return 0;
      }
      setIndex(++index)
      setQuestion(questions[index])
      setLock(false)
      option_array.map(option=>{
        option.current.classList.remove('bg-danger')
        option.current.classList.remove('bg-success')
        return null;
      })
    }
  }
 const reset = ()=>{
    setIndex(0)
    setQuestion(questions[0])
    setScore(0)
    setLock(false)
    setResult(false)
 }

  return (
    <div style={{width:'100%',height:'100vh'}} className='background-div d-flex justify-content-center align-items-center'>
      <div style={{width:'600px',height:'600px'}} className='blur-div border rounded shadow d-flex flex-column  p-3  '>
      <h1 className='text-center mt-3'>Quiz App</h1>
      <hr className='w-75 ms-4' />
      {result?<></>:<>
      <h5 className='ms-2'>{index+1}. {question.question}</h5>
      <ul className=''>
        <li ref={Option1} onClick={(e)=>{checkAns(e,1)}} className='p-1 border shadow rounded mb-2 pointer'>{question.option1}</li>
        <li ref={Option2} onClick={(e)=>{checkAns(e,2)}} className='p-1 border shadow rounded mb-2 pointer'>{question.option2}</li>
        <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}  className='p-1 border shadow rounded mb-2 pointer'>{question.option3}</li>
        <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}  className='p-1 border shadow rounded m-1 pointer'>{question.option4}</li>
      </ul>
      <div className='text-center'><button onClick={next} className='btn btn-info text-center mt-2 w-50 '>Next</button></div>
      <div className='text-center'><p className='mt-2'>{index+1} of {questions.length} Questions</p></div>
      </>}
      {
        result?<><h4 className='text-center'>You Scored {score} out of {questions.length}</h4>
      <div className='text-center'><button onClick={reset} className='btn btn-danger '>Reset</button></div></>:<></>
      }
      
      
      </div>
    </div>
  )
}

export default QuizMaster
