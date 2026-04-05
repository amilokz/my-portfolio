const projects = [
  {
    id: 1,
    title: "SERP – Employee Record Portal",
    category: "Laravel",
    shortDesc: "Search & Employee Record Portal with roles, CRUD, and authentication.",
    description: "A complete admin portal built using Laravel 12, MySQL, Bootstrap, and JavaScript. Includes user roles, employee record CRUD, authentication, authorization middleware, and a modern responsive UI.",
    image: "serp.jpeg",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    demo: "https://serpproject.42web.io/?i=1",
    github: "https://github.com/amilokz",
    codeSnippet: `// Laravel Controller - Employee Management
public function index()
{
    $employees = Employee::with('department')->paginate(10);
    return view('employees.index', compact('employees'));
}

// Authentication Middleware
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('employees', EmployeeController::class);
});`
  },
  {
    id: 2,
    title: "Local E-Market Website",
    category: "PHP",
    shortDesc: "A complete local marketplace with admin panel & product management.",
    description: "Developed a full marketplace system using PHP, MySQL, Bootstrap, and JavaScript. Features product listings, CRUD operations, admin dashboard, customer management, and secure login system.",
    image: "ecommerce_web.jpeg",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    demo: "https://localemarket.42web.io/website",
    github: "https://github.com/amilokz",
    codeSnippet: `// PHP - Product Management
<?php
session_start();
require_once 'config/database.php';

class ProductController {
    public function addProduct($data) {
        $sql = "INSERT INTO products (name, price, category) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([$data['name'], $data['price'], $data['category']]);
    }
}
?>`
  },
  {
    id: 3,
    title: "Echo World",
    category: "React",
    shortDesc: "A modern, animated UI project using React & Tailwind.",
    description: "A front-end website built with React and Tailwind CSS featuring animations, responsive layouts, reusable components, and smooth transitions.",
    image: "echoworld.jpeg",
    stack: ["React", "Tailwind CSS"],
    demo: "https://echo-world-alpha.vercel.app/",
    github: "https://github.com/amilokz",
    codeSnippet: `// React Component Example
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      className="hero-section"
    >
      <h1 className="text-4xl font-bold">Welcome to Echo World</h1>
    </motion.div>
  );
};

export default HeroSection;`
  },
  {
    id: 4,
    title: "FlexiPDF",
    category: "PHP",
    shortDesc: "PDF merge, compress, and preview tool built with PHP & JS.",
    description: "A lightweight PDF management web application that allows users to merge, compress, preview, and download PDF files.",
    image: "flexipdf.jpeg",
    stack: ["PHP", "JavaScript", "HTML", "CSS"],
    demo: "https://flexipdf.vercel.app/",
    github: "https://github.com/amilokz",
    codeSnippet: `// JavaScript - PDF Merge Function
async function mergePDFs(files) {
    const { PDFDocument } = PDFLib;
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
    }
    
    const pdfBytes = await mergedPdf.save();
    return pdfBytes;
}`
  },
  {
    id: 5,
    title: "Full Stack React App",
    category: "React",
    shortDesc: "Authentication + REST APIs + MongoDB full-stack application.",
    description: "A dynamic MERN app that includes secure login/signup, protected routes, REST APIs, and a real-time data experience.",
    image: "reactfullstackapp.jpeg",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://reacthub-omega.vercel.app/",
    github: "https://github.com/amilokz",
    codeSnippet: `// Node.js API - Authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(400).json({ error: 'User not found' });
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid password' });
    
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});`
  },
  {
    id: 6,
    title: "Smart Service Booking",
    category: "HTML/CSS",
    shortDesc: "A clean layout using HTML, CSS, and Bootstrap.",
    description: "Smart Service Booking is a web-based system that enables users to book services online in a simple and efficient way.",
    image: "smartservicebooking.png",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://smart-service-booking.vercel.app/",
    github: "https://github.com/amilokz/smart-service-booking",
    codeSnippet: `// JavaScript - Booking Form Handler
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        customerName: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Booking confirmed!');
            window.location.reload();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});`
  },
  {
    id: 7,
    title: "Mini Apps",
    category: "Python",
    shortDesc: "Weather, calculator, todo mini apps collection.",
    description: "A collection of mini web applications including weather forecast, calculator, and todo list built with Python Flask.",
    image: "miniapps.png",
    stack: ["Python", "Flask", "API"],
    demo: "https://mini-apps-liart.vercel.app/",
    github: "https://github.com/amilokz/mini-apps.git",
    codeSnippet: `# Python Flask - Weather App
from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/weather', methods=['GET', 'POST'])
def weather():
    if request.method == 'POST':
        city = request.form['city']
        api_key = 'YOUR_API_KEY'
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        
        response = requests.get(url)
        weather_data = response.json()
        
        if weather_data['cod'] == 200:
            temp = weather_data['main']['temp']
            description = weather_data['weather'][0]['description']
            return render_template('weather.html', temp=temp, description=description, city=city)
    
    return render_template('weather.html')`
  },
  {
    id: 8,
    title: "School Landing Page",
    category: "HTML/CSS",
    shortDesc: "Beautiful school landing page with animations and sections.",
    description: "A modern landing page for an educational institute featuring hero banner, about section, contact section, and responsive layout.",
    image: "schoolproject.jpeg",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://amilokz.github.io/my-school-project/",
    github: "https://github.com/amilokz/my-school-project.git",
    codeSnippet: `// JavaScript - Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});`
  }
];

export default projects;