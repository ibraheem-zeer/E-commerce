import express from 'express';
import { deleteOrder, getOrders, insertOrder, updateOrder } from '../controllers/controller_order.js';
import { OrderNS } from '../../@types/type_order.js';
import { Order } from '../db/entities/orders/Order.js';
import { authenticate } from '../middleware/authentication.js';
import { getManager } from 'typeorm';

const route = express.Router();

route.post('/create_order', async (req, res) => {
    try {
        const payload: OrderNS.Order = req.body;
        const newOrder = await insertOrder(payload);
        res.status(201).json(newOrder);
    } catch {
        res.status(500).json({ error: 'Failed to create the order' });


    }
})


route.put('/update_order:orderId', async (req, res) => {
    try {
        const orderId: string = req.params.orderId;
        const payload: OrderNS.Order = req.body;
        const updatedOrder = await updateOrder(orderId, payload);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the order' });
    }
});



route.delete('/delete_order/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;
        await deleteOrder(orderId);

        res.status(200).send('Order deleted successfully');
    } catch (error) {
        res.status(500).send('An error occurred while deleting the order');
    }
});


route.get('/all_order', (req, res, next) => {
    getOrders().then(data => {
        res.status(200).send(data)
    }).catch(error => {
        res.status(404).send(error)
    })

})


export default route;

