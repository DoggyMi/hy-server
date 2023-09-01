import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column('text')
  name: string;

  @Column({ length: 200 })
  email: string;
}
