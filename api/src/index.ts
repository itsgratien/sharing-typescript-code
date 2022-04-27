import express from "express";
import { CourseT } from "@/lib/types/Course";

const app = express();

const courses: CourseT[] = [
  {
    title: "gratien",
    _id: "id",
    description: "description",
    createdAt: "crea",
    updatedAt: "upda",
  },
];

app.get("/course", (req, res) => res.json({ data: courses }));

app.listen(5000, () => console.log(`Server is listening on port 5000`));
