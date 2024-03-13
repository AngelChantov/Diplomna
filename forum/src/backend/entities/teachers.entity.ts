import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"
import {Courses} from "./courses.entity";

@Entity()
export class Teachers{
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column(()=>Courses)
    courses: Courses[]




}