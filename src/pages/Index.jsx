import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/cartStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const { addToCart } = useCartStore();

  const products = {
    phones: [
      {
        id: 1,
        name: "iPhone",
        description: "This is an iPhone.",
        price: 999.99,
        image: "/images/iphone.jpg",
      },
    ],
    computers: [
      {
        id: 2,
        name: "Mac",
        description: "This is a Mac.",
        price: 1999.99,
        image: "/images/mac.jpg",
      },
    ],
    watches: [
      {
        id: 3,
        name: "AppleWatch",
        description: "This is an AppleWatch.",
        price: 399.99,
        image: "/images/applewatch.jpg",
      },
    ],
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Welcome to ShopEasy</h1>
      <p className="text-lg text-center">Your one-stop shop for all your needs</p>
      <Separator className="my-4" />
      <Tabs defaultValue="phones" className="w-full">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="phones">Phones</TabsTrigger>
          <TabsTrigger value="computers">Computers</TabsTrigger>
          <TabsTrigger value="watches">Watches</TabsTrigger>
        </TabsList>
        <TabsContent value="phones">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.phones.map((product) => (
              <Card key={product.id} className="w-full">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <Button className="w-full mt-4" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="computers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.computers.map((product) => (
              <Card key={product.id} className="w-full">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <Button className="w-full mt-4" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="watches">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.watches.map((product) => (
              <Card key={product.id} className="w-full">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <Button className="w-full mt-4" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <Link to="/cart">
        <Button className="w-full mt-4">View Cart</Button>
      </Link>
    </div>
  );
};

export default Index;