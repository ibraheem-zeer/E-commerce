export namespace AdminNS {

    export interface Admin {
        id: string,
        userName: string,
        email: string
        password: string,
        createdAt: Date,
        updatedAt: Date
    }

}