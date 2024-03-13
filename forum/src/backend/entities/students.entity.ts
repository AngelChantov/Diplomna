import{Entity,ObjectId,ObjectIdColumn,Column} from "typeorm"
import {Courses} from "./courses.entity";

@Entity()
export class Students {

    @ObjectIdColumn()
    id: ObjectId

    @Column()
    studentName: string

    @Column()
    parentName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column(()=>Courses)
    courses: Courses[]

}