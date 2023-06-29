import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add and list Meetings,fully responsive for all kind of mobile display and awsome user experience"
        />
      </Head>
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
