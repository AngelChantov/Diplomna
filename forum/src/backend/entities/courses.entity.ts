import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class Courses {
    @ObjectIdColumn()
    id!: ObjectId

    @Column()
    courseName: string

    @Column()
    courseTeacher: string

    @Column()
    courseCode: string

    @Column()
    date: string

    constructor(id: ObjectId, courseName: string, courseTeacher: string, courseCode: string, date: string) {
        this.id = id;
        this.courseName = courseName;
        this.courseTeacher = courseTeacher;
        this.courseCode = courseCode;
        this.date = date;
    }
}