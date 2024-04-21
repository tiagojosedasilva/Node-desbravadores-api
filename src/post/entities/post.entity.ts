import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    url: string;

}
