import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum UserStatusList {
    new = 0,
    confirmed = 1
}

export enum UserTotpEnableList {
    isDisable = 0,
    isEnable = 1
}

export enum UserLanguageList {
    ru = 0,
    en = 1
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    name: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    surname: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    token: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    confirmEmailToken: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    passwordHash: string;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
        unique: true,
    })
    passwordResetToken: string;

    @Column({
        type: 'integer',
        nullable: false,
        default: 0,
    })
    statusId: number;

    @Column({
        type: 'integer',
        nullable: false,
        default: 0,
    })
    languageId: number;

    @Column({
        type: 'integer',
        nullable: false,
        default: 0,
    })
    currencyId: number;

    @Column({
        length: 255,
        type: 'varchar',
        nullable: false,
    })
    totpSecret: string;

    @Column({
        type: 'integer',
        nullable: false,
        default: 0,
    })
    totpEnabled: number;

    @Column({
        type: 'integer',
        nullable: false,
    })
    passwordUpdatedAt: number;

    @Column({
        type: 'integer',
        nullable: false,
    })
    createdAt: number;


    @Column({
        type: 'integer',
        nullable: false,
    })
    updatedAt: number;
}