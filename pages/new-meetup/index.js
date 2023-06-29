import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import axios from 'axios';

export default function NewMeetup() {
    async function AddMeetuphandler(enteredData){
    const response= await fetch('/api/new-meetup',{
      method:'POST',
      body:JSON.stringify(enteredData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data)
    }
  return (
    <>
    <NewMeetupForm onAddMeetup={AddMeetuphandler}/>
    </>
  )
}
