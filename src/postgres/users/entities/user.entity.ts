import { Group } from 'src/postgres/groups/entities/group.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public username: string;

  @OneToMany(()=> Group, group => group.author, )
  mygroups: Group[];

  @ManyToMany(() => Group, group => group.users, { cascade: true, onDelete: "CASCADE" })
  groups: Group[];

  @ManyToMany(() => User)
  @JoinTable()
  friends: User[];
}