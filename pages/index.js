
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
const dummy = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://images.unsplash.com/photo-1618823617088-b170e5d7501a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80",
    address: "London",
    description: "This is the First meetup",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    address: "Birmingham",
    description: "This is theSecond meetup",
  },
];

export default function HomePage(props) {
  

  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
// export async function getServerSideProps(context){
//  const req=context.req;
//  const res=context.res;
//  return{
//   props:{
//     meetups:dummy
//   }
//  }
// }

export async function getStaticProps() {
  // Fetching data
  const client = await MongoClient.connect(
    "mongodb+srv://mkc360:m.c.605551@cluster0.mxwuzmm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollecton = db.collection("meetups");
  const meetupsCursor = meetupsCollecton.find(); // Find is special keyword to find all product in database
  const meetups = await meetupsCursor.toArray();
  // console.log(meetups);

  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}
