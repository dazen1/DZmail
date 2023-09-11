import { Link } from "react-router-dom";



export function MailPreview({ mail }) {
//   console.log("from MailPreview", mail);
  return (
    <article className="container table-row">
        <Link to={`/mail/${mail.id}`}>
            <h4 className="mail-overflow">{mail.from}</h4>
            <h4 className="mail-overflow"><strong>{mail.subject}</strong></h4>
            <h5 className="mail-overflow">{mail.body}</h5>
            <h4 className="mail-overflow table-date">{new Date(mail.sentAt).toLocaleDateString()}</h4>
        </Link>
    </article>
  );
}


// Mail structure

// const email = {
//   id: "e101",
//   subject: "Miss you!",
//   body: "Would love to catch up sometimes",
//   isRead: false,
//   isStarred: false,
//   sentAt: 1551133930594,
//   removedAt: null, //for later use
//   from: "momo@momo.com",
//   to: "user@appsus.com",
// };
