"use client"
import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function OrderNow() {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-2">Bakiezza</h1>
        <p className="text-center text-gray-900 mb-6">Custom cakes for all your special occasions</p>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Place Your Order</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" required />
              </div>
            </div>

            <div>
              <Label htmlFor="cakeType">Cake Type</Label>
              <Select>
                <SelectTrigger id="cakeType">
                  <SelectValue placeholder="Select cake type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vanilla">Vanilla</SelectItem>
                  <SelectItem value="chocolate">Chocolate</SelectItem>
                  <SelectItem value="red-velvet">Red Velvet</SelectItem>
                  <SelectItem value="fruit">Fruit Mix</SelectItem>
                  <SelectItem value="black-forest">Black Forest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="size">Cake Size</Label>
              <Select>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Select cake size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6inch">6 inch (serves 8-10)</SelectItem>
                  <SelectItem value="8inch">8 inch (serves 12-16)</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="instructions">Special Instructions</Label>
              <Textarea id="instructions" placeholder="Any special requests or dietary requirements?" />
            </div>

            <div>
              <Label>Pickup Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit" className="w-full bg-red-900 hover:bg-orange-950">Place Order</Button>
          </form>
        </div>
      </div>
    </div>
  )
}