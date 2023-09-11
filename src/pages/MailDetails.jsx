import { useNavigate, useParams } from "react-router"
import { mailService } from "../services/mail.service"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function MailDetails() {
  const [mail,setMail] = useState(null)
  const navigate = useNavigate()
  // getting the ID from params
  const mailId = useParams().mailID
  console.log(mailId)

  useEffect(()=>{
    loadMail()
    return ()=>{
      console.log('unmounted');
    }
  },[mailId])
  
  
  async function loadMail(){
    try{
      const mail = await mailService.getById(mailId)
      setMail(mail)
    } catch(err) {
      console.error(err);
      navigate('/mail')
    }
  }
  console.log(mail)
  if (!mail) return <h1>Loading Mail...</h1>
  return (
    <div>
      <Link to='/mail'>← back</Link>
      <div className="container">
        <div className="mail-head">
          <h2>from: {mail.from}</h2>
          <h4>sent at: {new Date(mail.sentAt).toLocaleDateString()}</h4>
        </div>
        <div className="mail-body">
          <h3><strong>{mail.subject}</strong></h3>
          <p>{mail.body}</p>
        </div>
      </div>
      
    </div>
  )
}
