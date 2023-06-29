import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
     // const {title,image,address,description}=data
    const client = await MongoClient.connect(
      "mongodb+srv://mkc360:m.c.605551@cluster0.mxwuzmm.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollecton = db.collection("meetups");
    const result = await meetupsCollecton.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Request successful" });
  }

 
}

export default handler;
