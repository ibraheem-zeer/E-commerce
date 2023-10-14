import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OrderNS } from "../../../../@types/type_order.js";
import { Order } from "./order.js";
import { OneToMany } from "typeorm/browser";

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
    //orederStatus OneToOne With status 
    
    @OneToMany(() => Order, (order) => order.orderStatus)
    order: Order
}