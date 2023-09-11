import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { mailService } from "../services/mail.service";
import { MailList } from "../cmps/mail_cmps/MailList";
import { MailFilter } from "../cmps/mail_cmps/MailFilter";

export function MailIndex() {
    const [mails,setMails] = useState(null)
    const [filterBy,setFilterBy] = useState({
      isRead:false
    })

    //0 const [deletedMaills,setDeletedMails] = useState([])
    
    useEffect(()=>{
        loadMails()
    },[]) //0 should use deleted mails?

    async function loadMails(){
        try{
          const mailBox = await mailService.query()
          console.log('loaded from MailIndex' ,mailBox)
          setMails(mailBox)
        } catch (err) {
            console.error(err)
        }
    }

    // FIXED : list donesnt re-render
    async function onDeleteMail(mailId){
      try{
        console.log("mailId",mailId)
        await mailService.remove(mailId)
        //0 setDeletedMails(mailId) ?
        setMails((prevMails)=>
          prevMails.filter(mail=>mail.id!==mailId)
        )
      } catch (err){
        console.error(err);
      }
    }

    function onChangeFilter(filterBy){
      console.log(filterBy);
      // setFilterBy((prev)=>({...prev,isRead:true}))
    }

  if (!mails) return <div className="loading">Loading...</div> 
  return (
    <div className="container">
      {/* <h1>your emails</h1> */}
      <nav>
        {/* <Link to='/mails/inbox'>Inbox</Link> */}

      </nav>
      <MailFilter filter={filterBy} onChangeFilter={()=>onChangeFilter(filterBy)}/>
      <MailList mails={mails} onDeleteMail={onDeleteMail}/>
      {/* <Outlet /> */}
    </div>
  );
}
