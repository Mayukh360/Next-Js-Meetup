import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetail() {
  return (
    <>
      <MeetupDetails
        image="https://images.unsplash.com/photo-1618823617088-b170e5d7501a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80"
        title="First Meetup"
        address="205 London,Uk,"
        description="This is the First Meetup"
      />
    </>
  );
}

export async function getStaticPaths(){

  return{
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1',
        },
      },
      {
        params:{
          meetupId:'m2',
        },
      },
      {
        params:{
          meetupId:'m3',
        },
      },
    ]
  };
}

export async function getStaticProps(context) {
  // fetch

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.unsplash.com/photo-1618823617088-b170e5d7501a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80",
        title: "First Meetup",
        address: "205 London,Uk,",
        description: "This is the First Meetup",
      },
    },
  };
}
