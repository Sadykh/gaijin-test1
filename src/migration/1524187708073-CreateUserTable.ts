import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateUserTable1524187708073 implements MigrationInterface {

    tableName: string = 'user';

    public async up(queryRunner: QueryRunner): Promise<any> {
        let columns = [
            new TableColumn({
                name: 'id',
                type: 'integer',
                isGenerated: true,
                isPrimary: true,
            }),
            new TableColumn({
                name: 'name',
                type: 'varchar(255)',
                isNullable: true
            }),
            new TableColumn({
                name: 'surname',
                type: 'varchar(255)',
                isNullable: true
            }),
            new TableColumn({
                name: 'email',
                type: 'varchar(255)',
                isNullable: false,
                isUnique: true,
            }),
            new TableColumn({
                name: 'token',
                type: 'varchar(255)',
                isNullable: false,
                isUnique: true,
            }),
            new TableColumn({
                name: 'confirmEmailToken',
                type: 'varchar(255)',
                isNullable: false,
                isUnique: true
            }),
            new TableColumn({
                name: 'passwordHash',
                type: 'varchar(255)',
                isNullable: false
            }),
            new TableColumn({
                name: 'passwordResetToken',
                type: 'varchar(255)',
                isNullable: false,
                isUnique: true
            }),
            new TableColumn({
                name: 'statusId',
                type: 'integer',
                default: 0,
                isNullable: false
            }),
            new TableColumn({
                name: 'languageId',
                type: 'integer',
                default: 0,
                isNullable: false
            }),
            new TableColumn({
                name: 'currencyId',
                type: 'integer',
                default: 0,
                isNullable: false
            }),
            new TableColumn({
                name: 'totpSecret',
                type: 'varchar(255)',
                default: null,
                isNullable: true
            }),
            new TableColumn({
                name: 'totpEnabled',
                type: 'integer',
                default: 0,
                isNullable: false
            }),
            new TableColumn({
                name: 'passwordUpdatedAt',
                type: 'integer',
                isNullable: false
            }),
            new TableColumn({
                name: 'createdAt',
                type: 'integer',
                isNullable: false
            }),
            new TableColumn({
                name: 'updatedAt',
                type: 'integer',
                isNullable: false
            }),
        ];
        let table = new Table({
            name: this.tableName,
            columns: columns
        });
        return queryRunner.createTable(table);
    }


    public async down(queryRunner: QueryRunner): Promise<any> {
        return queryRunner.dropTable(this.tableName);
    }

}
