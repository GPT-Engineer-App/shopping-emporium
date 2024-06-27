import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cartStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Sample Product",
      description: "This is a sample product.",
      price: 19.99,
    };
    addToCart(product);
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to ShopEasy</h1>
      <p className="text-lg text-center">Your one-stop shop for all your needs</p>
      <Separator className="my-4" />
      <div className="flex flex-col items-center space-y-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Search Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="search">Product Name</Label>
                <Input id="search" placeholder="Enter product name" />
              </div>
              <Button className="w-full" onClick={handleAddToCart}>Add Sample Product to Cart</Button>
              <Link to="/cart">
                <Button className="w-full mt-4">View Cart</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;