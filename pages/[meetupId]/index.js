import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import Head from "next/head";

export default function MeetupDetail(props) {
  return (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content="This is details page for the meetup list content, visit here and see full details of particular listed meetup"/>
    </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://mkc360:m.c.605551@cluster0.mxwuzmm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollecton = db.collection("meetups");

  const meetups = await meetupsCollecton.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((item) => ({
      params: { meetupId: item._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch

  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://mkc360:m.c.605551@cluster0.mxwuzmm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollecton = db.collection("meetups");

  const selectedMeetups = await meetupsCollecton.findOne({ _id: new ObjectId(meetupId) });


  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
      },
    },
  };
}
