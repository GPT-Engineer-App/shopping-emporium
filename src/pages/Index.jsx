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

  const products = [
    {
      id: 1,
      name: "iPhone",
      description: "This is an iPhone.",
      price: 999.99,
      imageUrl: "https://example.com/iphone.jpg", // Add the image URL for iPhone
    },
    {
      id: 2,
      name: "Mac",
      description: "This is a Mac.",
      price: 1999.99,
      imageUrl: "https://example.com/mac.jpg", // Add the image URL for Mac
    },
    {
      id: 3,
      name: "AppleWatch",
      description: "This is an AppleWatch.",
      price: 399.99,
      imageUrl: "https://example.com/applewatch.jpg", // Add the image URL for AppleWatch
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to ShopEasy</h1>
      <p className="text-lg text-center">Your one-stop shop for all your needs</p>
      <Separator className="my-4" />
      <div className="flex flex-col items-center space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-4" /> {/* Add the image */}
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Button className="w-full mt-4" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
        <Link to="/cart">
          <Button className="w-full mt-4">View Cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;