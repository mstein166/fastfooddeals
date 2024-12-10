"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { deals } from './data/deals'
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState('all')
  const [maxPrice, setMaxPrice] = useState(Math.max(...deals.map(deal => deal.price)))
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [showNoAccountDeals, setShowNoAccountDeals] = useState(false)

  const maxPossiblePrice = Math.ceil(Math.max(...deals.map(deal => deal.price)))

  const resetFilters = () => {
    setSearch('')
    setSelectedRestaurant('all')
    setMaxPrice(maxPossiblePrice)
    setIsVegetarian(false)
    setShowNoAccountDeals(false)
  }

  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      const matchesSearch = deal.description.toLowerCase().includes(search.toLowerCase()) ||
        deal.restaurant.toLowerCase().includes(search.toLowerCase())
      const matchesRestaurant = selectedRestaurant === 'all' || deal.restaurant === selectedRestaurant
      const matchesPrice = deal.price <= maxPrice
      const matchesVegetarian = !isVegetarian || deal.isVegetarian
      const matchesNoAccount = !showNoAccountDeals || !deal.requiresMembership

      return matchesSearch && matchesRestaurant && matchesPrice && matchesVegetarian && matchesNoAccount
    })
  }, [search, selectedRestaurant, maxPrice, isVegetarian, showNoAccountDeals])

  const restaurants = Array.from(new Set(deals.map(deal => deal.restaurant)))

  return (
    <main className="container mx-auto p-4 font-sans">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/fast-food.png"
          alt="Fast Food Deals Logo"
          className="w-24 h-24"
        />
        <div className="flex-1 flex justify-between items-center">
          <h1 className="text-4xl font-bold font-sans">Fast Food Deals</h1>
          <Button onClick={() => window.location.href = 'https://buymeacoffee.com/maddiestein'}
            variant="outline"
            className="border-green-500 text-green-900 hover:bg-green-50 pulse-on-hover -mt-3"
          >
            Contribute here!
          </Button>
        </div>
      </div>
      <h2 className="text-1xl mb-4 font-sans">Looking for meal deals or offers for no more than <span className="font-bold">$10?</span> <br />
        Check out what&apos;s currently available at the biggest national fast food chains (pricing may vary by location)</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search deals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="restaurant">Restaurant</Label>
          <Select value={selectedRestaurant} onValueChange={setSelectedRestaurant}>
            <SelectTrigger id="restaurant">
              <SelectValue placeholder="Select restaurant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Restaurants</SelectItem>
              {restaurants.map((restaurant) => (
                <SelectItem key={restaurant} value={restaurant}>
                  {restaurant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="price">Max Price: ${maxPrice.toFixed(2)}</Label>
          <Slider
            id="price"
            min={0}
            max={maxPossiblePrice}
            step={0.01}
            value={[maxPrice]}
            onValueChange={(value) => setMaxPrice(value[0])}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vegetarian"
              checked={isVegetarian}
              onCheckedChange={(checked) => setIsVegetarian(checked as boolean)}
            />
            <Label htmlFor="vegetarian">Vegetarian Only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="noAccount"
              checked={showNoAccountDeals}
              onCheckedChange={(checked) => setShowNoAccountDeals(checked as boolean)}
            />
            <Label htmlFor="noAccount">No Account Required</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Button onClick={resetFilters} variant="outline">
          Reset Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDeals.map((deal) => (
          <div key={deal.id} className="card-container">
            <Card className="bg-teal-50 border-2 card transition-transform duration-300 ease-in-out hover:scale-105 h-[280px] flex flex-col">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{deal.restaurant}</CardTitle>
                <div className="w-16 h-16 relative">
                  <Image
                    src={deal.logoUrl}
                    alt={`${deal.restaurant} logo`}
                    fill
                    sizes="(max-width: 64px) 100vw, 64px"
                    className="object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="whitespace-pre-line">{deal.description}</p>
                <p className="font-bold">${deal.price.toFixed(2)}</p>
                {deal.isVegetarian && <p className="text-green-600">Vegetarian</p>}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {deal.url && (
                  <a
                    href={deal.url.startsWith('http') ? deal.url : `https://${deal.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>
                )}
                {deal.requiresMembership && (
                  <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                    Acct. Req&apos;d.
                  </Badge>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center font-bold mt-8 mb-4">
        <p>Have a deal to submit? Send it to diverteddelights@gmail.com</p>
      </div>
    </main>
  )
}




