"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [resultMessage, setResultMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      inquiryType: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "8398e0b4-2186-4aa9-9764-26a0428eb7e0",
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResultMessage(json.message);
        setResultMessage("Success: " + json.message);
      } else {
        setResultMessage("Error: " + json.message);
      }
    } catch (error) {
      console.error("Form submission error: ", error);
      setResultMessage("Something went wrong!");
    } finally {
      setIsLoading(false);
      setTimeout(() => setResultMessage(""), 3000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <nav className="bg-amber-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 text-2xl text-center rounded-b-xl font-bold text-white">Cake Shop Menu</div>
              </div>
              <div className="hidden sm:flex sm:ml-auto">
                <a href="/" className="text-white px-6 text-lg font-medium hover:underline underline-offset-4">Home</a>
                <a href="/menu" className="text-white text-lg font-medium hover:underline underline-offset-4">Menu</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="backgroundContainer">
        <Card className="w-full max-w-md mx-auto bg-orange-100">
          <CardHeader>
            <CardTitle className="text-red-950 text-center py-2 ">Contact Bakiezza</CardTitle>
            <CardDescription className="text-black font-medium text-nowrap">
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4"  action="https://api.web3forms.com/submit" method="POST" id="form">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                <input type="hidden" name="access_key" value="8398e0b4-2186-4aa9-9764-26a0428eb7e0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiryType">Type of Inquiry</Label>
                <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order">Cake Order</SelectItem>
                    <SelectItem value="customization">Customization</SelectItem>
                    <SelectItem value="pricing">Pricing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-red-900 hover:bg-red-950" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {resultMessage && <p className="mt-4 text-center">{resultMessage}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


//hello everyone myself vedant shinde from SE comps department, i have very interest in software development.
//In high school i mainly focused on java and c++ 