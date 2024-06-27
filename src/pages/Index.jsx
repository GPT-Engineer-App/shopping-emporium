import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
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
              <Button className="w-full">Search</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;