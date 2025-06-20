"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  Bell,
  ShoppingCart,
  Sun,
  Moon,
  Search,
  Grid3X3,
  ChevronDown,
  Settings,
  MapPin,
  Building,
  Menu,
  X,
} from "lucide-react"

interface HeaderProps {
  onThemeToggle?: () => void
  isDarkMode?: boolean
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkMode = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedCountry, setSelectedCountry] = useState("Country")
  const [selectedCity, setSelectedCity] = useState("City")
  const [selectedLanguage, setSelectedLanguage] = useState("ARA")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const categories = ["All Categories", "Electronics", "Fashion", "Home & Garden", "Automotive", "Services"]

  const countries = ["Country", "UAE", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain"]
  const cities = ["City", "Dubai", "Riyadh", "Kuwait City", "Doha", "Manama"]
  const languages = ["ARA", "ENG"]
  const currencies = ["USD", "AED", "SAR"]

  const handleSearch = () => {
    console.log("Search:", {
      searchQuery,
      selectedCategory,
      selectedCountry,
      selectedCity,
    })
  }

  const handleAdvanced = () => {
    console.log("Advanced search clicked")
  }

  const handleAddOrder = () => {
    console.log("Add Your Free Order clicked")
  }

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Settings className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold">
                  <span className="text-green-600">MOTA</span>
                  <span className="text-orange-500">MAKIN</span>
                </span>
                <span className="text-xs md:text-sm text-gray-600" dir="rtl">
                  متمكن
                </span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Desktop Right Side Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Auth Links */}
              <div className="flex items-center space-x-2 text-sm">
                <Button variant="link" className="text-gray-700 hover:text-green-600 p-0">
                  JOIN US
                </Button>
                <span className="text-gray-400">or</span>
                <Button variant="link" className="text-gray-700 hover:text-green-600 p-0">
                  LOGIN
                </Button>
              </div>

              {/* Notification */}
              <Button variant="ghost" size="sm" className="p-2">
                <Bell className="w-4 h-4 text-gray-600" />
              </Button>

              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <div className="w-4 h-3 bg-green-600 rounded-sm"></div>
                    <span className="text-sm">{selectedLanguage}</span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang} onClick={() => setSelectedLanguage(lang)}>
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Currency Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <span className="text-sm">{selectedCurrency}</span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {currencies.map((currency) => (
                    <DropdownMenuItem key={currency} onClick={() => setSelectedCurrency(currency)}>
                      {currency}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" onClick={onThemeToggle} className="p-2">
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-gray-600" />}
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="p-2">
                <ShoppingCart className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                {/* Auth Links */}
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Button variant="link" className="text-gray-700 hover:text-green-600 p-0">
                    JOIN US
                  </Button>
                  <span className="text-gray-400">or</span>
                  <Button variant="link" className="text-gray-700 hover:text-green-600 p-0">
                    LOGIN
                  </Button>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Bell className="w-4 h-4 text-gray-600" />
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-green-600 rounded-sm"></div>
                        <span className="text-sm">{selectedLanguage}</span>
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {languages.map((lang) => (
                        <DropdownMenuItem key={lang} onClick={() => setSelectedLanguage(lang)}>
                          {lang}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <span className="text-sm">{selectedCurrency}</span>
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {currencies.map((currency) => (
                        <DropdownMenuItem key={currency} onClick={() => setSelectedCurrency(currency)}>
                          {currency}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button variant="ghost" size="sm" onClick={onThemeToggle} className="p-2">
                    {isDarkMode ? (
                      <Sun className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <Moon className="w-4 h-4 text-gray-600" />
                    )}
                  </Button>

                  <Button variant="ghost" size="sm" className="p-2">
                    <ShoppingCart className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Search Toggle */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="w-full flex items-center justify-between"
            >
              <span>Search & Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSearchExpanded ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {/* Desktop Search Row */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="p-2">
              <Grid3X3 className="w-5 h-5 text-gray-600" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 min-w-[140px]">
                  <span className="text-sm">{selectedCategory}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex-1 relative max-w-md">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1"
                onClick={handleSearch}
              >
                <Search className="w-4 h-4 text-gray-500" />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 min-w-[100px]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{selectedCountry}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {countries.map((country) => (
                  <DropdownMenuItem key={country} onClick={() => setSelectedCountry(country)}>
                    {country}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 min-w-[80px]">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">{selectedCity}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {cities.map((city) => (
                  <DropdownMenuItem key={city} onClick={() => setSelectedCity(city)}>
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50" onClick={handleAdvanced}>
              Advanced
            </Button>

            <Button className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap" onClick={handleAddOrder}>
              Add Your Free Order
            </Button>
          </div>

          {/* Mobile Search Expanded */}
          {(isSearchExpanded || window.innerWidth >= 768) && (
            <div className="md:hidden space-y-3">
              {/* Search Input */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1"
                  onClick={handleSearch}
                >
                  <Search className="w-4 h-4 text-gray-500" />
                </Button>
              </div>

              {/* Category Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center justify-between">
                    <span className="text-sm">{selectedCategory}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Location Row */}
              <div className="grid grid-cols-2 gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm truncate">{selectedCountry}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {countries.map((country) => (
                      <DropdownMenuItem key={country} onClick={() => setSelectedCountry(country)}>
                        {country}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span className="text-sm truncate">{selectedCity}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {cities.map((city) => (
                      <DropdownMenuItem key={city} onClick={() => setSelectedCity(city)}>
                        {city}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                  onClick={handleAdvanced}
                >
                  Advanced
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleAddOrder}>
                  Add Free Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 py-3">
            <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700">
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700">
              Our Services
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-green-400 hover:bg-gray-700 flex items-center space-x-1"
                >
                  <span>Categories</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.slice(1).map((category) => (
                  <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700">
              Contact Us
            </Button>
            <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700">
              Guide
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden py-2">
            <div className="grid grid-cols-3 gap-1 text-center text-sm">
              <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700 py-2">
                Home
              </Button>
              <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700 py-2">
                Services
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700 py-2">
                    Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.slice(1).map((category) => (
                    <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-2 gap-1 text-center text-sm mt-1">
              <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700 py-2">
                Contact Us
              </Button>
              <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-gray-700 py-2">
                Guide
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
