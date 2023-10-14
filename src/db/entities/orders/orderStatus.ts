import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderNS } from "../../../../@types/type_order.js";

@Entity('orderStatus')
export class OrderStatus extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: OrderNS.OrderStatus;

    @Column('uuid')
    orderId: OrderNS.OrderStatus;

    @Column('uuid')
    orderNote: OrderNS.OrderStatus;

    @Column('uuid')
    statusCode: OrderNS.OrderStatus;

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
}