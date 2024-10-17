import app from "./app.js";
import cors from "cors";

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.listen(process.env.PORT, () =>{
    console.log(`Server Running On Port ${process.env.PORT}`);
});