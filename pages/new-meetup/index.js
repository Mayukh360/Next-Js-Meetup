import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'

export default function NewMeetup() {
    const AddMeetuphandler=(enteredData)=>{
    console.log(enteredData);
    }
  return (
    <>
    <NewMeetupForm onAddMeetup={AddMeetuphandler}/>
    </>
  )
}
