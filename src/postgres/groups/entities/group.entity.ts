import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';



@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToOne(() => User, (author: User) => author.mygroups, {nullable: true, onDelete: 'SET NULL' })
  public author: User;

  @ManyToMany(() => User, user => user.groups, )
    @JoinTable()
    users: User[];
}