import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useCartStore from '@/store/cartStore';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Shopping Cart</h1>
      <div className="flex flex-col items-center space-y-4">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <Card key={product.id} className="w-full max-w-md">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
              </CardContent>
            </Card>
          ))
        )}
        {cart.length > 0 && (
          <Button variant="destructive" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;