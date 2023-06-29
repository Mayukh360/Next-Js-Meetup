import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import axios from 'axios';
import Head from 'next/head';

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
    <Head>
      <title>Add a new meeting</title>
      <meta name='description' content='add you own meetups and see those meeting location on meetup page' />
    </Head>
    
    <NewMeetupForm onAddMeetup={AddMeetuphandler}/>
    </>
  )
}
