import {MigrationInterface, QueryRunner} from "typeorm";

export class userTable1609935652199 implements MigrationInterface {
    name = 'userTable1609935652199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reactnest"."user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_4797a584b59bfd5692c38e3fcdb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reactnest"."user"`);
    }

}
