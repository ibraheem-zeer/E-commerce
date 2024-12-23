import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Product } from "./Product.js";

@Entity('category')
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 255, nullable: false })
    catName: string;

    @Column({ length: 255, nullable: false })
    catDes: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP()"
    })
    createdAt: Date;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP()"
    })
    UpdatedAt: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[]
}