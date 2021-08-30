import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("answers_pkey", ["id"], { unique: true })
@Entity("answers", { schema: "public" })
export class Answers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "1" })
  1: string;

  @Column("text", { name: "2" })
  2: string;

  @Column("text", { name: "3" })
  3: string;

  @Column("text", { name: "4" })
  4: string;

  @Column("text", { name: "5" })
  5: string;

  @Column("text", { name: "6" })
  6: string;

  @Column("text", { name: "7" })
  7: string;

  @Column("text", { name: "8" })
  8: string;

  @Column("text", { name: "9" })
  9: string;

  @Column("text", { name: "10" })
  10: string;

  @Column("text", { name: "11" })
  11: string;

  @Column("text", { name: "12" })
  12: string;

  @Column("text", { name: "13" })
  13: string;

  @Column("text", { name: "14" })
  14: string;

  @Column("text", { name: "15" })
  15: string;

  @Column("text", { name: "16" })
  16: string;

  @Column("text", { name: "MBTI" })
  mbti: string;
}
