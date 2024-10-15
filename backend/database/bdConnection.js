import mongoose from "mongoose";

 export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
    })
    .then(() => {
        console.log("Connected to Database Successfuly");
    }).catch(err=>{
        console.log(`Some Error Occured While Connecting to Database! ${err}`);
    });
};