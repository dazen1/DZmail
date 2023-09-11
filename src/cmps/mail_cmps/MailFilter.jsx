import { useState } from "react";

export function MailFilter({filter , onChangeFilter }) {
  
    console.log(filter)
  
    return (
    <form onChange={(ev)=>console.log(ev)}>
        <label htmlFor="search">Search</label>
        <input type="search" id="search" placeholder="Search"/>
        <label htmlFor="read">Read</label>
        <input type="radio" id="read" name="isRead"/>
        <label htmlFor="unread">Unread</label>
        <input type="radio" id="unread" name="isRead"/>
        <label htmlFor="all">all</label>
        <input type="radio" id="all" name="isRead"/>
    </form>
  );
}
