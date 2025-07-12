"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  BookOpen,
  Plus,
  Heart,
  MessageCircle,
  Calendar,
  ArrowLeft,
  Loader,
} from "lucide-react";
import useSWR from "swr";
import { getBlogsWithPagination } from "@/services/blogs/data/blog-repository";

export default function BlogHomePage() {
  const { data, isLoading } = useSWR(
    ["/blogs", 20, 1, "admin"],
    getBlogsWithPagination
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className=" hidden md:flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Blog
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild>
                <Link href="/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Write
                </Link>
              </Button>
              <Avatar>
                <AvatarImage src="/linkedin.jpeg" />
                <AvatarFallback>WJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to Chronia
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                I write about web development, technology trends, and share
                insights from my journey as a full-stack developer.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/linkedin.jpeg" />
                    <AvatarFallback>WJ</AvatarFallback>
                  </Avatar>
                  <span>Wen Jun</span>
                </div>
                <span>•</span>
                <span>{data?.total ?? 0} articles published</span>
                <span>•</span>
                <span>Updated weekly</span>
              </div>
            </div>

            <div className="space-y-8">
              {isLoading ? (
                <Loader className="animate-spin" />
              ) : (
                (data?.blogs ?? []).map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar>
                          <AvatarImage src="/linkedin.jpeg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Wen Jun
                          </p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>{Math.ceil(post.content.length / 200)}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-white">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-lg leading-relaxed dark:text-gray-300">
                        {post.content}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Load More */}
            {data?.total !== data?.blogs.length && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* About */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">
                    About This Blog
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/linkedin.jpeg" />
                      <AvatarFallback>WJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium dark:text-white">Wen Jun</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Backend Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Sharing my experiences and insights about web development,
                    technology trends, and best practices.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "Node.js",
                      "Design",
                      "Python",
                      "API",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get notified when I publish new articles about web
                    development and technology.
                  </p>
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                    <Button className="w-full" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Archive */}
              <Card className="dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg dark:text-white">
                    Archive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">January 2024</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        5 posts
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">December 2023</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        8 posts
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-300">November 2023</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        6 posts
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
