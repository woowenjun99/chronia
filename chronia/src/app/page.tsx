"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  Award,
} from "lucide-react";
import BlogPreviewSection from "@/services/blogs/presentation/blog-preview-section";

// Hardcode variables here for fun since there is nothing secretive
const GITHUB_LINK = "https://github.com/woowenjun99";
const LINKEDIN_PROFILE_LINK = "https://www.linkedin.com/in/wen-jun-woo";
const EMAIL_LINK = "mailto:wjranger99@gmail.com";

export default function PersonalHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/linkedin.jpeg" />
              <AvatarFallback>WJ</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Wen Jun
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <ThemeToggle />
            <Button asChild size="sm">
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>

          {/* Mobile menu with theme toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  Singapore, SG
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {"Hi, I'm "}
                <span className="text-blue-600 dark:text-blue-400">
                  Wen Jun
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                A Backend Developer passionate about building scalable web
                applications and sharing content and knowledge through code and
                content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="text-lg px-8 py-3">
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-3 bg-transparent"
                >
                  <Link href="/blog">Read My Blog</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={GITHUB_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={LINKEDIN_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={EMAIL_LINK}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 dark:from-blue-500 dark:to-purple-700 p-1">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/linkedin.jpeg"
                      className="rounded-full"
                    />
                    <AvatarFallback className="text-6xl">WJ</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I graduated from National University of Singapore with a
                Bachelors Degree in Engineering (Computer Engineering). I enjoy
                building products to solve problems and have a lot of fun with
                coding.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I interned at DBS as a Software Engineer in Test and TikTok as a
                Backend Engineer in the Data Platform and am currently a Full
                Time Backend Engineer at OKX, one of the biggest crypto
                exchange.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "NextJS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        1 Years
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Professional Experience
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        3 Projects
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Successfully Delivered
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        0 Articles
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Technical Blog Posts
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-gray-50 dark:bg-slate-800"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            <Card className="dark:bg-slate-900 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl dark:text-white">
                      Senior Full-Stack Developer
                    </CardTitle>
                    <CardDescription className="text-lg dark:text-gray-300">
                      TechCorp Inc.
                    </CardDescription>
                  </div>
                  <Badge variant="outline">2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lead development of scalable web applications serving 100K+
                  users. Architected microservices infrastructure and mentored
                  junior developers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-900 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl dark:text-white">
                      Full-Stack Developer
                    </CardTitle>
                    <CardDescription className="text-lg dark:text-gray-300">
                      StartupXYZ
                    </CardDescription>
                  </div>
                  <Badge variant="outline">2020 - 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Built the entire web platform from scratch, implementing
                  real-time features and payment processing. Grew user base from
                  0 to 10K users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-slate-900 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl dark:text-white">
                      Frontend Developer
                    </CardTitle>
                    <CardDescription className="text-lg dark:text-gray-300">
                      WebAgency Pro
                    </CardDescription>
                  </div>
                  <Badge variant="outline">2019 - 2020</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Developed responsive websites and web applications for various
                  clients. Focused on performance optimization and user
                  experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">SASS</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg dark:text-white">
                    E-Commerce Platform
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <CardDescription className="dark:text-gray-300">
                  Full-featured online store with payment processing, inventory
                  management, and admin dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={GITHUB_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg dark:text-white">
                    Task Management App
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <CardDescription className="dark:text-gray-300">
                  Collaborative project management tool with real-time updates,
                  team collaboration, and analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={GITHUB_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg dark:text-white">
                    Weather Dashboard
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <CardDescription className="dark:text-gray-300">
                  Beautiful weather application with forecasts, maps, and
                  location-based recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">OpenWeather API</Badge>
                  <Badge variant="outline">Charts.js</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={GITHUB_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Lets Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I am always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <a href={EMAIL_LINK}>
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3 bg-transparent"
            >
              <a
                href={LINKEDIN_PROFILE_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/linkedin.jpeg" />
              <AvatarFallback>WJ</AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold">Wen Jun</span>
          </div>
          <p className="text-gray-400 mb-4">Backend Developer</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href={GITHUB_LINK}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_PROFILE_LINK}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={EMAIL_LINK}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Wen Jun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
