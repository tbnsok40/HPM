import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("questions_pkey", ["id"], { unique: true })
@Entity("questions", { schema: "public" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "answerA" })
  answerA: string;

  @Column("text", { name: "answerA_type" })
  answerAType: string;

  @Column("text", { name: "answerB" })
  answerB: string;

  @Column("text", { name: "answerB_type" })
  answerBType: string;
}
