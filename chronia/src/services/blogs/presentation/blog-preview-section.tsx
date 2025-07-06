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
import { ArrowRight, Calendar, Loader } from "lucide-react";
import useSWR from "swr";
import { getBlogsWithPagination } from "../data/blog-repository";
import { FC } from "react";
import { Blog } from "../domain/blog";
import { format } from "date-fns";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow dark:bg-slate-900 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {format(blog.date, "MMM d, yyyy")}
          </span>
        </div>
        <CardTitle className="text-lg hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          {blog.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {blog.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.ceil(blog.content.length / 200)} min read
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function BlogPreviewSection() {
  const { isLoading, data } = useSWR(["/blogs", 3, 1], getBlogsWithPagination);

  return (
    <section id="blog" className="py-20 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest from My Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sharing insights about web development, technology, and more
          </p>
        </div>

        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {data?.blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
