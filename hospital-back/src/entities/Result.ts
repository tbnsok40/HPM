import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("result_pkey", ["id"], { unique: true })
@Entity("result", { schema: "public" })
export class Result {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "image" })
  image: string;

  @Column("text", { name: "explanation" })
  explanation: string;

  @Column("text", { name: "title" })
  title: string;

  @Column("text", { name: "mbti" })
  mbti: string;
}
