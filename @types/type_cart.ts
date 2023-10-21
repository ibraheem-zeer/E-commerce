export namespace CartNs {

    export enum Type {
        inOrder = 'inOrder',
        outOrder = 'outOrder',
    }
    export interface Cart {
        id: string,
        quantity: number,
        inOrder: Type,
        createdAt: Date,
        UpdatedAt: Date,
        details: any[],
        customer: any,
        product: any
    }
}